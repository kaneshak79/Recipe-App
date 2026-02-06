
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = (query) =>
  fetch(`${BASE_URL}/search.php?s=${query}`)
    .then(res => res.json());

export const getMealById = (id) =>
  fetch(`${BASE_URL}/lookup.php?i=${id}`)
    .then(res => res.json());

export const getCategories = () =>
  fetch(`${BASE_URL}/categories.php`)
    .then(res => res.json());

export const filterByCategory = (category) =>
  fetch(`${BASE_URL}/filter.php?c=${category}`)
    .then(res => res.json());
