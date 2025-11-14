import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from './Card'

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function SearchPage() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`)

                const data = await res.json()

                setResults(data.results)
            } catch (error) {
                console.error("Failed to fetch search data")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [query])

    return (
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-3 text-white'>Search results for "{query}"</h2>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
                    <p className="ml-4 text-white text-lg">Loading...</p>
                </div>
            ) : results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {results.map((item, index) => (
                        <Card key={index} movies={item} />
                    ))}
                </div>
            ) : (
                <p className='text-gray-400'>No results found.</p>
            )}
        </div>
    )
}
