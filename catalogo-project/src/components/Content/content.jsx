import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../List/list";
import { FaPlay } from "react-icons/fa6";

const API_key = "0d0a2b99c38be169447fb0d359d54043";
const API_URL = "https://api.themoviedb.org/3";

const Content = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="relative h-[70vh] overflow-hidden">
        {movies.length > 0 && (
          <div className="relative h-full transition-all duration-1000 ease-in-out object-cover">
            <img
              src={`https://image.tmdb.org/t/p/original${movies[currentIndex]?.backdrop_path}`}
              alt={movies[currentIndex]?.title}
              className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
            <div className="absolute bottom-10 left-10 text-white space-y-4 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                {movies[currentIndex]?.title}
              </h2>
              <p className="text-sm md:text-lg text-gray-300 line-clamp-3">
                {movies[currentIndex]?.overview}
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-purple-700 px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-600 transition duration-300 cursor-pointer">
                  <FaPlay />
                  Assistir
                </button>
                <button className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <List />
    </div>
  );
};

export default Content;
