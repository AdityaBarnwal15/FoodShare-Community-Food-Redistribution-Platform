import { timeLeft, isUrgent } from "../../utils/time";

function DetailView({ listing, onBack, onClaim }) {
  const urgent = isUrgent(listing.expiresAt);

  return (
    <>
      <button className="detail-back" onClick={onBack}>
        ← Back
      </button>

      <div className="detail-emoji-box">
        {listing.emoji}
      </div>

      <div className="detail-title">
        {listing.title}
      </div>

      <div className="detail-posted">
        Posted by {listing.poster.name} ·{" "}
        {listing.distance} away
      </div>

      <div style={{ background: "var(--surface)", borderRadius: "var(--radius)", border: "1px solid var(--border)", padding: "4px 14px", marginBottom: 16 }}>
        <div className="detail-row">
          <span className="detail-icon">📦</span>
          <div><div className="detail-row-label">Quantity</div><div className="detail-row-val">{l.quantity}</div></div>
        </div>
        <div className="detail-row">
          <span className="detail-icon">📍</span>
          <div><div className="detail-row-label">Pickup location</div><div className="detail-row-val">{l.location}</div></div>
        </div>
        <div className="detail-row">
          <span className="detail-icon">{urgent ? "⚠️" : "⏰"}</span>
          <div><div className="detail-row-label">Available until</div><div className="detail-row-val countdown" style={{ color: urgent ? "var(--amber)" : undefined }}>{timeLeft(l.expiresAt)}</div></div>
        </div>
        <div className="detail-row">
          <span className="detail-icon">📝</span>
          <div><div className="detail-row-label">Description</div><div className="detail-row-val" style={{ fontWeight: 400, fontSize: 13 }}>{l.description}</div></div>
        </div>
      </div>

      <div className="poster-row">
        <div className="avatar">{l.poster.initials}</div>
        <div>
          <div className="poster-name">{l.poster.name}</div>
          <div className="poster-meta">{l.poster.posts} listings posted</div>
        </div>
        <div className="trust-pill">⭐ {l.poster.trust}</div>
      </div>

      {l.status === "claimed" ? (
        <button className="claim-btn" disabled>Already claimed</button>
      ) : (
        <>
          <button className="claim-btn" onClick={() => onClaim(l.id)} style={{ marginBottom: 10 }}>
            Claim this listing
          </button>
          <button className="claim-btn secondary">Message poster</button>
        </>
      )}
    </>
  );
}

export default DetailView;