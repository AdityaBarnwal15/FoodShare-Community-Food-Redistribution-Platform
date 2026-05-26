function ListingModal({ listing, onClose, onClaim }) {
  if (!listing) return null;

  return (
    <div className="modal-overlay">
      <div className="listing-modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-top">
          <div className="listing-badge">{listing.type}</div>

          <div className={`listing-status ${listing.status}`}>
            {listing.status}
          </div>
        </div>

        {listing.image && (
          <img
            src={listing.image}
            alt={listing.title}
            className="listing-image"
          />
        )}

        <h2 className="modal-title">{listing.title}</h2>

        <p className="modal-desc">{listing.description}</p>

        <div className="modal-section">
          <strong>Quantity:</strong> {listing.quantity}
        </div>

        <div className="modal-section">
          <strong>Location:</strong> {listing.location}
        </div>

        <div className="modal-section">
          <strong>Deadline:</strong> {listing.deadline}
        </div>

        <div className="modal-section">
          <strong>Posted By:</strong> {listing.poster?.name}
        </div>

        {listing.status !== "claimed" && (
          <button className="claim-btn" onClick={() => onClaim(listing._id)}>
            Claim Food
          </button>
        )}
      </div>
    </div>
  );
}

export default ListingModal;
