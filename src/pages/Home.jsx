





import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      localStorage.removeItem("favorites");
      return [];
    }
  });

  useEffect(() => {
    const url = category
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals || []));
  }, [search, category]);

  const toggleFavorite = (recipe) => {
    const updated = favorites.some((f) => f.idMeal === recipe.idMeal)
      ? favorites.filter((f) => f.idMeal !== recipe.idMeal)
      : [...favorites, recipe];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some((f) => f.idMeal === id);

  return (
    <div className="min-h-screen bg-violet-50">
      {/* Header */}
      <div className="px-20 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-6xl font-extrabold text-gray-700">
              Explore Recipes
            </h1>
            <p className="mt-2 text-gray-500">
              Discover and save meals from around the world 🍽️
            </p>
          </div>

          
          <Link
  to="/favorites"
  className="relative px-6 py-2 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2"
>
  <CiHeart className="text-xl" />
  <span>Favorites</span>

  <span className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
    {favorites.length}
  </span>
</Link>

        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <SearchBar setSearch={setSearch} />
          <Filter setCategory={setCategory} />
        </div>
      </div>

      {/* Recipes Section */}
      <div className="relative px-10 py-14 overflow-hidden">
        {/* Blurred Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-300 blur-3xl scale-110 opacity-30"></div>

        {/* Content ABOVE blur */}
        <div className="relative z-10">
          {recipes.length === 0 && (
            <p className="text-center text-gray-400 text-lg mt-10">
              No recipes found 😕
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <button
                  onClick={() => toggleFavorite(recipe)}
                  className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white shadow hover:scale-110 transition"
                >
                  {isFavorite(recipe.idMeal) ? (
                    <SolidHeartIcon className="h-6 w-6 text-red-500" />
                  ) : (
                    <OutlineHeartIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
