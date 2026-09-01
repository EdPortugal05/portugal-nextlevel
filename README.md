# 🎮 Game Library & Playtime Tracker

A full-stack web app to track the games you play, log your playtime, mark
progress (Backlog / Playing / Completed / Dropped), and rate games once
you've finished them.

Built for **Integrative Programming II — Activity 4**.

## Technologies Used

- **Frontend:** React (via Vite), React Router
- **Backend:** Node.js, Express, CORS
- **Database:** MongoDB with Mongoose (schema-based, permanent storage)

## Project Structure

```
game-library-app/
├── frontend/     React (Vite) app — UI, components, pages
├── backend/      Express API server + MongoDB models/routes
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) installed
- A MongoDB database — easiest option is a free cluster on
  [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd game-library-app
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` (copy `.env.example`) and add your own
MongoDB connection string:

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/gameLibrary?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

You should see:
```
MongoDB connected: ...
Server running on http://localhost:5000
```

### 3. Set up the Frontend

Open a **new terminal window**, then:

```bash
cd frontend
npm install
npm run dev
```

The app will be available at **http://localhost:5173**.

> Both the backend (port 5000) and frontend (port 5173) need to be running
> at the same time for the app to work.

## Features

- **Home** — landing page with quick links
- **Dashboard** — view all games, filter by status, update status, log
  hours played, delete a game
- **Add Game** — form to add a new game to your library
- **About** — explains the tech stack

## How the Pieces Connect

1. The **React frontend** (`frontend/`) renders the UI and calls the
   backend using `fetch()` (see `frontend/src/api/games.js`).
2. The **Express backend** (`backend/`) exposes REST endpoints under
   `/api/games` (GET, POST, PUT, DELETE) which read/write to MongoDB.
3. **MongoDB** permanently stores each game as a document, defined by the
   Mongoose schema in `backend/models/Game.js`.

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|---------------------------|
| GET    | /api/games        | Get all games             |
| GET    | /api/games/:id    | Get a single game         |
| POST   | /api/games        | Add a new game             |
| PUT    | /api/games/:id    | Update a game (status, hours, rating) |
| DELETE | /api/games/:id    | Delete a game              |
