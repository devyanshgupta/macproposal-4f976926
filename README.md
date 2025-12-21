# Service Proposal Maker for Mayur & Company

This is a web application designed to streamline the creation of service proposals for Mayur & Company Chartered Accountants. It allows for the dynamic configuration of services from various categories, calculates the total cost in real-time, and provides a clean interface for generating proposals.

## Features

- **Interactive Service Selection:** Browse services across multiple categories like Web Development, UI/UX Design, and Marketing.
- **Dynamic Proposal Building:** Select or deselect services with a single click. The application supports partially selected categories (indeterminate state).
- **Real-Time Cost Calculation:** The total estimated cost updates instantly as services are added or removed.
- **Client Information Form:** A dedicated section to input client details for the proposal.
- **Custom Theming:** Styled with a professional blue and green color scheme inspired by the ICAI branding.
- **Responsive Design:** A clean and modern UI that works on both desktop and mobile devices.

## Technology Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) - Next-generation frontend tooling
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- **UI & Animations:**
  - [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components.
  - [Lucide React](https://lucide.dev/) - A beautiful and consistent icon toolkit.
  - [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- **Backend (Optional):**
  - The application can be connected to a Python backend using FastAPI to load service data dynamically.

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/devyanshgupta/MAC-Proposal-Generator.git
   cd https://github.com/devyanshgupta/MAC-Proposal-Generator.git
   ```
2. **Install dependencies:**
   This command will install all the necessary packages defined in `package.json`.

   ```sh
   npm install
   ```
3. **Run the development server:**
   This command starts the Vite development server, typically on `http://localhost:5173`. The app will automatically reload when you make changes to the code.

   ```sh
   npm run dev
   ```

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev` or `npm run start`:
  Runs the app in development mode.
- `npm run build`:
  Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run lint`:
  Lints the codebase using ESLint to find and fix problems in the code.
- `npm run preview`:
  Serves the production build from the `dist` folder for a local preview.
