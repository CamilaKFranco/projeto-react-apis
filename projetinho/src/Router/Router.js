import { BrowserRouter, Route, Routes } from "react-router-dom";
import  PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import HomePage from "../Pages/HomePage/HomePage"
import  ErrorPage from '../Pages/ErrorPage/ErrorPage'
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:name" element={<PokemonDetailPage />} />
        <Route path='*' element={<ErrorPage/>}/>
      
      </Routes>
    </BrowserRouter>
  );
};
