import React from "react";
import { Link } from "react-router-dom";

const Image_Base_Url = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function Card({ movies }) {
  const type = movies.title ? "movie" : "tv";

  const posterUrl = movies.poster_path
    ? Image_Base_Url + movies.poster_path
    : "/placeholder.jpg"; // fallback image

  return (
    <Link to={`/${type}/${movies.id}`}>
      <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Poster Image */}
        <div className="relative w-full aspect-[2/3]">
          <img
            src={posterUrl}
            alt={movies.title || movies.name}
            className="w-full h-full object-cover rounded-b-md"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium tracking-wide">
              View Details
            </span>
          </div>
        </div>

        {/* Title Section */}
        <div className="p-3 md:p-4 text-center">
          <h3 className="text-white text-sm md:text-base font-semibold truncate">
            {movies.title || movies.name}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mt-1 capitalize">
            {type}
          </p>
        </div>
      </div>
    </Link>
  );
}
