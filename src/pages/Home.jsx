import { PiCoffeeBold } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";
import Destaques from '../components/Destaques';

function Home() {
    return (
        <div className="w-full">

            <section className="relative h-[80vh] min-h-201 w-full overflow-hidden">

                <img
                    src="/img/home.jfif"
                    alt="Café com arte na espuma"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 px-20 text-white">

                    <h2 className="text-[20px] tracking-widest text-[#cd9e6a]">
                        Sabores que inspiram
                    </h2>

                    <div className="mt-5 font-bold">
                        <h1 className="max-w-200 text-7xl leading-[0.9] font-texto">
                            O melhor café
                            <span className="block text-[#cd9e6a]">
                                para o seu dia
                            </span>
                        </h1>
                    </div>

                    <div className="mt-7 max-w-110 text-[20px] text-white/70">
                        <p>
                            Mais do que café, oferecemos momentos especiais
                            em cada xícara.
                        </p>
                    </div>

                    <div className="mt-10 flex gap-5">

                        <button
                            type="button"
                            className="cursor-pointer rounded-3xl bg-[#905a34] px-15 py-4 font-semibold text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#cd9e6a] hover:text-amber-900"
                        >
                            Ver cardápio
                        </button>

                        <button
                            type="button"
                            className="cursor-pointer rounded-full border border-[#905a34] px-15 text-amber-50 transition-all duration-500 ease-in-out hover:scale-105 hover:bg-amber-50 hover:text-amber-900"
                        >
                            Conheça nossa história
                        </button>

                    </div>
                </div>
            </section>

            {/* DIFERENCIAIS DA CAFETERIA */}
            <section className="flex min-h-[12vh] w-full items-center bg-[#1c1510] py-6 text-white">

                <div className="mx-auto flex w-full  items-center justify-between gap-8 px-20">

                    {/* Diferencial 1 */}
                    <div className="flex items-center gap-4 border-r border-white/10 pr-80">

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
                    <div className="flex items-center gap-4 border-r border-white/10 pr-80">

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
                    <div className="flex items-center gap-4">

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
            <section className="w-full bg-white px-20 py-20 text-[#1c1510]">

                <div className="mx-auto flex items-center justify-between gap-6">

                    <div>
                        <h2 className="text-4xl font-bold font-texto">
                            Nossos destaques
                        </h2>

                        <p className="mt-3 text-base text-[#9E9990]">
                            Experimente o que há de melhor no nosso cardápio.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="flex shrink-0 items-center gap-2 text-tex text-[#99664f]"
                    >
                        Ver cardápio
                        <IoMdArrowRoundForward size={18} />
                    </Link>

                </div>
                <div>
                    <Destaques />
                </div>
            </section>

        </div>
    );
}

export default Home;