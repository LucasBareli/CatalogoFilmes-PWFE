import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ModalCard from "../components/ModalCard/modalcard";

const API_KEY = "0d0a2b99c38be169447fb0d359d54043";
const API_URL = "https://api.themoviedb.org/3";

const Series = () => {
  const [seriesTrending, setSeriesTrending] = useState([]);
  const [seriesTopRated, setSeriesTopRated] = useState([]);
  const [seriesPopular, setSeriesPopular] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  console.log(Series)

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const trendingResponse = await axios.get(
          `${API_URL}/trending/tv/day?api_key=${API_KEY}&language=pt-BR`
        );
        const topRatedResponse = await axios.get(
          `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=pt-BR`
        );
        const popularResponse = await axios.get(
          `${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`
        );

        setSeriesTrending(trendingResponse.data.results);
        setSeriesTopRated(topRatedResponse.data.results);
        setSeriesPopular(popularResponse.data.results);
      } catch (error) {
        console.error("Erro ao buscar séries:", error);
      }
    };

    fetchSeries();
  }, []);

  const closeModal = () => {
    setSelectedSeries(null);
  };

  const scrollContainer = (id, direction) => {
    const container = document.getElementById(id);
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderSeries = (id, seriesList) => (
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
          scrollBehavior: "smooth",
        }}
      >
        {seriesList.map((series) => (
          <div
            key={series.id}
            className="cursor-pointer flex-shrink-0 w-48"
            onClick={() => setSelectedSeries(series)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              alt={series.name}
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
    <section className="p-16 bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Séries</h1>

      <h2 className="text-2xl font-bold mb-4 text-white">Em alta</h2>
      {renderSeries("trending-series", seriesTrending)}

      <h2 className="text-2xl font-bold mb-4 text-white">Mais populares</h2>
      {renderSeries("popular-series", seriesPopular)}

      <h2 className="text-2xl font-bold mb-4 text-white">Bem avaliadas</h2>
      {renderSeries("top-rated-series", seriesTopRated)}

      {selectedSeries && (
        <ModalCard
          movie={selectedSeries} 
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default Series;