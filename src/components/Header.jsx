import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'

import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import Card from './Card';
import { useNavigate } from 'react-router-dom';



export default function Header() {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const navigate = useNavigate()

    const menu = [
        { name: "home", icon: HiHome, path: "/" },
        { name: "movies", icon: HiPlayCircle, path: "/movies" },
        { name: "series", icon: HiTv, path: "/series" }
    ]
    const handleSearch = () => {
        if (!search) return;
        navigate(`/search?q=${search}`)
        setSearch('')
    }
    return (
        <>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center  gap-2'>
                    {/* logo */}
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

                    {/* desktop nav  */}
                    <div className='hidden md:flex items-center gap-3'>
                        {menu.map(item => <HeaderItems name={item.name} Icon={item.icon} path={item.path} />)};
                    </div>
                    {/* mobile nav */}
                    <div className='flex items-center gap-3 md:hidden'>
                        {menu.map((item, index) => index < 3 && (<HeaderItems name={''} Icon={item.icon} path={item.path} />))}
                    </div>

                    {/* search bar */}
                    <div className='flex flex-col md:flex-row items-center gap-2 bg-gray-800 rounded-md px-3 py-2 w-full max-w-xs md:max-w-sm transition-all duration-300 ease-in-out animate-slide-in-down'>
                        <input
                            type="text"
                            placeholder='Search...'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            className='px-3 py-2 rounded-md text-black w-full md:w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out'
                        />
                        <button
                            onClick={handleSearch}
                            className='text-white hover:text-gray-300 transform hover:scale-110 transition-transform duration-200 mt-2 md:mt-0'
                        >
                            <HiMagnifyingGlass size={20} />
                        </button>
                    </div>

                    {/* profile */}
                </div>
                <div>
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        className='w-[40px] rounded-full' />
                </div>
            </div>
            {result.length > 0 && (
                result.map(item => (<Card movies={item} />))
            )}
        </>
    )
}
