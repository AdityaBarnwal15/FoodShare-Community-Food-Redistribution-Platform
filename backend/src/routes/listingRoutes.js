const express = require("express");

const {
  getListings,
  createListing,
  claimListing,
} = require("../controllers/listingController");

const router = express.Router();

router.get("/", getListings);

router.post("/", createListing);

router.patch("/:id/claim", claimListing);

module.exports = router;