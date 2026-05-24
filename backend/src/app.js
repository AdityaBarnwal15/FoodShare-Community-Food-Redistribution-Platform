const express = require("express");
const cors = require("cors");

const listingRoutes = require("./routes/listingRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://food-share-community-food-redistrib.vercel.app/",
    ],
  })
);

app.use(express.json());

app.use("/api/listings", listingRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "FoodShare API running",
  });
});

module.exports = app;