
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiCoffeeBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

import { useCarrinho } from "../context/CarrinhoContext";
import Pesquisa from "./Pesquisa.jsx";

function Header() {
  const location = useLocation();
  const { quantidadeTotal } = useCarrinho();
  const [pesquisaAberta, setPesquisaAberta] = useState(false);

  const [menuAberto, setMenuAberto] = useState(false);

  const isHome = location.pathname === "/";

  const linkClass =
    "text-white/70 no-underline hover:underline decoration-[#6F4E37] decoration-2 underline-offset-8 transition-colors duration-300";

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header
      className={`w-full px-4 py-4 transition-colors duration-300 ${isHome
        ? "absolute top-0 left-0 z-50 bg-transparent text-white"
        : "relative z-50 bg-[#141414] text-white shadow-md"
        } sm:px-6 lg:px-10 xl:px-16 2xl:px-20`}
    >
      <div className="flex min-w-0 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          to="/"
          onClick={fecharMenu}
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <PiCoffeeBold
            className="shrink-0 text-[#B08968]"
            size={30}
          />

          <span className="whitespace-nowrap font-texto text-xl text-white sm:text-2xl">
            aroma café
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          <Link to="/" className={linkClass}>
            Início
          </Link>

          <Link to="/cardapio" className={linkClass}>
            Cardápio
          </Link>

          <Link to="/sobre" className={linkClass}>
            Sobre nós
          </Link>

          <Link to="/contato" className={linkClass}>
            Contato
          </Link>
        </nav>

        {/* Ícones e botão de pedido */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setPesquisaAberta(true)}
            aria-label="Abrir pesquisa"
            className="hidden sm:inline-flex"
          >
            <CiSearch
              size={24}
              className="cursor-pointer transition-colors hover:text-[#B08968]"
            />
          </button>

          {/* Carrinho */}
          <Link
            to="/carrinho"
            aria-label={`Carrinho com ${quantidadeTotal} itens`}
            className="relative inline-flex items-center"
          >
            <IoCartOutline
              size={27}
              className="transition-colors hover:text-[#B08968]"
            />

            {quantidadeTotal > 0 && (
              <span
                className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#B08968] px-1 text-[11px] font-bold text-white ring-2 ring-[#141414]"
              >
                {quantidadeTotal > 99 ? "99+" : quantidadeTotal}
              </span>
            )}
          </Link>

          {/* Botão de pedido: oculto em telas muito estreitas */}
          <Link
            to="/cardapio"
            className="hidden whitespace-nowrap rounded-full bg-[#915831] px-4 py-2 text-sm text-white transition-colors hover:bg-[#7a4928] sm:inline-flex lg:px-5"
          >
            Faça seu pedido
          </Link>

          {/* Menu hambúrguer para telas menores */}
          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            className="inline-flex items-center justify-center rounded-md p-1 transition-colors hover:text-[#B08968] lg:hidden"
          >
            {menuAberto ? (
              <FiX size={27} />
            ) : (
              <FiMenu size={27} />
            )}
          </button>
        </div>
      </div>

      {/* Menu aberto em telas menores */}
      {menuAberto && (
        <nav className="absolute left-0 top-full flex w-full flex-col gap-1 border-t border-white/10 bg-[#141414] px-5 py-4 shadow-xl lg:hidden">
          <Link
            to="/"
            onClick={fecharMenu}
            className="rounded-md px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-[#B08968]"
          >
            Início
          </Link>

          <Link
            to="/cardapio"
            onClick={fecharMenu}
            className="rounded-md px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-[#B08968]"
          >
            Cardápio
          </Link>

          <Link
            to="/sobre"
            onClick={fecharMenu}
            className="rounded-md px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-[#B08968]"
          >
            Sobre nós
          </Link>

          <Link
            to="/contato"
            onClick={fecharMenu}
            className="rounded-md px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-[#B08968]"
          >
            Contato
          </Link>

          <Link
            to="/cardapio"
            onClick={fecharMenu}
            className="mt-2 rounded-full bg-[#915831] px-5 py-3 text-center text-white transition-colors hover:bg-[#7a4928]"
          >
            Faça seu pedido
          </Link>
        </nav>
      )}
      <Pesquisa
        aberta={pesquisaAberta}
        fechar={() => setPesquisaAberta(false)}
      />
    </header>
  );
}

export default Header;