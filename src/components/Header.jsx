import { Link, useLocation } from 'react-router-dom'
import { PiCoffeeBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const location = useLocation();
  
  // Verifica se estamos na página Home
  const isHome = location.pathname === '/';

  return (
    <header className={`w-full px-20 py-5 transition-colors duration-300 z-50 ${
      isHome 
        ? 'absolute top-0 left-0 bg-transparent text-white/75' // Estilo da Home (flutuando, transparente)
        : 'relative bg-[#141414] text-white shadow-md'        // Estilo das outras páginas (com fundo sólido e fixo no fluxo)
    }`}>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <PiCoffeeBold size={"35px"} className='text-[#B08968]' />
          <Link to="/" className='font-texto text-white text-2xl'>
            aroma café
          </Link>
        </div>

        <nav className='flex items-center gap-15'>
          <Link to="/" className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>Início</Link>
          <Link to="/cardapio" className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>Cardapio</Link>
          <Link to="/" className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>Sobre nós</Link>
          <Link to="/contato" className='text-white/70 no-underline hover:underline decoration-transparent hover:decoration-[#6F4E37] decoration-2 underline-offset-15 transition-colors duration-300 ease-in-out'>Contato</Link>
        </nav>

        <div className='flex items-center gap-5'>
          <CiSearch size={"25px"} className='cursor-pointer hover:text-[#B08968]' />
          <IoCartOutline size={"25px"} className='cursor-pointer hover:text-[#B08968]' />
          <button className='bg-[#915831] hover:bg-[#7a4928] rounded-full px-6 py-2 text-white border-none cursor-pointer transition-colors'>
            Faça seu pedido
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header