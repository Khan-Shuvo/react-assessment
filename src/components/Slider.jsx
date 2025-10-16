import React, { useEffect, useRef, useState } from 'react'
import { getTrendingVideos } from '../api/tmdb'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
const screenWidt = window.innerWidth;

export default function Slider() {

    const [movies, setMovies] = useState([]);
    const elementref = useRef()

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getTrendingVideos();
                // console.log(movies);
                console.log(data.results)
                setMovies(data.results)

            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();

    }, []);

    const sliderRight = (element) => {
        element.scrollLeft += screenWidt;
    };
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidt;
    };

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementref.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]  right-0 cursor-pointer' onClick={() => sliderRight(elementref.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4scrollbar-none scroll-smooth' ref={elementref}>
                {movies.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full  md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
        </div>
    )
}
