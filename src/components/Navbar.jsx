


import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const { favorites } = useFavorites(); 

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-indigo-900/70 border-b border-white/20 shadow-lg">
      <div className="w-full px-10 py-5 flex justify-between items-center">

       
        <Link
          to="/"
          style={{color:"white"}}
          className="text-white text-4xl font-extrabold tracking-wide"
        >
          RecipeHub
        </Link>

      
        <div className="flex items-center gap-8 text-sm font-medium text-white">
          
          <Link
            to="/"
            style={{color:"white"}}
            className="text-white/80 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
          >
            Home
          </Link>

          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
