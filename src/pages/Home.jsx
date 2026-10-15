function Home() {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            <img
                src="/img/home.jfif"
                alt="Café com arte na espuma"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-20 text-white bg-black/40 p-4">

                <div>
                    <h2 className="text-[20px] text-[#cd9e6a] tracking-widest">
                        Sabores que inspiram
                    </h2>
                </div>

                <div className="mt-5 font-bold">
                    {/* Adicionado text-justify e text-justify-last */}
                    <h1 className="text-7xl max-w-200 leading-[0.9] text-justify text-justify-last font-texto">
                        O melhor café <span className="block text-[#cd9e6a]">para o seu dia</span>
                    </h1>
                </div>

                <div className="mt-7 text-[20px] max-w-110 text-white/70">
                    <p>
                        Mais do que café, oferecemos momentos especiais em cada xícara.
                    </p>
                </div>

                <div className="mt-10">
                    <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                        Fazer um pedido
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home