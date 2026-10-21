import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

import Localizacao from "../components/Localizacao";
function Contato() {
    return (
        <div className="min-h-screen bg-[#f9f6f2]">
            <div className="relative w-full min-h-50 overflow-hidden">
                <img
                    src="/img/contato.png"
                    alt="Fachada e ambiente do Aroma Café"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="flex flex-col relative z-10 text-white pt-10 pb-8 md:pt-15 px-6 sm:px-12 lg:px-20 gap-2">
                    <h1 className="text-4xl lg:text-5xl max-w-90 font-texto font-bold">Contato</h1>
                    <p className="text-white/70 text-base md:text-lg mt-2 max-w-90">Será um prazer te receber!</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row py-10 px-6 sm:px-12 lg:py-20 lg:px-20 gap-10 lg:gap-15">
                <div className="flex flex-1 flex-col w-full gap-5">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl md:text-4xl font-medium">Fale conosco</h1>
                        <p className="text-black/70 mb-6">Tire suas dúvidas, envie sugestões ou venha <br className="hidden md:block" /> nos fazer uma visita, estamos sempre disponíveis.</p>
                    </div>

                    <div className="flex gap-4 sm:gap-9 items-center">
                        <BsFillTelephoneFill className="shrink-0 bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>88 994372201</p>
                    </div>

                    <div className="flex gap-4 sm:gap-9 items-center">
                        <MdOutlineMailOutline className="shrink-0 bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p className="break-all">contato@aromacafe.com.br</p>
                    </div>

                    <div className="flex gap-4 sm:gap-9 items-center">
                        <IoLocationOutline className="shrink-0 bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>Av quixada, 1000 - Forquilha/CE</p>
                    </div>

                    <div className="flex gap-4 sm:gap-9 items-center">
                        <FaRegClock className="shrink-0 bg-[#94502f] text-white size-10 p-2 rounded-full" />
                        <p>Seg a sex: 06h ás 22h <br />Sáb e dom:08h ás 21h</p>
                    </div>

                </div>
                <div className="flex-1 flex-col">
                    <h1 className="mb-5 font-bold text-2xl md:text-3xl">Envie sua mensagem</h1>
                    <form>
                        <div className="flex flex-col gap-5">
                            <input type="text" placeholder="Nome" required className="w-full border border-gray-300 shadow-sm p-3 rounded-2xl focus:outline-none " />
                            <input type="email" placeholder="Email" required className="w-full border border-gray-300 shadow-sm p-3 rounded-2xl focus:outline-none" />
                            <textarea placeholder="Mensagem" required rows={5} className="w-full resize-none p-3 border-2 border-gray-300/50 rounded-2xl
                            focus:outline-none" />
                            <button className="border p-3 rounded-2xl cursor-pointer bg-[#905833] text-white">Enviar mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Localizacao />
            </div>
        </div>
    )
}

export default Contato