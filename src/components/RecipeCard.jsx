import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded-xl shadow hover:scale-105 transition">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-t-xl"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg">
            {recipe.strMeal}
          </h2>
          <p className="text-sm text-gray-500">
            {recipe.strCategory}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
