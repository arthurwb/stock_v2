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