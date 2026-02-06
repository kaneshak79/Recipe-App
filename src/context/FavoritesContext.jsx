import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) =>
      prev.some((f) => f.idMeal === recipe.idMeal)
        ? prev.filter((f) => f.idMeal !== recipe.idMeal)
        : [...prev, recipe]
    );
  };

  const isFavorite = (id) =>
    favorites.some((f) => f.idMeal === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
