const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/image", imageRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to Gemini Image Generator API");
});

app.get("/", (req, res) => {
  res.send("Welcome to Gemini Image Generator API");
});

module.exports = app;
