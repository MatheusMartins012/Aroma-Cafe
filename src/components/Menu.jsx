
import { useState } from "react";
import { produtosCardapio, CATEGORIAS } from "../data/menuItems";
import { useCarrinho } from "../context/CarrinhoContext";

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function Menu() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const { adicionarAoCarrinho } = useCarrinho();

  function handleAddToCart(product) {
    adicionarAoCarrinho(product);
  }

  const produtosVisiveis =
    categoriaAtiva === "Todos"
      ? produtosCardapio
      : produtosCardapio.filter(
          (produto) => produto.categoria === categoriaAtiva
        );

  return (
    <section className="mx-auto max-w-7xl rounded-2xl bg-[#faf6f1] p-6 shadow-lg">
      {/* Categorias */}
      <div
        className="flex flex-wrap gap-3"
        role="tablist"
        aria-label="Categorias"
      >
        {CATEGORIAS.map((categoria) => {
          const ativa = categoria === categoriaAtiva;

          return (
            <button
              key={categoria}
              type="button"
              role="tab"
              aria-selected={ativa}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`cursor-pointer rounded-xl px-6 py-2 text-sm font-medium
                transition-colors focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[#9a5b34]
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

      {/* Título */}
      <h2 className="font-serif text-2xl font-semibold text-[#2b1d14]">
        {categoriaAtiva === "Todos"
          ? "Cardápio completo"
          : categoriaAtiva}
      </h2>

      <p className="mt-1 text-sm text-[#6f5a4a]">
        {produtosVisiveis.length}{" "}
        {produtosVisiveis.length === 1
          ? "opção disponível"
          : "opções disponíveis"}
      </p>

      {/* Produtos */}
      <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        {produtosVisiveis.map((product) => {
          const nomeProduto = product.nome || product.name;

          const precoProduto =
            typeof product.preco === "number"
              ? formatarPreco(product.preco)
              : product.preco ?? product.price;

          return (
            <li
              key={product.id}
              className="flex flex-col rounded-xl border border-[#eadfd2]
                bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={product.image}
                alt={nomeProduto}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />

              <h3 className="mt-3 px-1 text-sm font-semibold text-[#2b1d14]">
                {nomeProduto}
              </h3>

              <p className="px-1 text-xs font-medium text-[#6f5a4a]">
                {precoProduto}
              </p>

              {/* Adicionar ao carrinho */}
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="mt-3 cursor-pointer rounded-full bg-[#9a5b34]
                  py-2 text-xs font-medium text-white transition-colors
                  duration-300 hover:bg-[#82492a]
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#9a5b34] focus-visible:ring-offset-2"
              >
                Adicionar
              </button>
            </li>
          );
        })}
      </ul>

      {produtosVisiveis.length === 0 && (
        <p className="mt-6 text-sm text-[#6f5a4a]">
          Nenhum item nesta categoria ainda.
        </p>
      )}
    </section>
  );
}
