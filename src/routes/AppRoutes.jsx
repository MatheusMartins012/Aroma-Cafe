
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CarrinhoLateral from "../components/CarrinhoLateral";

import Home from "../pages/Home";
import Cardapio from "../pages/Cardapio";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Carrinho from "../pages/Carrinho";
import Login from "../pages/Login";

import { CarrinhoProvider, useCarrinho } from "../context/CarrinhoContext";

function Layout() {
  const { painelAberto } = useCarrinho();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
  
      <div
        className={`origin-top-left transition-transform duration-300 ease-in-out ${
          painelAberto
            ? "mr-97.5 scale-[0.94]"
            : "mr-0 scale-100"
        }`}
      >
        <Header />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>

  
      <CarrinhoLateral />
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Layout />
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
