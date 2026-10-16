function AppMobile() {
  return (
    <div className="w-full px-20 pb-20">

      <div className="relative w-full h-85 rounded-xl overflow-hidden ">

        {/* A imagem de fundo cobrindo todo este bloco interno */}
        <img
          src="/img/app.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className=" flex flex-col relative z-10 text-white pt-10 pl-20 gap-5">
          <h1 className="text-4xl w-90 font-texto">Seu café favorito, no seu tempo!</h1>
          <p className="text-sm mt-2 w-90">Peça pelo nosso app e retire na loja <br /> ou receba em casa.</p>
          <div>
            <button className="cursor-pointer rounded-2xl bg-[#905a34] px-10 py-3 text-sm  text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#cd9e6a] hover:text-amber-900">ver opções</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AppMobile