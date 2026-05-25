return (
  <>
    <div className="hero">
      <div className="hero-title">
        Food that shouldn't go to
        waste
      </div>
    </div>

    <div
      className="search-box"
      style={{
        marginBottom: 18,
      }}
    >
      <input
        type="text"
        placeholder="Search food..."
        className="form-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>

    <div
      className="chips"
      style={{
        marginBottom: 22,
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`chip ${
            filter === category
              ? "active"
              : ""
          }`}
          onClick={() =>
            setFilter(category)
          }
        >
          {category}
        </button>
      ))}
    </div>

    {filtered.length === 0 ? (
      <div className="empty">
        <div className="empty-emoji">
          🔍
        </div>

        <div className="empty-sub">
          No matching listings found.
        </div>
      </div>
    ) : (
      <div className="listing-grid">
        {filtered.map((listing) => (
          <div
            key={listing._id}
            className="listing-wrapper"
          >
            <ListingCard
              listing={listing}
              onClaim={
                handleClaim
              }
            />
          </div>
        ))}
      </div>
    )}
  </>
);