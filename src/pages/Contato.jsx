import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
function Contato() {
    return (
        <div className="min-h-screen">
            <div className="relative w-full h-50 overflow-hidden ">
                <img
                    src="/img/contato.png"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className=" flex flex-col relative z-10 text-white pt-12 pl-20 gap-2">
                    <h1 className="text-5xl w-90 font-texto font-bold">Contato</h1>
                    <p className=" text-white/70 text-lg mt-2 w-90">Será um prazer te receber!</p>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-1 flex-col">
                    <div>
                        <h1 className="text-4xl font-medium font-texto">Fale conosco</h1>
                        <p>Tire suas dúvidas, envie sugestões ou venha nos fazer uma visita, estamos sempre disponíveis.</p>
                    </div>

                    <div className="flex">
                        <BsFillTelephoneFill className="bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>88 994372201</p>
                    </div>

                    <div className="flex">
                        <MdOutlineMailOutline className="bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>contato@aromacafe.com.br</p>
                    </div>

                    <div className="flex">
                        <IoLocationOutline className="bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>Av quixada, 1000 - Forquilha/CE</p>
                    </div>

                    <div className="flex">
                        <FaRegClock className="bg-[#402a1a] text-white size-10 p-2 rounded-full" />
                        <p>Seg a sex: 06h ás 22h Sáb e dom:08h ás 21h</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contato
