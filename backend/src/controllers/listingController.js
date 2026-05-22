const Listing = require("../models/Listing");

async function getListings(req, res) {
  try {
    const listings = await Listing.find().sort({
      createdAt: -1,
    });

    res.json(listings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function createListing(req, res) {
  try {
    const listing = await Listing.create(req.body);

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function claimListing(req, res) {
  try {
    const listing = await Listing.findById(
      req.params.id
    );

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    listing.status = "claimed";

    listing.claimer = {
      name: req.body.name,
      phone: req.body.phone,
      message: req.body.message,
    };

    await listing.save();

    res.json(listing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  getListings,
  createListing,
  claimListing,
};