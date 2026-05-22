function Profile() {
  return (
    <>
      <div className="profile-hero">
        <div className="profile-avatar">
          RD
        </div>

        <div className="profile-name">
          Rahul Das
        </div>

        <div className="profile-since">
          Member since January 2025
        </div>
      </div>

      <div className="profile-hero">
        <div className="profile-avatar">RD</div>
        <div className="profile-name">Rahul Das</div>
        <div className="profile-since">Member since January 2025</div>
      </div>

      <div className="stats-row">
        <div className="stat-card"><div className="stat-n">12</div><div className="stat-l">Shared</div></div>
        <div className="stat-card"><div className="stat-n">7</div><div className="stat-l">Claimed</div></div>
        <div className="stat-card"><div className="stat-n">4.8</div><div className="stat-l">Trust score</div></div>
      </div>

      <div style={{ marginBottom: 16 }}>
        {[
          { icon: "📍", label: "Location", val: "Kolkata, WB" },
          { icon: "🏠", label: "Type", val: "Household" },
        ].map(r => (
          <div key={r.label} className="menu-item">
            <span className="menu-icon">{r.icon}</span>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{r.label}</div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{r.val}</div>
            </div>
          </div>
        ))}
      </div>

      {[
        { icon: "🔔", label: "Notification settings" },
        { icon: "🛡️", label: "Privacy & safety" },
        { icon: "❓", label: "How foodshare works" },
        { icon: "🚪", label: "Sign out" },
      ].map(m => (
        <div key={m.label} className="menu-item">
          <span className="menu-icon">{m.icon}</span>
          <span>{m.label}</span>
          <span className="menu-arrow">›</span>
        </div>
      ))}
    </>
  );
}

export default Profile;