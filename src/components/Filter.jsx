import { useEffect, useState } from "react";

const Filter = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <select
      className="p-3 border rounded-lg shadow"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option
          key={cat.idCategory}
          value={cat.strCategory}
        >
          {cat.strCategory}
        </option>
      ))}
    </select>
  );
};

export default Filter;
