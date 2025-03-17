# Gemini Image Generator

Gemini Image Generator is a Node.js application that uses Google's Generative AI to generate images based on text prompts.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/manthanank/gemini-image-generator.git
    cd gemini-image-generator
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google Gemini API key and port:

    ```env
    GEMINI_API_KEY=your_google_gemini_api_key
    PORT=5000
    ```

## Usage

1. Start the server:

    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:5000`.

## API Endpoints

### Generate Image

- **URL:** `/api/image/generate`
- **Method:** `POST`
- **Body:**

    ```json
    {
      "prompt": "your text prompt"
    }
    ```

- **Response:**

    ```json
    {
      "message": "Image generated successfully",
      "imagePath": "path/to/generated_image.png"
    }
    ```

## Project Structure

```text
gemini-image-generator/
├── .env
├── .example.env
├── app.js
├── package.json
├── README.md
├── server.js
├── config/
│   └── env.js
├── controllers/
│   └── imageController.js
├── routes/
│   └── imageRoutes.js
├── services/
│   └── geminiService.js
└── temp/
    └── generated_image.png
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
