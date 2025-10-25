import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieDetails() {
    const { id, type } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
                const data = await res.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie", error);
            }
        }
        fetchMovie();
    }, [id]);

    if (!movie) {
        return (
            <div className="text-white flex justify-center items-center min-h-screen text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <>
            <div
                className="relative min-h-screen bg-cover bg-center text-white"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start max-w-6xl mx-auto px-6 py-10 gap-10">
                    {/* Poster */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-2xl shadow-lg w-64 md:w-80 lg:w-96"
                    />

                    {/* Details */}
                    <div className="max-w-2xl space-y-4 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
                            {movie.title || movie.name}
                        </h1>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 text-sm">
                            <span>🗓 {movie.release_date || movie.first_air_date}</span>
                            <span>⏱ {movie.runtime} min</span>
                            <span>⭐ {movie.vote_average.toFixed(1)} / 10</span>
                        </div>

                        <p className="text-gray-200 text-lg leading-relaxed">{movie.overview}</p>

                        {movie.genres && (
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                                {movie.genres.map((g) => (
                                    <span
                                        key={g.id}
                                        className="bg-yellow-500/20 border border-yellow-400 text-yellow-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {g.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {movie.homepage && (
                            <a
                                href={movie.homepage}
                                target="_blank"
                                className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg transition duration-300"
                            >
                                Visit Official Page
                            </a>
                        )}
                    </div>
                </div>
                {/* Related Movies Section */}
                {movie.genres && movie.genres.length > 0 && (
                    <div className=" relative px-6 md:px-12 py-10 z-10">
                        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                            More like {movie.title}
                        </h2>
                        <List genreId={movie.genres[0].id} />
                    </div>
                )}
            </div>

        </>
    );
}
