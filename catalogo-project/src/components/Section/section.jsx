import React, { useState, useEffect } from "react";

const Section = () => {
  const movies = [
    {
      title: "Spider-Man 3",
      description: "Violence &middot; Exciting",
      image: "../src/assets/rio.png",
    },
    {
      title: "The Batman",
      description: "Dark &middot; Thrilling",
      image: "../src/assets/rio.png",
    },
    {
      title: "Avengers: Endgame",
      description: "Action &middot; Emotional",
      image: "../src/assets/rio.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${movie.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-end h-full bg-gradient-to-t from-black/90 to-transparent">
            <div className="p-8">
              <h2 className="text-5xl font-bold text-[#169976] drop-shadow-lg">
                {movie.title}
              </h2>
              <p
                className="mt-2 text-gray-300 text-lg"
                dangerouslySetInnerHTML={{ __html: movie.description }}
              />
              <div className="mt-6 flex space-x-4">
                <button className="px-6 py-2 text-lg font-semibold rounded-lg bg-[#169976] text-white shadow-md hover:bg-[#48A6A7] transition-all duration-200">
                  Play
                </button>
                <button className="px-6 py-2 text-lg font-semibold rounded-lg border-2 border-[#169976] text-[#169976] bg-transparent shadow-md hover:bg-[#48A6A7] hover:text-white transition-all duration-200">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-[#169976]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Section;
