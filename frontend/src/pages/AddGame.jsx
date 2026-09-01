import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameForm from "../components/GameForm.jsx";
import { addGame } from "../api/games.js";

function AddGame() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddGame = async (gameData) => {
    try {
      await addGame(gameData);
      setMessage(`"${gameData.title}" was added to your library!`);
      // Give the user a moment to see the confirmation, then redirect
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="page add-game-page">
      <h1>Add a New Game</h1>
      {message && <p className="form-message">{message}</p>}
      <GameForm onSubmit={handleAddGame} />
    </div>
  );
}

export default AddGame;
