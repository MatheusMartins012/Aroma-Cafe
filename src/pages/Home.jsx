import { PiCoffeeBold } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

import { Link } from 'react-router-dom'
import Destaques from '../components/Destaques';
import AppMobile from "../components/AppMobile";

function Home() {
    return (
        <div className="w-full">

            <section className="relative h-[80vh] min-h-144 md:min-h-201 w-full overflow-hidden">

                <img
                    src="/img/home.jfif"
                    alt="Café com arte na espuma"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 px-6 sm:px-12 lg:px-20 text-white">

                    <h2 className="text-base md:text-[20px] tracking-widest text-[#cd9e6a]">
                        Sabores que inspiram
                    </h2>

                    <div className="mt-5 font-bold">
                        <h1 className="max-w-200 text-4xl sm:text-5xl lg:text-7xl leading-[0.9] font-texto">
                            O melhor café
                            <span className="block text-[#cd9e6a]">
                                para o seu dia
                            </span>
                        </h1>
                    </div>

                    <div className="mt-7 max-w-110 text-base md:text-[20px] text-white/70">
                        <p>
                            Mais do que café, oferecemos momentos especiais
                            em cada xícara.
                        </p>
                    </div>

                    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">

                        <Link
                            to="/cardapio"
                            className="inline-block cursor-pointer rounded-3xl bg-[#905a34] px-8 sm:px-15 py-4 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#cd9e6a] hover:text-amber-900 text-center"
                        >
                            Ver cardápio
                        </Link>

                        <Link
                            to='/sobre'
                            className="inline-block cursor-pointer rounded-full border border-[#905a34] px-8 sm:px-15 py-4 text-center text-amber-50
                            transition-all duration-500 ease-in-out hover:scale-105 hover:bg-amber-50 hover:text-amber-900">
                            Conheça nossa História
                        </Link>

                    </div>
                </div>
            </section>

            <section className="flex min-h-[12vh] w-full items-center bg-[#1c1510] py-8 md:py-6 text-white">

                <div className="mx-auto grid w-full grid-cols-1 gap-6 px-6 sm:px-12 lg:px-20 md:grid-cols-3 md:gap-0">

                    {/* Diferencial 1 */}
                    <div className="flex items-center gap-4 md:border-r md:border-white/10 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">

                        <PiCoffeeBold
                            size={35}
                            className="shrink-0 text-[#cd9e6a]"
                        />

                        <div>
                            <p className="font-semibold text-base">
                                Café de qualidade
                            </p>

                            <p className="mt-1 text-sm text-white/60">
                                Grãos selecionados
                            </p>
                        </div>

                    </div>

                    {/* Diferencial 2 */}
                    <div className="flex items-center gap-4 md:border-r md:border-white/10 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">

                        <HiOutlineDesktopComputer
                            size={35}
                            className="shrink-0 text-[#cd9e6a]"
                        />

                        <div>
                            <p className="font-semibold text-base">
                                Ambiente aconchegante
                            </p>

                            <p className="mt-1 text-sm text-white/60">
                                Perfeito para relaxar
                            </p>
                        </div>

                    </div>

                    {/* Diferencial 3 */}
                    <div className="flex items-center gap-4 md:border-r md:border-white/10 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">

                        <MdOutlinePerson
                            size={35}
                            className="shrink-0 text-[#cd9e6a]"
                        />

                        <div>
                            <p className="font-semibold text-base">
                                Atendimento especial
                            </p>

                            <p className="mt-1 text-sm text-white/60">
                                Sempre com você
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="w-full bg-white px-6 sm:px-12 lg:px-20 pt-12 md:pt-20 pb-10 text-[#1c1510]">

                <div className="mx-auto flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-texto">
                            Nossos destaques
                        </h2>

                        <p className="mt-3 text-base text-[#9E9990]">
                            Experimente o que há de melhor no nosso cardápio.
                        </p>
                    </div>

                    <Link
                        to="/cardapio"
                        className="flex shrink-0 items-center gap-2 text-base text-[#99664f]"
                    >
                        Ver cardápio
                        <IoMdArrowRoundForward size={18} />
                    </Link>

                </div>
                <div>
                    <Destaques />
                </div>
            </section>

            <section>
                <AppMobile />
            </section>

        </div>
    );
}

export default Home;