import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
                const data = await res.json()
                setMovie(data)
            } catch (error) {
                console.error("Error fetching movie", error)
            }
        }
        fetchMovie()
    }, [id])



    return (
        <div className="text-white text-center p-6">
            {movie ? (
                <div>
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="mx-auto rounded-2xl shadow-lg mb-4"
                    />
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{movie.overview}</p>
                    <p className="mt-2 text-yellow-400">⭐ {movie.vote_average}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
