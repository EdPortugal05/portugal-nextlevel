import { useState } from "react";

// A controlled form component. Demonstrates useState for managing form
// inputs, and calling a parent-provided function (onSubmit) with the result.
function GameForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    status: "Backlog",
    rating: 0,
    hoursPlayed: 0,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      rating: Number(formData.rating),
      hoursPlayed: Number(formData.hoursPlayed),
    });
    // Reset the form after submitting
    setFormData({
      title: "",
      platform: "",
      status: "Backlog",
      rating: 0,
      hoursPlayed: 0,
      notes: "",
    });
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. The Legend of Zelda: Breath of the Wild"
          required
        />
      </label>

      <label>
        Platform
        <input
          type="text"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          placeholder="e.g. Nintendo Switch"
          required
        />
      </label>

      <label>
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Backlog">Backlog</option>
          <option value="Playing">Playing</option>
          <option value="Completed">Completed</option>
          <option value="Dropped">Dropped</option>
        </select>
      </label>

      <label>
        Rating (0-10)
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          value={formData.rating}
          onChange={handleChange}
        />
      </label>

      <label>
        Hours Played
        <input
          type="number"
          name="hoursPlayed"
          min="0"
          value={formData.hoursPlayed}
          onChange={handleChange}
        />
      </label>

      <label>
        Notes
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Optional thoughts about the game..."
        />
      </label>

      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
