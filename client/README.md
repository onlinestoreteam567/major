# Project Structure Documentation

This document provides an overview of the project's folder structure and a brief description of each directory and its contents.

## Overview

The project is structured to maintain a clear separation of concerns, making it easy to understand and maintain. Below is a breakdown of each directory and its purpose.

## Directory Structure

src/
│
├── api/ # API interactions
│ ├── apiClient.js # General API client (e.g., Axios)
│ ├── productApi.js # API functions for working with products
│ ├── userApi.js # API functions for working with users
│ └── orderApi.js # API functions for working with orders
│
├── assets/ # Static files (images, icons, fonts)
│ ├── images/ # Product images, banners, etc.
│ ├── fonts/ # Fonts
│ └── icons/ # SVG or other icons
│
├── components/ # Reusable components
│ ├── UI/ # UI components with modular styles
│ │ ├── Button/ # Button component with module SCSS
│ │ │ ├── Button.jsx
│ │ │ ├── Button.module.scss
│ │ ├── Modal/ # Modal window component with module SCSS
│ │ │ ├── Modal.jsx
│ │ │ ├── Modal.module.scss
│ │ └── ... # Other UI components with module SCSS
│ │
│ ├── Header/ # Header component with module SCSS
│ │ ├── Header.jsx
│ │ └── Header.module.scss
│ │  
│ └── Footer/ # Footer component with module SCSS
│ ├── Footer.jsx
│ └── Footer.module.scss
│  
├── config/ # Configuration files
│ ├── apiConfig.js # API configuration
│ └── store.js # Redux store configuration
│
├── features/ # Application feature modules
│ ├── cart/
│ │ ├── CartPage/
│ │ │ ├── CartPage.jsx
│ │ │ ├── CartPage.module.scss
│ │ │ └── CartPage.test.js
│ │ ├── CartItem/
│ │ │ ├── CartItem.jsx
│ │ │ ├── CartItem.module.scss
│ │ │ └── CartItem.test.js
│ │ ├── cartSlice.js # Redux slice for cart
│ │ └── cartService.js # Cart logic (if needed)
│ │
│ ├── checkout/
│ │ ├── CheckoutPage/
│ │ │ ├── CheckoutPage.jsx
│ │ │ ├── CheckoutPage.module.scss
│ │ │ └── CheckoutPage.test.js
│ │ ├── checkoutSlice.js # Redux slice for checkout process
│ │ └── checkoutService.js # Checkout logic (if needed)
│ │
│ ├── product/
│ │ ├── ProductList/
│ │ │ ├── ProductList.jsx
│ │ │ ├── ProductList.module.scss
│ │ │ └── ProductList.test.js
│ │ ├── ProductDetail/
│ │ │ ├── ProductDetail.jsx
│ │ │ ├── ProductDetail.module.scss
│ │ │ └── ProductDetail.test.js
│ │ ├── productSlice.js # Redux slice for products
│ └ └── productService.js # Product data handling logic
│
├── hooks/ # Custom hooks
│ ├── useFetch.js # Hook for handling server requests
│ └── useCart.js # Hook for cart handling
│
├── pages/ # Pages tied to routes
│ ├── HomePage.jsx # Home page
│ ├── ProductPage.jsx # Product page
│ ├── CartPage.jsx # Cart page (imported from features)
│ ├── CheckoutPage.jsx # Checkout page (imported from features)
│ └── pages.module.scss # Common styles for pages
│
├── router/ # Router and layouts
│ ├── AppRouter.jsx # Application's main routing logic
│ ├── test-components/ Components for testing logic (for example - is Redux working correct?)
│ │ └─ Redux # Example test-component
│ │
│ └── layouts/ # Layout components
│ ├── MainLayout.jsx # Main layout for the application
│ └── AuthLayout.jsx # Layout for authentication pages
│
├── services/ # Service functions and business logic (if needed on frontend)
│ ├── paymentService.js # Payment logic (interacting with payment API)
│ └── notificationService.js # Notifications (e.g., Toast messages)
│
├── styles/ # Global styles and variables
│ ├── variables.scss # SCSS variables
│ ├── globals.scss # Global styles for the entire application
│ └── mixins.scss # Mixins and utility classes
│
├── utils/ # Utility functions and helper scripts
│ ├── helpers.js # General helper functions
│ ├── validators.js # Form validation
│ └── constants.js # Application constants
│
├── App.jsx # Root component of the application
├── index.jsx # Entry point for React
└── index.scss # Base styles

## Detailed Descriptions

### api/

Contains files responsible for interacting with external APIs. Each file typically includes functions that perform specific API requests.

### assets/

Holds static assets like images, fonts, and icons used throughout the application.

### components/

Contains reusable UI components that can be used across the application. Components are organized into subdirectories for better management.

### config/

Houses configuration files for API settings and Redux store management.

### features/

Organizes application features into modules. Each module contains components, Redux slices, and services related to specific features (e.g., cart, checkout).

### hooks/

Contains custom React hooks that encapsulate reusable logic for handling stateful behavior.

### pages/

Contains the main page components for routing within the application.

### router/

Includes routing logic and layout components that define how different pages are rendered.

### services/

Holds service functions that encapsulate business logic and API interactions.

### styles/

Contains global styles, SCSS variables, and mixins for consistent styling across the application.

### utils/

Includes utility functions and constants that can be reused throughout the application.

## How to Contribute

- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes
- Submit a pull request with a description of your changes
- Wait for approval

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions, please contact [onlinestoreteam567@gmail.com].
