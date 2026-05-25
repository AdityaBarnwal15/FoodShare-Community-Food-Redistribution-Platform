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
    methods: [
      "GET",
      "POST",
      "PATCH",
      "DELETE",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "FoodShare API Running",
  });
});

app.use("/api/listings", listingRoutes);

module.exports = app;