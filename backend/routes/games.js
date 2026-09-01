import express from "express";
import Game from "../models/Game.js";

const router = express.Router();

// @route   GET /api/games
// @desc    Get all games in the library
router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/games/:id
// @desc    Get a single game by id
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/games
// @desc    Add a new game to the library
router.post("/", async (req, res) => {
  try {
    const { title, platform, status, rating, hoursPlayed, notes } = req.body;

    const newGame = new Game({
      title,
      platform,
      status,
      rating,
      hoursPlayed,
      notes,
    });

    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    // Mongoose validation errors land here (e.g. missing required field)
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/games/:id
// @desc    Update a game (e.g. change status, log more hours, edit rating)
router.put("/:id", async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return the updated doc, re-check validation
    );
    if (!updatedGame) return res.status(404).json({ message: "Game not found" });
    res.json(updatedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/games/:id
// @desc    Remove a game from the library
router.delete("/:id", async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: "Game not found" });
    res.json({ message: "Game deleted", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
