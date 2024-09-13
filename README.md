Here is an updated version of your `README.md` file that includes details about the client-side code structure and additional information for developers working with this Next.js project:

---

# The Exchange - Client

This is the client-side code of **The Exchange** project, built using [Next.js](https://nextjs.org/) and styled with Tailwind CSS and Ant Design.

## Project Structure

The project is divided into two main directories at the root:

- **client/** - The Next.js frontend.
- **server/** - The backend (instructions for this can be found in the `server/README.md`).

### Client Directory Structure

```
client/
├── .eslintrc.json           # ESLint configuration, extending Next.js core web vitals
├── .gitignore               # Ignore list for version control
├── next-env.d.ts            # TypeScript definitions for Next.js
├── next.config.mjs          # Next.js configuration
├── package.json             # NPM scripts and dependencies
├── postcss.config.mjs       # PostCSS configuration with Tailwind
├── tailwind.config.ts       # Tailwind CSS configuration with custom colors and fonts
├── tsconfig.json            # TypeScript configuration
├── src/                     # Application source code
│   ├── app/                 # Main application directory
│   │   ├── globals.css      # Global CSS using Tailwind
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page component
│   │   ├── pages/           # Additional pages: About, Account, Exchange, Option
└── README.md                # Documentation (this file)
```

## Technologies Used

- **Next.js** (v14) - A React framework for server-side rendering.
- **React** (v18) - A JavaScript library for building user interfaces.
- **TypeScript** - A strongly typed programming language built on JavaScript.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **Ant Design** (v5) - A React UI library for building user-friendly, feature-rich components.

## Setup and Development

### 1. Install Dependencies

First, navigate to the `client/` directory and install all necessary dependencies by running:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Start the Development Server

Once the dependencies are installed, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The server will start at [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the app. The app supports hot reloading, meaning your changes will automatically reflect in the browser without needing to refresh.

### 3. Linting

To check for linting errors, run:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

Linting is configured using **ESLint**, extending the `next/core-web-vitals` rule set for optimal performance and coding standards.

### 4. Build for Production

To create a production build of the app:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This command generates an optimized, production-ready build of your Next.js application in the `.next/` folder.

### 5. Deploy

The recommended way to deploy the app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more information, see [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Tailwind CSS Configuration

This project uses **Tailwind CSS** for styling. The configuration can be found in `tailwind.config.ts`, which includes custom colors and font settings:

```ts
const config = {
  theme: {
    colors: {
      orange: "#f08f4f",
      red: "#E05858FF",
      black: "#000000",
      white: "#FFFFFF",
      lightgrey: "#686868FF",
      grey: "#222222FF",
      darkgrey: "#111111",
      transparent: "#00000000",
    },
    fontFamily: {
      mono: ['Courier New', 'monospace']
    }
  },
  // Add your own paths here to configure which files Tailwind should scan for class names.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
```

## Ant Design Integration

**Ant Design** has been integrated into the project, with custom theming applied via the `ConfigProvider` in `layout.tsx`. Below is an example of how a custom button hover effect is configured:

```tsx
<ConfigProvider
  theme={{
    components: {
      Button: {
        defaultHoverBorderColor: "orange",
        defaultHoverColor: "black"
      }
    }
  }}
>
  {children}
</ConfigProvider>
```

To use Ant Design components, simply import them into your pages or components like this:

```tsx
import { Button } from 'antd';

<Button type="primary">Click Me</Button>;
```

# Stock Trading REST API

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