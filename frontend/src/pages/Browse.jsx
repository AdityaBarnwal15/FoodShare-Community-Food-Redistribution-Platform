import { useEffect, useState } from "react";

import { getListings, claimListing } from "../services/listingService";

import ListingCard from "../components/listing/ListingCard";

function Browse() {
  const [filter, setFilter] = useState("All");

  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

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

  async function handleClaim(id, userData) {
    try {
      await claimListing(id, userData);

      toast.success("Listing claimed successfully!");

      fetchListings();
    } catch (error) {
      toast.error("Failed to claim listing");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  const dynamicTypes = [...new Set(listings.map((listing) => listing.type))];

  const categories = ["All", ...dynamicTypes];

  const filtered = listings.filter((listing) => {
    const matchesCategory = filter === "All" || listing.type === filter;

    const matchesSearch =
      listing.title.toLowerCase().includes(search.toLowerCase()) ||
      listing.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loader"></div>

        <div>Loading listings...</div>
      </div>
    );
  }

  return (
    <>
      <div className="hero">
        <div className="hero-label">Kolkata • 5 km radius</div>

        <div className="hero-title">Food that shouldn't go to waste</div>
      </div>

      <div
        className="search-box"
        style={{
          marginBottom: 16,
        }}
      >
        <input
          type="text"
          placeholder="Search food..."
          className="form-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">🔍</div>

          <div className="empty-sub">No matching listings found.</div>
        </div>
      ) : (
        filtered.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
            onClaim={handleClaim}
          />
        ))
      )}
    </>
  );
}

export default Browse;
