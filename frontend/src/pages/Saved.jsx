import { useEffect, useState } from "react";

import ListingCard from "../components/listing/ListingCard";

import { getListings } from "../services/listingService";

import {
  getSavedListings,
} from "../utils/savedListings";

function Saved() {
  const [savedListings, setSavedListings] =
    useState([]);

  useEffect(() => {
    async function loadSaved() {
      const listings =
        await getListings();

      const savedIds =
        getSavedListings();

      const filtered =
        listings.filter((listing) =>
          savedIds.includes(
            listing._id
          )
        );

      setSavedListings(
        filtered
      );
    }

    loadSaved();
  }, []);

  return (
    <>
      <div className="section-title">
        Saved Listings
      </div>

      {savedListings.length ===
      0 ? (
        <div className="empty">
          <div className="empty-emoji">
            ❤️
          </div>

          <div className="empty-sub">
            No saved listings yet.
          </div>
        </div>
      ) : (
        savedListings.map(
          (listing) => (
            <ListingCard
              key={listing._id}
              listing={listing}
            />
          )
        )
      )}
    </>
  );
}

export default Saved;