// GameCard is a "dumb" reusable component: it just displays data passed
// to it via props, and calls the functions its parent gave it.
// This demonstrates component + props usage cleanly for a presentation.

const STATUS_COLORS = {
  Backlog: "#6b7280",
  Playing: "#2f9bff",
  Completed: "#22c55e",
  Dropped: "#ef4444",
};

function GameCard({ game, onStatusChange, onDelete, onAddHours }) {
  return (
    <div className="game-card">
      <div className="game-card-header">
        <h3>{game.title}</h3>
        <span
          className="status-badge"
          style={{ backgroundColor: STATUS_COLORS[game.status] || "#888" }}
        >
          {game.status}
        </span>
      </div>

      <p className="game-platform">{game.platform}</p>

      <div className="game-stats">
        <span>⭐ {game.rating}/10</span>
        <span>⏱ {game.hoursPlayed} hrs</span>
      </div>

      {game.notes && <p className="game-notes">{game.notes}</p>}

      <div className="game-card-actions">
        <select
          value={game.status}
          onChange={(e) => onStatusChange(game._id, e.target.value)}
        >
          <option value="Backlog">Backlog</option>
          <option value="Playing">Playing</option>
          <option value="Completed">Completed</option>
          <option value="Dropped">Dropped</option>
        </select>

        <button onClick={() => onAddHours(game._id)}>+1 hr</button>
        <button className="danger" onClick={() => onDelete(game._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default GameCard;
