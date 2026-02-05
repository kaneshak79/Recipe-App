



import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites");
      setFavorites(saved ? JSON.parse(saved) : []);
    } catch (error) {
      console.warn("Invalid favorites in localStorage", error);
      setFavorites([]);
    }
  }, []);

  // Remove from favorites
  const removeFavorite = (idMeal) => {
    const updated = favorites.filter((fav) => fav.idMeal !== idMeal);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          My Favorites
        </h1>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400 text-lg mt-10">
          You have no favorite recipes yet 😕
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} className="relative group">
              {/* Remove Favorite Button */}
              <button
                onClick={() => removeFavorite(recipe.idMeal)}
                className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white shadow hover:scale-110 transition"
              >
                <SolidHeartIcon className="h-6 w-6 text-red-500" />
              </button>

              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
