import { useEffect, useState } from "react";
import Card from "../Card/card";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_key = "0d0a2b99c38be169447fb0d359d54043";
const API_URL = "https://api.themoviedb.org/3";

export function List() {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const filmesPorPagina = 6;

  const nextMovie = () => {
    if (startIndex + filmesPorPagina < movies.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const lastMovie = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full py-8 bg-gray-900">
      <h2 className="text-2xl font-bold text-white mb-6">Filmes Populares</h2>
      <div className="relative flex items-center w-full max-w-[1800px]">
        {/* Botão de Navegação Esquerda */}
        <button
          onClick={lastMovie}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#006A71] hover:bg-[#48A6A7] rounded-full p-3 shadow-md transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Lista de Filmes */}
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 240}px)` }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="text-white w-[238px] flex-shrink-0 bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Card movie={movie} />
            </div>
          ))}
        </div>

        {/* Botão de Navegação Direita */}
        <button
          onClick={nextMovie}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#006A71] hover:bg-[#48A6A7] rounded-full p-3 shadow-md transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
