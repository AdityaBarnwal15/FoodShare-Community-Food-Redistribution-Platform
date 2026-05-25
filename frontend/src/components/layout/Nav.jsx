function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <span className="logo-icon">🍱</span>

        <span className="logo-text">FoodShare</span>
      </div>

      <div className="nav-actions">
        <button className="icon-btn notif-dot">🔔</button>
        <button className="icon-btn">🔍</button>
      </div>
    </nav>
  );
}

export default Nav;
