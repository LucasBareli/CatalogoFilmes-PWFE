import React, { useEffect, useState } from "react";
import axios from "axios";
import { TiDelete } from "react-icons/ti";

const API_key = "0d0a2b99c38be169447fb0d359d54043";
const API_URL = "https://api.themoviedb.org/3";

const ModalCard = ({ movie, closeModal, setSelectedMovie }) => {
  const [relatedMovies, setRelatedMovies] = useState([]);


  useEffect(() => {
    document.body.style.overflow = 'hidden';  
    return () => {
      document.body.style.overflow = '';  
    };
  }, []);
  
  useEffect(() => {
    axios
      .get(`${API_URL}/movie/${movie.id}/recommendations?api_key=${API_key}&language=pt-BR`)
      .then((response) => {
        setRelatedMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching related movies:", error);
      });
  }, [movie]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movie]);

  return (
    <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto modal-container">
      <button
        className="absolute top-6 right-6 text-4xl hover:text-purple-600 transition z-50 cursor-pointer"
        onClick={closeModal}
      >
        <TiDelete />
      </button>

      <div className="relative h-[70vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="px-8 py-6 bg-black">
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="bg-red-600 px-2 py-1 rounded">16</span>
          <span>{movie.release_date.split("-")[0]}</span>
          <span className="text-green-400">86% relevante</span>
        </div>
        <p className="text-gray-300 text-lg mb-6">{movie.overview}</p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Assistir
          </button>
          <button className="bg-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition">
            Minha Lista
          </button>
        </div>
      </div>

      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-4">Filmes Relacionados</h2>
        {relatedMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedMovies.map((relatedMovie) => (
              <div
                key={relatedMovie.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => {
                  setSelectedMovie(relatedMovie);
                  window.scrollTo({ top: 0, behavior: "smooth" }); 
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${relatedMovie.poster_path}`}
                  alt={relatedMovie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-4">
                  <h3 className="text-lg font-semibold">{relatedMovie.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Nenhum filme relacionado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ModalCard;
