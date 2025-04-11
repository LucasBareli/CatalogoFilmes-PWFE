import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../List/list";

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
    <div className="bg-black text-white min-h-screen">
      {/* Banner Carrossel */}
      <div className="h-[70vh] relative overflow-hidden">
        {movies.length > 0 && (
          <div className="relative h-full transition-all duration-1000 ease-in-out">
            <img
              src={`https://image.tmdb.org/t/p/original${movies[currentIndex]?.backdrop_path}`}
              alt={movies[currentIndex]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black w-full p-6">
              <h2 className="text-4xl font-bold mb-4">{movies[currentIndex]?.title}</h2>
            </div>
          </div>
        )}
      </div>
      <List />
    </div>
  );
};

export default Content;
