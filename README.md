## Wireway - Wireframe Builder

A simple application for creating and visualizing wireframes using a JSON schema.

### Features

-   Real-time wireframe rendering from JSON schema
-   Customizable UI elements
-   Easy-to-use editor

### Getting Started

1.  Clone the repository:

    ```bash
    git clone [repository URL]
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Directory Structure

-   `src/`: Contains the application source code.
    -   `app/`: Next.js application directory.
    -   `components/`: React components.
        -   `wireframe/`: Wireframe-specific components.
            -   `elements/`: Individual wireframe elements (Header, SearchBar, etc.).
            -   `container/`: Wireframe container component.
            -   `editor/`: Wireframe editor component.
            -   `renderer/`: Wireframe renderer component.
    -   `schemas/`: JSON schema definitions for wireframes.
    -   `pages/`: Next.js pages.
        -   `home/`: Home page component.

### Technologies Used

-   Next.js
-   React
-   Tailwind CSS
-   TypeScript


### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
