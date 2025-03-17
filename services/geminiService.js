const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");
const { geminiApiKey } = require("../config/env");

const genAI = new GoogleGenerativeAI(geminiApiKey);

async function generateImage(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp-image-generation",
    generationConfig: {
      responseModalities: ['Text', 'Image']
    },
  });

  try {
    const response = await model.generateContent(prompt);
    for (const part of response.response.candidates[0].content.parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, 'base64');
        const tempDir = path.join(__dirname, '../temp');
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }
        const filePath = path.join(tempDir, 'generated_image.png');
        fs.writeFileSync(filePath, buffer);
        return filePath;
      }
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image");
  }
}

module.exports = { generateImage };
