function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        food<span>share</span>
      </div>

      <div className="nav-actions">
        <button className="icon-btn notif-dot">🔔</button>
        <button className="icon-btn">🔍</button>
      </div>
    </nav>
  );
}

export default Nav;