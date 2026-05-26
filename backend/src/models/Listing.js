const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    emoji: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    distance: {
      type: String,
      default: "Near you",
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "claimed"],
      default: "active",
    },

    image: {
      type: String,
      required: true,
    },

    poster: {
      name: String,
      initials: String,
      trust: Number,
      posts: Number,
    },

    claimer: {
      name: String,
      phone: String,
      message: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Listing", listingSchema);
