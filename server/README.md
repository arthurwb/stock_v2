# The Exchange - Server

This project is a RESTful API for a stock trading simulation, built using Express.js and MongoDB. It allows users to manage stock options, perform trading actions, and handle user authentication. This boilerplate comes with common tools such as ESLint for linting, Prettier for code formatting, Jest for testing, and Nodemon for automatic server reloading during development.

## Features

- User authentication: login and create new users
- Stock trading: buy and sell stock options
- Database connection to MongoDB using Mongoose
- Periodic update of stock prices with historical data
- Includes ESLint with Airbnb style guide and Prettier for code consistency
- Jest for testing with watch mode
- Environment configuration using `.env`

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo/stock-trading-api.git
   cd stock-trading-api/server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory and set the following values:

   ```bash
   PORT=8080
   URI=mongodb+srv://admin:admin@qb3cluster.sknm95g.mongodb.net/stocks?retryWrites=true&w=majority
   TICKCOUNT=5000
   ```

   - `PORT`: The port number where the server will run.
   - `URI`: MongoDB connection string.
   - `TICKCOUNT`: Time interval (in milliseconds) for stock price updates.

### Running the API

- **Development Mode**

  Starts the API in development mode with [Nodemon](https://github.com/remy/nodemon) to automatically restart the server on changes.

  ```bash
  npm run dev
  ```

- **Production Mode**

  Runs the API in production mode.

  ```bash
  npm start
  ```

  The server will start on `localhost:8080` (or another port if specified in the `.env` file).

### Running Tests

Run the unit tests using Jest:

```bash
npm test
```

You can also run Jest in watch mode:

```bash
npm run test:watch
```

### Linting

To lint your code using ESLint and Prettier:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

---

## Project Structure

- `.env`: Configuration for the app (port, MongoDB URI, tick interval).
- `.eslintrc`: ESLint configuration using the Airbnb style guide and Prettier plugin.
- `.prettierrc`: Prettier code formatting settings.
- `package.json`: Project dependencies, scripts, and configuration.
- `src/`: Contains the source code for the app.
  - `app.js`: Main app entry point.
  - `routes/`: API routes for index, authentication, stock trading, etc.
  - `models/`: Mongoose schemas for users and stock options.
  - `middleware/`: Middleware for error handling and async handling.
  - `util/`: Utility functions like periodic stock updates.
  - `__tests__/`: Test cases using Jest.
- `www`: Server bootstrap script that starts the HTTP server.

---

## API Endpoints

- **`GET /`**: Simple route to confirm the server is running.
- **`GET /api`**: Fetches all stock options.
- **`POST /auth/login`**: User login with username and password.
- **`POST /auth/createUser`**: Create a new user with username, password, carrots (user's stock holdings), and wallet balance.
- **`POST /saction/buy/:option`**: Buy a specified amount of stock options.
- **`POST /saction/sell/:option`**: Sell a specified amount of stock options.

---

## Development Tools

- **ESLint**: Enforces code style using the Airbnb base configuration.
- **Prettier**: Code formatting to ensure consistency.
- **Nodemon**: Restarts the server when file changes are detected in development mode.
- **Jest**: Testing framework with snapshot and unit tests.

---

## Database Schema

### User Model

```json
{
  "username": "String",
  "password": "String",
  "carrots": "Map", // stock options owned by the user
  "wallet": "Number" // user's account balance
}
```

### Option Model

```json
{
  "name": "String",
  "price": "Number", // current price of the option
  "historicalPrices": "[Number]" // previous prices for historical tracking
}
```

---

## License

This project is licensed under the MIT License.