// All frontend calls to the backend REST API live in this one file.
// Keeping fetch logic separate from components makes both easier to explain.

const API_URL = "http://localhost:5000/api/games";

export async function getGames() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}

export async function addGame(gameData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameData),
  });
  if (!res.ok) throw new Error("Failed to add game");
  return res.json();
}

export async function updateGame(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Failed to update game");
  return res.json();
}

export async function deleteGame(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete game");
  return res.json();
}
