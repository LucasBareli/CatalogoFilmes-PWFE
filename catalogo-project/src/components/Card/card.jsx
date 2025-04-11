import React from "react";
import { TiDelete } from "react-icons/ti";

const Card = ({ movie, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg max-w-4xl w-full text-white ">
        {/* Botão Fechar */}
        <button
          className="text-white absolute top-4 right-4 text-4xl font-bold hover:text-purple-700 cursor-pointer"
          onClick={closeModal}
        >
          <TiDelete />
        </button>

        {/* Banner do Filme */}
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Conteúdo do Card */}
        <div className="mt-6">
          <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
          <p className="text-sm text-gray-400 mb-4">{movie.overview}</p>

          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="bg-red-600 text-white px-2 py-1 rounded">16</span>
            <span>{movie.release_date.split("-")[0]}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <strong>Avaliação:</strong>
            <span className="text-yellow-400 font-bold">
              {movie.vote_average}/10
            </span>
          </div>

          {/* Elenco e Direção */}
          <p className="mt-4 text-sm">
            <strong>Elenco:</strong> Lucas Bareli e DS13 <br />
            <strong>Direção:</strong> Fernanda Fretes
          </p>

          {/* Botão Adicionar à Lista */}
          <button className="mt-6 px-6 py-2 bg-gray-800 rounded hover:bg-purple-700 transition cursor-pointer">
            Minha Lista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
