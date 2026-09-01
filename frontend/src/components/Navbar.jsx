import { NavLink } from "react-router-dom";

// A reusable navigation bar shown on every page.
// NavLink automatically adds an "active" class to whichever page is current.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
  <span className="brand-mark">◆</span> NEXT LEVEL
</div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
          Add Game
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
