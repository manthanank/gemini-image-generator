const express = require("express");
const { generateImageController } = require("../controllers/imageController");

const router = express.Router();

router.post("/generate", generateImageController);

module.exports = router;
