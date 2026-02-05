

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavCount(favs.length);
  }, []);

  return (
    <nav className="w-full sticky py-2 top-0 z-50 backdrop-blur-4xl bg-indigo-900/80 border-b border-white/20 shadow-lg">
      <div className="w-full px-10 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="!text-white text-5xl font-extrabold tracking-wide"
        >
           RecipeHub
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-10 text-sm font-medium">
          <Link
            to="/"
            className="!text-white/80 hover:!text-white transition border-b-2 border-transparent hover:border-white pb-1"
          >
            Home
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
