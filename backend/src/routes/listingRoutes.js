const express = require("express");

const {
  getListings,
  createListing,
  claimListing,
} = require("../controllers/listingController");

const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", getListings);

router.post("/", upload.single("image"), createListing);

router.patch("/:id/claim", claimListing);

module.exports = router;