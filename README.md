# JaLaba - Luxury Moroccan Menswear

JaLaba is a premium e-commerce platform dedicated to traditional Moroccan menswear, including Jalabas, Kaftans, Gandoras, and Belghas. The project emphasizes a high-end digital experience, blending modern web technologies with the rich heritage of Moroccan craftsmanship.

## Project Overview

This application serves as a digital showcase and storefront for artisan-crafted Moroccan garments. Key focuses include:

- **Immersive User Experience:** Utilizing advanced animations and fluid transitions to reflect the luxury nature of the brand.
- **Global Accessibility:** Full internationalization support for English, French, and Arabic (RTL).
- **Performance:** Optimized for speed and SEO using Next.js static generation.

## Technology Stack

- **Framework:** Next.js 15 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **State Management:** Zustand, React Context
- **Internationalization:** next-intl

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zack-elh/store-said.git
   ```

2. Navigate to the project directory:
   ```bash
   cd store-said
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

## Building for Production

This project is configured for static export to ensure maximum performance and portability.

To build the project:

```bash
npm run build
```

The build artifacts will be generated in the `out/` directory. This directory serves as the production-ready distribution folder.

## Deployment

### Netlify (Recommended)

This project is optimized for deployment on Netlify.

1. Connect your GitHub repository to Netlify.
2. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `out`
3. Deploy.

The application handles client-side routing and hydration automatically.

## Project Structure

- `/app` - Next.js App Router pages and layouts.
- `/components` - Reusable UI components.
- `/contexts` - Global state providers (Cart, Language).
- `/lib` - Utility functions and static data.
- `/public` - Static assets (images, fonts).
