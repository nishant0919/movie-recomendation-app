'use clinet'
import React from 'react'
import { CircleUserRound } from 'lucide-react';

const Navbar = () => {
  return (
   
<nav className=" bg-[#111827] h-[8vh] flex items-center ">
    <div className="text-white text-sm flex items-center justify-around w-full ">
      <div className="logo">
      <img src="https://www.cinebook.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.00d35c63.png&w=256&q=75" className='h-8' alt="" srcset="" />
      </div>
      <div className="search-bar">
        <input type="text" className='rounded-md p-[0.4rem] w-[40vw] text-[12px] bg-[#1b2230]' placeholder='Search for movies' />
      </div>
      <div className="menu">
        <CircleUserRound color='white'/>
      </div>

    </div>
</nav>
  )
}

export default Navbar