import React, { useEffect, useState } from 'react'
import { getTrendingVideos } from '../api/tmdb'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function Slider() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getTrendingVideos();
                setMovies(data.results)

            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();

    }, []);


    return (
        <div className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ dynamicBullets: true }}
                autoplay={{
                    delay: 3000, // ⏱️ 3 seconds
                    disableOnInteraction: false, // keeps autoplay even after user interaction
                }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true} // makes the slider loop infinitely
                className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[80vh] "
            >
                {movies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={IMAGE_BASE_URL + item.backdrop_path}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
