import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiCoffeeBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <header className=" absolute z-10 w-full left-0 text-white/75 top-5 ">
      <div className='flex justify-between mx-auto max-w-7xl mt-4'>
        <div className='flex gap-4'>
          <PiCoffeeBold size={"35px"} className='text-[#B08968]' />
          <Link
            to="/" 
            className='font-thin text-white text-3xl'>
            aroma café
          </Link>
        </div>

        <nav className=' flex items-center gap-6'>
          <Link className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>inicio</Link>
          <Link className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>cardapio</Link>
          <Link className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>sobre nos</Link>
          <Link className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>contato</Link>
        </nav>

        <div className='flex items-center gap-5'>
          <CiSearch  size={"25px"}/>
          <IoCartOutline size={"25px"}/>
          <button className='bg-[#6F4E37] rounded-full px-6 py-2 text-white border-none cursor-pointer' onClick={() => window.location.href = ''}>Faça seu pedido</button>
        </div>
      </div>


    </header>
  )
}

export default Header
