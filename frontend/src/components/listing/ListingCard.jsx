import { timeLeft, isUrgent } from "../../utils/time";

function ListingCard({ listing, onClaim }) {
  const urgent = isUrgent(listing.expiresAt);

  return (
    <div
      className={`listing-card ${
        listing.status === "claimed" ? "claimed" : ""
      }`}
    >
      {listing.image && (
        <img
          src={listing.image}
          alt={listing.title}
          className="listing-image"
        />
      )}
      <div className="card-body">
        <div className="card-top">
          <span className="card-emoji">{listing.emoji}</span>

          <span
            className={`card-badge ${
              listing.status === "claimed"
                ? "badge-claimed"
                : urgent
                  ? "badge-expiring"
                  : "badge-active"
            }`}
          >
            {listing.status === "claimed"
              ? "Claimed"
              : urgent
                ? "Expiring soon"
                : "Available"}
          </span>
        </div>

        <div className="card-title">{listing.title}</div>

        <div className="card-sub">
          {listing.quantity} · {listing.type}
        </div>

        <div className="card-footer">
          <span className="card-meta">📍 {listing.distance}</span>

          <span className="card-meta-sep">·</span>

          <span className="card-meta">👤 {listing.poster.name}</span>

          {listing.status !== "claimed" && (
            <span className={`time-pill countdown ${urgent ? "urgent" : ""}`}>
              {timeLeft(listing.expiresAt)}
            </span>
          )}
        </div>

        {listing.status !== "claimed" && (
          <button
            className="claim-btn"
            style={{ marginTop: 12 }}
            onClick={() => {
              const name = prompt("Enter your name");

              const phone = prompt("Enter your phone number");

              const message = prompt("Pickup message");

              if (!name || !phone) return;

              onClaim(listing._id, {
                name,
                phone,
                message,
              });
            }}
          >
            Claim Listing
          </button>
        )}
      </div>
    </div>
  );
}

export default ListingCard;
