const { generateImage } = require("../services/geminiService");

async function generateImageController(req, res) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const imagePath = await generateImage(prompt);
    res.status(200).json({ message: "Image generated successfully", imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { generateImageController };
