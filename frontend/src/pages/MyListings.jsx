import { useEffect, useState } from "react";

import ListingCard from "../components/listing/ListingCard";

import {
  getListings,
} from "../services/listingService";

function MyListings() {
  const [listings, setListings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  async function fetchListings() {
    try {
      const data = await getListings();

      setListings(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  const mine = listings;

  const claimed = listings.filter(
    (listing) =>
      listing.status === "claimed"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          fontFamily:
            "'Playfair Display', serif",
          fontSize: 22,
          marginBottom: 4,
        }}
      >
        My listings
      </div>

      <div
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginBottom: 16,
        }}
      >
        Track what you've shared and
        claimed.
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-n">
            {mine.length}
          </div>

          <div className="stat-l">
            Posted
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-n">
            {claimed.length}
          </div>

          <div className="stat-l">
            Claimed
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-n">
            {
              listings.filter(
                (listing) =>
                  listing.status ===
                  "active"
              ).length
            }
          </div>

          <div className="stat-l">
            Active
          </div>
        </div>
      </div>

      <div className="section-hdr">
        <div className="section-title">
          Your posts
        </div>
      </div>

      {mine.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">
            📦
          </div>

          <div className="empty-sub">
            You haven't posted anything
            yet.
          </div>
        </div>
      ) : (
        mine.map((listing) => (
          <div key={listing._id}>
            <ListingCard
              listing={listing}
            />

            {listing.claimer && (
              <div className="claimer-box">
                <div>
                  <strong>
                    Claimed By:
                  </strong>{" "}
                  {
                    listing.claimer
                      .name
                  }
                </div>

                <div>
                  📞{" "}
                  {
                    listing.claimer
                      .phone
                  }
                </div>

                <div>
                  💬{" "}
                  {
                    listing.claimer
                      .message
                  }
                </div>
              </div>
            )}
          </div>
        ))
      )}

      <div
        className="section-hdr"
        style={{ marginTop: 8 }}
      >
        <div className="section-title">
          You've claimed
        </div>
      </div>

      {claimed.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">
            🧺
          </div>

          <div className="empty-sub">
            You haven't claimed anything
            yet.
          </div>
        </div>
      ) : (
        claimed.map((listing) => (
          <div key={listing._id}>
            <ListingCard
              listing={listing}
            />

            {listing.claimer && (
              <div className="claimer-box">
                <div>
                  <strong>
                    Owner Contact:
                  </strong>{" "}
                  {
                    listing.poster
                      ?.name
                  }
                </div>

                <div>
                  📍{" "}
                  {
                    listing.location
                  }
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default MyListings;