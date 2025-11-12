import React, { useEffect, useState } from 'react'
import List from './List';
import { getTvSeries } from '../api/tmdb';
import Card from './Card';




const tvGenres = [
    { id: 10759, name: "Action & Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 10762, name: "Kids" },
    { id: 9648, name: "Mystery" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi & Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "War & Politics" },
    { id: 37, name: "Western" }
];


export default function Series() {
    const [series, setSeries] = useState([])


    useEffect(() => {
        async function fetchAllSeries() {
            try {
                const allData = await Promise.all(
                    tvGenres.map(genre => getTvSeries(genre.id))
                );
                // console.log(allData)
                const combined = tvGenres.map((genre, index) => ({
                    genre: genre.name,
                    series: allData[index],
                }));

                setSeries(combined);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAllSeries();
    }, []);



    return (
        <>
            {
                series.map((item,index) => index< 5&& (
                    <div className='px-8 md:p-10'>
                        <h2 className='text-[20px] md:text-3xl text-white font-bold py-3'>{item.genre}</h2>
                        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 cursor-pointer rounded-md'>
                        {
                            item.series.results.map((item, index)=> index<10&&(<Card movies={item}/>))
                            
                        }
                        </div>
                    </div>
                ))

            }
        </>
    )
}
