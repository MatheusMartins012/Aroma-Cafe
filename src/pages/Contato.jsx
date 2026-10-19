
function Contato() {
    return (
        <div className="min-h-screen">
            <div className="relative w-full h-70 overflow-hidden ">
                <img
                    src="/img/contato.png"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className=" flex flex-col relative z-10 text-white pt-18 pl-20 gap-5">
                    <h1 className="text-5xl w-90 font-texto font-bold">Sobre nós!</h1>
                    <p className=" text-white/70 text-lg mt-2 w-90">Nossa hístoria é feita de boas pessoas, boas conversas e muito café.</p>
                </div>
            </div>
        </div>
    )
}

export default Contato
