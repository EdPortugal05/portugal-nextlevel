import mongoose from "mongoose";

// This schema defines the shape of every "game" document stored in MongoDB.
const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game title is required"],
      trim: true,
    },
    platform: {
      type: String,
      required: [true, "Platform is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Backlog", "Playing", "Completed", "Dropped"],
      default: "Backlog",
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    hoursPlayed: {
      type: Number,
      min: 0,
      default: 0,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

export default Game;
