import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
