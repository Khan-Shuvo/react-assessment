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


export default function Header() {

    const [toggle, setToggle] = useState(false)

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];

    return (
        <>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center  gap-2'>
                    {/* logo */}
                    <img src={logo} className='w-[80px] md:[115px] object-cover' />

                    {/* desktop nav  */}
                    <div className='hidden md:flex items-center gap-3'>
                        {menu.map(item => <HeaderItems name={item.name} Icon={item.icon} />)};
                    </div>
                    {/* mobile nav */}
                    <div className='flex items-center gap-3 md:hidden'>
                        {menu.map((item, index) => index < 3 && (<HeaderItems name={''} Icon={item.icon} />))}
                    </div>
                    {/* three dote */}
                    <div className='md:hidden' onClick={() => (setToggle(!toggle))}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                        {toggle ?
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-600 py-3 px-1'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItems name={item.name} Icon={item.icon} />
                                ))}
                            </div> : null
                        }
                    </div>
                    {/* profile */}
                </div>
                <div>
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        className='w-[40px] rounded-full' />
                </div>
            </div>
        </>
    )
}
