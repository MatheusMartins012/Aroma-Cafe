import { BsCalendarDate } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom'

function Sobre() {
    return (
        <div className="min-h-screen">

            <div className="relative w-full min-h-70 overflow-hidden">
                <img
                    src="/img/About-we.png"
                    alt="Equipe e ambiente do Aroma Café"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="flex flex-col relative z-10 text-white pt-12 pb-10 md:pt-18 px-6 sm:px-12 lg:px-20 gap-5">
                    <h1 className="text-4xl lg:text-5xl max-w-90 font-texto font-bold">Sobre nós!</h1>
                    <p className="text-white/70 text-base md:text-lg mt-2 max-w-90">Nossa hístoria é feita de boas pessoas, boas conversas e muito café.</p>
                </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row px-6 sm:px-12 lg:px-20 py-10 lg:py-16">

                <div className="lg:flex-1 flex flex-col lg:pt-10 gap-6 lg:gap-8">
                    <h2 className="text-3xl md:text-4xl font-texto font-bold">
                        Nossa história
                    </h2>

                    <p className="max-w-130 text-gray-500 leading-7">
                        Aroma Café nasceu de uma paixão por café e pelo
                        desejo de criar um espaço onde as pessoas pudessem
                        se conectar, relaxar e aproveitar bons momentos.
                    </p>

                    <p className="max-w-110 text-gray-500 leading-7">
                        Desde 2018, trabalhamos com grãos selecionados e
                        um cardápio especial, unindo sabor, qualidade e
                        um ambiente acolhedor.
                    </p>

                    <div>
                        <Link
                            to='/contato'
                            className="inline-block rounded-full bg-[#9a5b34] px-6 py-3 text-white
                            hover:bg-[#82492a] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">
                            Conheça nossa loja
                        </Link>
                    </div>
                </div>

                <div className="lg:flex-1">
                    <img
                        src="/img/aroma-cafe.png"
                        alt="Ambiente interno do Aroma Café"
                        className="h-64 sm:h-80 lg:h-110 w-full rounded-xl object-cover"
                    />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20 mx-6 sm:mx-12 lg:mx-20 py-10 mb-10 rounded-2xl bg-[#f5ede3]">
                <div className="flex gap-4 lg:gap-8 items-center">
                    <BsCalendarDate size={"35px"} className="shrink-0 text-[#9a5b34]" />
                    <div>
                        <h2 className="text-3xl">+10</h2>
                        <p className="text-sm text-black/50">anos de historia</p>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-8 items-center">
                    <MdProductionQuantityLimits size={"35px"} className="shrink-0 text-[#9a5b34]" />
                    <div>
                        <h2 className="text-3xl">+50</h2>
                        <p className="text-sm text-black/50">Produtos no cardário</p>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-8 items-center">
                    <IoMdHeartEmpty size={"35px"} className="shrink-0 text-[#9a5b34]" />
                    <div>
                        <h2 className="text-3xl">+1000</h2>
                        <p className="text-sm text-black/50">curtidas aplicadas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre