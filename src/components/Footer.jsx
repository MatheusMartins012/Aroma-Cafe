import { Link } from 'react-router-dom'
import { PiCoffeeBold } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


function Footer() {
    return (
        <footer className="flex flex-col justify-between w-full mx-auto px-15 pt-15 bg-[#0F0F10] text-white">
            
            {/* Bloco superior com as 3 colunas */}
            <div className="flex justify-between w-full pb-12">
                <div className="flex flex-col gap-6">
                    <div className='flex gap-2 items-center'>
                        <PiCoffeeBold size={"40"} className='text-[#c7b59e]' />
                        <p className="text-2xl">Aroma café</p>
                    </div>
                    <div>
                        <p className="text-white/60">Café é sempre uma boa ideia</p>
                    </div>
                    <div className="flex gap-8 text-3xl">
                        <RxInstagramLogo className="text-[#c7b59e] cursor-pointer" />
                        <FaWhatsapp className="text-[#c7b59e] cursor-pointer" />
                        <RiTwitterXFill className="text-[#c7b59e] cursor-pointer" />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <p className="text-[#c7b59e] mb-5">Links</p>
                    <div className='flex flex-col gap-3'>
                        <Link to="/" className='text-[#9E9990] text-sm hover:text-white transition-colors'>inicio</Link>
                        <Link to="/cardapio" className='text-[#9E9990] text-sm hover:text-white transition-colors'>cardapio</Link>
                        <Link to="/sobre" className='text-[#9E9990] text-sm hover:text-white transition-colors'>sobre nos</Link>
                        <Link to="/contato" className='text-[#9E9990] text-sm hover:text-white transition-colors'>contato</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='mb-5 text-[#c7b59e]'>Contato</p>
                    <div className='flex gap-3.5 items-center'>
                        <BsTelephone className='text-[#c7b59e]' size={20} />
                        <p className='text-[#9E9990] text-sm'>(88) 9-94372201</p>
                    </div>
                    <div className='flex gap-3.5 items-center'>
                        <MdOutlineEmail className='text-[#c7b59e]' size={20} />
                        <p className='text-[#9E9990] text-sm'>fmatheus.martins1107@gmail.com</p>
                    </div>
                    <div className='flex gap-3.5 items-center'>
                        <CiLocationOn className='text-[#c7b59e]' size={20} />
                        <p className='text-[#9E9990] text-sm'>Centro, 1000 - Forquilha/CE</p>
                    </div>
                </div>
            </div>

            {/* Nova div inferior com borda superior e links de políticas/ano */}
            <div className="flex justify-between items-center w-full py-6 border-t border-[#c7b59e]/30 text-sm text-[#9E9990]">
                <p>&copy; {new Date().getFullYear()} Aroma Café. Todos os direitos reservados.</p>
                <div className="flex gap-6">
                    <Link to="/privacidade" className="hover:text-white transition-colors border-r pr-5">Política de Privacidade</Link>
                    <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer