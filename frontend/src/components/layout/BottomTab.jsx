import { NavLink } from "react-router-dom";

function BottomTab() {
  const tabs = [
    { path: "/", icon: "🗺️", label: "Browse" },
    { path: "/post", icon: "➕", label: "Post" },
    { path: "/mine", icon: "📋", label: "My posts" },
    { path: "/profile", icon: "👤", label: "Profile" },
  ];

  return (
    <nav className="bottom-tab">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `tab-btn ${isActive ? "active" : ""}`
          }
        >
          <span className="tab-icon">{tab.icon}</span>
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomTab;