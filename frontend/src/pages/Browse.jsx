import { useEffect, useState } from "react";
import { getListings, claimListing } from "../services/listingService";
import ListingCard from "../components/listing/ListingCard";

import { FOOD_TYPES } from "../data/mockListings";

function Browse() {
  const [filter, setFilter] = useState("All");

  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);

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

  async function handleClaim(id) {
    try {
      await claimListing(id, {
        name: "Aditya",
        phone: "9876543210",
        message: "Hi, I can pick this up within 20 minutes.",
      });

      fetchListings();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  const categories = ["All", ...FOOD_TYPES.map((f) => f.label)];

  const filtered = listings.filter(
    (listing) => filter === "All" || listing.type === filter,
  );

  if (loading) {
    return <div>Loading listings...</div>;
  }

  return (
    <>
      <div className="hero">
        <div className="hero-label">Kolkata • 5 km radius</div>

        <div className="hero-title">Food that shouldn't go to waste</div>
      </div>

      <div className="chips">
        {categories.map((category) => (
          <button
            key={category}
            className={`chip ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.map((listing) => (
        <ListingCard
          key={listing._id}
          listing={listing}
          onClaim={handleClaim}
        />
      ))}
    </>
  );
}

export default Browse;
