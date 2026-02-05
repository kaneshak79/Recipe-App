# 🍽️ Recipe App

A **dynamic and responsive recipe application** built with **React JS** and **TailwindCSS**. Users can browse, search, and filter recipes from around the world, view detailed instructions, ingredients, and tutorial videos, and save their favorite recipes for later. The app uses the **public TheMealDB API**.

This project demonstrates practical React skills including component-based architecture, state management, API integration, routing, and localStorage persistence.

---

## **Table of Contents**

- [Demo](#demo)
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Q&A / Requirements Check](#qa--requirements-check)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Author](#author)

---

## **Demo**

*(Optional: Add your live deployment URL here if hosted)*  
Example: [Live Demo](https://yourapp.netlify.app)

---

## **Project Overview**

The Recipe App is designed for anyone who loves cooking or wants inspiration for meals. It provides:  

- A **clean and modern UI** using TailwindCSS  
- The ability to **search recipes by name**  
- **Filter recipes by category**  
- View detailed recipe information, including:
  - Ingredients with measurements  
  - Step-by-step cooking instructions  
  - Embedded YouTube cooking videos (if available)  
- **Favorites functionality** with `localStorage` persistence  
- Fully responsive design for **desktop, tablet, and mobile**  

The app leverages **React Router** for navigation and uses functional components with hooks (`useState`, `useEffect`) for state management.

---

## **Features**

### 1. Recipe Listings
- Display all recipes fetched from TheMealDB API.
- Each recipe card shows:
  - Name of the meal
  - Thumbnail image
  - Category
- Clickable card navigates to **Recipe Details Page**.

### 2. Search Recipes
- Search recipes by name or keyword.
- Live search updates results dynamically.
- Works together with category filters.

### 3. Filter Recipes
- Filter recipes by **categories** fetched from API.
- Users can combine search and filter for precise results.

### 4. Recipe Details
- Detailed recipe page includes:
  - Meal name, category, and origin (area)
  - Ingredients and their measurements
  - Step-by-step cooking instructions
  - Embedded YouTube video for tutorial
- Back button to return to the recipe list.

### 5. Favorites
- Mark/unmark recipes as favorites using a heart icon.
- Favorites persist in `localStorage`.
- Separate **Favorites Page** displays all saved recipes.
- Remove recipes from favorites directly from the Favorites page.

### 6. Responsive Design
- Fully responsive grids and layouts using TailwindCSS.
- Optimized for **mobile, tablet, and desktop** devices.

---

## **Tech Stack**

| Technology | Purpose |
|------------|---------|
| **React JS** | Frontend framework for building UI components |
| **TailwindCSS** | Utility-first CSS framework for styling |
| **React Router** | Client-side routing and navigation |
| **Fetch API** | API requests to TheMealDB |
| **localStorage** | Persistent storage for user favorites |
| **Heroicons & React Icons** | For icons (heart, search, etc.) |
| **Vite** | Fast development server & build tool |

---

## **Installation**

git clone <your-repo-url>
cd recipe-app

npm install

Start the development server

npm run dev

Usage

Home Page

Browse all recipes.

Search by recipe name.

Filter recipes by category.

Recipe Details Page

Click any recipe card to view details.

See ingredients, instructions, category, and YouTube video.

Navigate back using the "Back" button.

# **Favorites Page**

Click the heart icon to add/remove favorites.

View all saved favorites.

Remove favorites directly from the page.

API Reference

The app consumes endpoints from TheMealDB API
:

Endpoint	Description	Example
/search.php?s={query}	Search meals by name or keyword	/search.php?s=chicken
/filter.php?c={category}	Filter meals by category	/filter.php?c=Seafood
/lookup.php?i={id}	Get full meal details by ID	/lookup.php?i=52772
/categories.php	Fetch all meal categories	/categories.php



Component Responsibilities:

Home.jsx – Fetches and displays recipes, handles search & filter, manages favorites.

RecipeDetails.jsx – Shows full recipe details including ingredients and video.

Favorites.jsx – Lists user favorites with remove functionality.

Navbar.jsx – Header with navigation and branding.

RecipeCard.jsx – Reusable card component for displaying recipe info.

SearchBar.jsx & Filter.jsx – Handle user input for search and filtering.

Future Improvements

Add pagination for large recipe lists.

Implement loading skeletons during API fetch.

Add error handling for failed API requests.

Add ingredient-based search.

Add user authentication to save favorites on the server.

Deploy with Netlify/Vercel and add SEO optimizations.

License

This project is licensed under the MIT License.

Author

Kanesha K
