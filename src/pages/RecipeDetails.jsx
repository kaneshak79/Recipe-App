


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        }
      });
  }, [id]);

  if (!meal) return null;

  /* ---------------- INGREDIENTS ---------------- */
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(
        `${ingredient}${measure ? " - " + measure : ""}`
      );
    }
  }

  /* ---------------- INSTRUCTIONS (SAFE) ---------------- */
  const instructions = meal?.strInstructions
    ? meal.strInstructions
        .split(/\r\n|\n/)
        .filter((step) => step.trim() !== "")
    : [];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-800 text-white pb-24">


 

      {/* Back Button */}
      <div className="px-6 md:px-16 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-violet-600 hover:text-gray-400 transition"
        >
          ← Back to recipes
        </button>
      </div>

      {/* Top Section */}
      <div className="px-6 md:px-16 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
        />

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold">
              {meal.strMeal}
            </h1>
            <p className="text-white/70 mt-2">
              {meal.strCategory} • {meal.strArea}
            </p>
          </div>

          {/* Ingredients */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">
              Ingredients
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ingredients.map((item, i) => (
                // <li
                //   key={i}
                //   className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 text-sm"
                // >
                //   <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                //   {item}
                // </li>
                <li
  key={i}
  className="bg-white/15 rounded-xl px-4 py-3 text-sm"
>
  {item}
</li>

              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="w-full mt-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-10">
          Instructions
        </h2>

        <div className="relative border-l-2 border-purple-400 pl-10 space-y-8">
          {instructions.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full 
                              bg-gradient-to-r from-pink-500 to-purple-500
                              flex items-center justify-center
                              font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Step Text */}
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      {meal.strYoutube && (
        <div className="px-6 md:px-16 mt-20">
          <h2 className="text-2xl font-bold mb-6">
            Watch Video
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={meal.strYoutube.replace("watch?v=", "embed/")}
              title="Recipe Video"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
    
  );
};

export default RecipeDetails;





