import { useState } from "react";
// Importe diretamente do seu arquivo de dados (ajuste o caminho se necessário)
import { produtosCardapio, CATEGORIAS } from "../data/menuItems";

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  
  // Estado opcional para o carrinho dentro do cardápio, caso queira gerenciar aqui
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`Adicionado: ${product.nome || product.name}`);
  };

  const produtosVisiveis =
    categoriaAtiva === "Todos"
      ? produtosCardapio
      : produtosCardapio.filter((p) => p.categoria === categoriaAtiva);

  return (
    <section className="mx-auto max-w-7xl rounded-2xl bg-[#faf6f1] p-6 shadow-lg">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Categorias">
        {CATEGORIAS.map((categoria) => {
          const ativa = categoria === categoriaAtiva;
          return (
            <button
              key={categoria}
              role="tab"
              aria-selected={ativa}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`rounded-xl px-6 py-2 text-sm font-medium transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a5b34] cursor-pointer
                ${
                  ativa
                    ? "bg-[#9a5b34] text-white"
                    : "bg-[#f1e8de] text-[#3b2a1e] hover:bg-[#e8dccd]"
                }`}
            >
              {categoria}
            </button>
          );
        })}
      </div>

      <hr className="my-6 border-[#eadfd2]" />

      <h2 className="font-serif text-2xl font-semibold text-[#2b1d14]">
        {categoriaAtiva === "Todos" ? "Cardápio completo" : categoriaAtiva}
      </h2>
      <p className="mt-1 text-sm text-[#6f5a4a]">
        {produtosVisiveis.length}{" "}
        {produtosVisiveis.length === 1 ? "opção disponível" : "opções disponíveis"}
      </p>

      {/* Grade de produtos */}
      <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        {produtosVisiveis.map((product) => (
          <li
            key={product.id}
            className="flex flex-col rounded-xl border border-[#eadfd2] bg-white p-2 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.nome || product.name}
              className="aspect-4/3 w-full rounded-lg object-cover"
            />
            <h3 className="mt-3 px-1 text-sm font-semibold text-[#2b1d14]">
              {product.nome || product.name}
            </h3>
            <p className="px-1 text-xs font-medium text-[#6f5a4a]">
              {/* Se o preço no array for número, usa a função. Se for string ("R$ 8,90"), exibe direto */}
              {typeof product.preco === 'number' 
                ? formatarPreco(product.preco) 
                : product.price}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 rounded-full bg-[#9a5b34] py-2 text-xs font-medium text-white
                transition-colors hover:bg-[#82492a]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a5b34] focus-visible:ring-offset-2"
            >
              Adicionar
            </button>
          </li>
        ))}
      </ul>

      {produtosVisiveis.length === 0 && (
        <p className="mt-6 text-sm text-[#6f5a4a]">
          Nenhum item nesta categoria ainda.
        </p>
      )}
    </section>
  );
}