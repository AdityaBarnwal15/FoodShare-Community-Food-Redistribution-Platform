import { Link } from "react-router-dom";

import toast from "react-hot-toast";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <span className="logo-icon">
          🍱
        </span>

        <span className="logo-text">
          FoodShare
        </span>
      </div>

      <div className="nav-links">
        <Link to="/">
          Browse
        </Link>

        <Link to="/post">
          Post
        </Link>

        <Link to="/my-listings">
          My Listings
        </Link>

        <Link to="/saved">
          ❤️
        </Link>
      </div>

      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => {
            document
              .querySelector(
                ".form-input"
              )
              ?.focus();
          }}
        >
          🔍
        </button>

        <button
          className="icon-btn"
          onClick={() =>
            toast(
              "No notifications yet"
            )
          }
        >
          🔔
        </button>
      </div>
    </nav>
  );
}

export default Nav;