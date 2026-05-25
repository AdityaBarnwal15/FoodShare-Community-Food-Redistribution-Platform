function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <span className="logo-icon">🍱</span>

        <span className="logo-text">FoodShare</span>
      </div>

      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => toast("No notifications yet")}
        >
          🔔
        </button>
        <button
          className="icon-btn"
          onClick={() => {
            document.querySelector(".form-input")?.focus();
          }}
        >
          🔍
        </button>
      </div>
    </nav>
  );
}

export default Nav;
