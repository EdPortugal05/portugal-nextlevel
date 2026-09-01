function About() {
  return (
    <div className="page about-page">
      <h1>About This Project</h1>
      <p>
        Game Library & Playtime Tracker is a full-stack web app built for
        Integrative Programming II. It lets you keep track of every game
        you own or want to play, log your playtime, and rate games as you
        finish them.
      </p>

      <h2>How it's built</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> React (Vite) with React Router for
          multi-page navigation without full reloads.
        </li>
        <li>
          <strong>Backend:</strong> Node.js + Express REST API, handling
          requests from the frontend and talking to the database.
        </li>
        <li>
          <strong>Database:</strong> MongoDB with Mongoose, storing every
          game as a document with title, platform, status, rating, and
          hours played.
        </li>
      </ul>
    </div>
  );
}

export default About;
