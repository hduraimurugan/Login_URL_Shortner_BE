Here’s a simple `README.md` file for your URL shortener project:

```markdown
# URL Shortener API

This project is a URL Shortener API built with Node.js, Express, and MongoDB. It generates short, unique URLs from long URLs using a custom code or automatically generated short IDs. Users can also retrieve existing short URLs based on long URLs.

## Features

- Shorten long URLs with a custom or auto-generated code.
- Validate long URLs before creating short versions.
- Check for duplicates and reuse short URLs for existing long URLs.
- Provide a meaningful error if a custom code is already in use.

## Prerequisites

Before running the project, ensure you have:

- Node.js installed
- MongoDB installed and running
- A `.env` file with the following variables:
  - `BASEURI`: The base URL for the shortened URLs (e.g., `http://localhost:5000` or a production URL)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/hduraimurugan/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file with the base URL:

    ```
    BASEURI=http://localhost:5000
    ```

4. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### 1. Shorten URL

- **POST** `/shorten`
  
  Request Body:

  ```json
  {
    "longUrl": "https://example.com/very/long/url",
    "urlCode": "optionalCustomCode"
  }
  ```

  Response:

  ```json
  {
    "urlCode": "generatedOrCustomCode"
  }
  ```

  Errors:
  
  - `401`: Invalid URL
  - `400`: Custom code already in use
  - `500`: Server error

## Code Overview

### Main Components:

- **Express Router**: Handles the `/shorten` route, which processes the URL shortening logic.
- **valid-url**: A library to validate the format of the long URLs.
- **shortid**: Used for generating short, unique codes.
- **Mongoose (MongoDB)**: Stores the long URLs and their corresponding short codes.

### Route Logic:

1. The POST request checks if the provided long URL is valid.
2. If a custom `urlCode` is provided, it ensures that the code is not already in use.
3. It checks if the long URL already exists in the database to avoid duplicates.
4. If no custom `urlCode` is provided, a new short ID is generated using `shortid`.
5. The new short URL is saved to the database and returned to the user.

## Utils

- `generateShortId`: A utility function to generate unique short IDs.
- `generateUniqueShortId`: Ensures the generated ID is unique by checking the database for existing ones.

## Models

- **URLModel**: Mongoose model representing the URL mapping between long URLs and short codes.


```

This `README.md` file explains the purpose of the project, how to set it up, the API routes, and a high-level overview of the code structure. Adjust it based on any other specific details of your project!
