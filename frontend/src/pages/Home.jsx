import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <h1>Track Your Next Level</h1>
      <p>
        Track every game you're playing, your ratings, and how many hours
        you've sunk into each one — all in one place.
      </p>
      <div className="home-actions">
        <Link to="/dashboard" className="btn">
          View My Library
        </Link>
        <Link to="/add" className="btn btn-secondary">
          Add a Game
        </Link>
      </div>
    </div>
  );
}

export default Home;
