import { useEffect, useState } from "react";
import GameCard from "../components/GameCard.jsx";
import { getGames, updateGame, deleteGame } from "../api/games.js";

function Dashboard() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  // useEffect runs once when the component mounts, fetching data
  // from the Express backend (which in turn reads from MongoDB).
  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getGames();
        setGames(data);
      } catch (err) {
        setError("Could not load games. Is the backend server running?");
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const updated = await updateGame(id, { status: newStatus });
    setGames((prev) => prev.map((g) => (g._id === id ? updated : g)));
  };

  const handleAddHours = async (id) => {
    const game = games.find((g) => g._id === id);
    const updated = await updateGame(id, { hoursPlayed: game.hoursPlayed + 1 });
    setGames((prev) => prev.map((g) => (g._id === id ? updated : g)));
  };

  const handleDelete = async (id) => {
    await deleteGame(id);
    setGames((prev) => prev.filter((g) => g._id !== id));
  };

  const filteredGames =
    filter === "All" ? games : games.filter((g) => g.status === filter);

  const totalHours = games.reduce((sum, g) => sum + g.hoursPlayed, 0);

  if (loading) return <div className="page">Loading your library...</div>;
  if (error) return <div className="page error">{error}</div>;

  return (
    <div className="page dashboard-page">
      <h1>My Library</h1>

      <div className="dashboard-stats">
        <span>{games.length} games</span>
        <span>{totalHours} total hours logged</span>
      </div>

      <div className="filter-bar">
        {["All", "Backlog", "Playing", "Completed", "Dropped"].map((s) => (
          <button
            key={s}
            className={filter === s ? "active" : ""}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {filteredGames.length === 0 ? (
        <p>No games in this category yet.</p>
      ) : (
        <div className="game-grid">
          {filteredGames.map((game) => (
            <GameCard
              key={game._id}
              game={game}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
              onAddHours={handleAddHours}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
