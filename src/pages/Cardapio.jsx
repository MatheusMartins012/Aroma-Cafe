import Menu from '../components/Menu'
function Cardapio() {
    return (
        <div className="min-h-screen">

            <div className="relative w-full h-60 overflow-hidden ">

                {/* A imagem de fundo cobrindo todo este bloco interno */}
                <img
                    src="/img/app.png"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className=" flex flex-col relative z-10 text-white pt-18 pl-20 gap-5">
                    <h1 className="text-5xl w-90 font-texto font-bold">Cardápio!</h1>
                    <p className=" text-white/70 text-sm mt-2 w-90">Nossos produtos são preparados com ingredientes selecionados e muito carinho.</p>

                </div>

            </div>

    
        </div>
    )
}

export default Cardapio