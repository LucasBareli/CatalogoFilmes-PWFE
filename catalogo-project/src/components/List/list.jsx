import { useEffect, useState } from "react";
import { Card } from "../Card/card";
import axios from "axios";

const API_key = '0d0a2b99c38be169447fb0d359d54043';
const API_URL = 'https://api.themoviedb.org/3';

export function List() {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const filmesPorPagina = 6;
    
    const nextMovie = () => {
        if (startIndex + 1 < movies.length - filmesPorPagina + 1) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const lastMovie = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log("Error", error);
            });
    }, []);

    return (
        <div className="relative flex flex-col items-center w-full">
            <div className="relative flex items-center w-full max-w-[1800px] overflow-hidden">
                <button onClick={lastMovie} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
                X
                </button>

                <div className="flex gap-4 transition-transform duration-500 ease-in-out"
                     style={{ transform: `translateX(-${startIndex * 240}px)` }}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="text-white w-[238px] flex-shrink-0">
                            <Card movie={movie} />
                        </div>
                    ))}
                </div>

                <button onClick={nextMovie} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
                X
                </button>
            </div>
        </div>
    );
}