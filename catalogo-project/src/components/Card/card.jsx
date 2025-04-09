import React, { useState } from "react";

function Card({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="container bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer"
        onClick={handleOpenModal}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{movie.title}</h3>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-2xl shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">{movie.title}</h3>
            <p className="mt-4 text-gray-600">{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
