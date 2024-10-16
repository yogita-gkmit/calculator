Calculator App



A simple RESTful API for performing calculations and managing calculation history.

## Features

- Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- Store and retrieve calculation history for users.
- Clear or reset calculation history.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- Jest (for testing)

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (or a compatible database)
- npm (Node package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/calculator-api.git
   cd calculator-api

 Install dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and set the following environment variables:

```bash
MONGODB_URL=<Your MongoDB connection URL>
PORT=4000
```

## Usage

# Running the Application

- To start the server in development mode with nodemon:

```bash
npm run dev
```

- The server will be running on http://localhost:4000.