import { useState } from "react";

import { FOOD_TYPES } from "../../data/mockListings";

import { createListing } from "../../services/listingService";

function PostForm() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState("");

  const [location, setLocation] = useState("");

  const [hours, setHours] = useState("4");

  const [selectedType, setSelectedType] = useState(null);

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!selectedType) return;

    try {
      setLoading(true);

      await createListing({
        emoji: selectedType.emoji,

        title,

        description,

        quantity,

        location,

        type: selectedType.label,

        expiresAt: new Date(Date.now() + Number(hours) * 3600 * 1000),

        poster: {
          name: "You",
          initials: "YO",
          trust: 4.5,
          posts: 1,
        },
      });

      alert("Listing created!");

      setTitle("");
      setDescription("");
      setQuantity("");
      setLocation("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-card">
      <div className="form-gap">
        <label className="form-label">Food type *</label>

        <div className="food-type-grid">
          {FOOD_TYPES.map((food) => (
            <button
              key={food.label}
              type="button"
              className={`type-btn ${
                selectedType?.label === food.label ? "sel" : ""
              }`}
              onClick={() => setSelectedType(food)}
            >
              <span className="te">{food.emoji}</span>

              {food.label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-gap">
        <label className="form-label">Title *</label>

        <input
          className="form-input"
          placeholder="e.g. Fresh sourdough loaves"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-gap">
        <label className="form-label">Description</label>

        <textarea
          className="form-input"
          placeholder="What is it, how fresh, any details…"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-row form-gap">
        <div>
          <label className="form-label">Quantity *</label>

          <input
            className="form-input"
            placeholder="e.g. 3 loaves"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Available for</label>

          <select
            className="form-input"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          >
            <option value="1">1 hour</option>

            <option value="2">2 hours</option>

            <option value="4">4 hours</option>

            <option value="8">8 hours</option>

            <option value="24">24 hours</option>
          </select>
        </div>
      </div>

      <div className="form-gap">
        <label className="form-label">Pickup location *</label>

        <input
          className="form-input"
          placeholder="Street, landmark, area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button className="claim-btn" onClick={handleSubmit}>
        {loading ? "Posting..." : "Post Listing"}
      </button>
    </div>
  );
}

export default PostForm;
