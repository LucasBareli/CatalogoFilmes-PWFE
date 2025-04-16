import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ModalCard from "../ModalCard/modalcard";

const API_key = "0d0a2b99c38be169447fb0d359d54043";
const API_URL = "https://api.themoviedb.org/3";

const List = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const scrollContainer = (id, direction) => {
    const container = document.getElementById(id);
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderMovies = (id) => (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl z-10 bg-purple-800 bg-opacity-70 text-white p-2 rounded-full"
        onClick={() => scrollContainer(id, "left")}
      >
        <IoIosArrowBack />
      </button>
      <div
        id={id}
        className="flex gap-4 overflow-hidden no-scrollbar"
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "hidden",
          paddingBottom: "3rem",
          display: "flex",
          noScrollOverflow: "none"
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer flex-shrink-0 w-48"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl z-10 bg-purple-800 bg-opacity-70 text-white p-2 rounded-full"
        onClick={() => scrollContainer(id, "right")}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );

  return (
    <section className="p-6 bg-black">
      <h2 className="text-2xl font-bold mb-4 text-white">Em alta</h2>
      {renderMovies("trending-now")}

      <h2 className="text-2xl font-bold mb-4 text-white">Mais assistidos</h2>
      {renderMovies("most-viewed")}

      <h2 className="text-2xl font-bold mb-4 text-white">Bem avaliados</h2>
      {renderMovies("top-rated")}

      {selectedMovie && (
        <ModalCard
          movie={selectedMovie}
          closeModal={closeModal}
          setSelectedMovie={setSelectedMovie} 
        />
      )}

    </section>
  );
};

export default List;
