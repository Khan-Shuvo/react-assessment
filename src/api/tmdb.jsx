const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getTrendingVideos = async () =>{
    const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
   if(!res.ok){
    throw new Error("Failed to fetch trending videos");
   }
   return await res.json()
}

export const getMovieByGenreId = async (id)=>{
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`)

    if(!res.ok){
        throw new Error("Failed to fetch movies by genre")
    }
   return await res.json()
}
