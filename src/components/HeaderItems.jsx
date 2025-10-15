import React from 'react'

export default function HeaderItems({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer'>
        <Icon/>
        <h1 className='relative after:absolute after:content-[""] after:w-0 after:-bottom-1 after:h-[2px] after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>{name}</h1>
    </div>
  )
}
