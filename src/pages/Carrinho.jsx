import { Link } from "react-router-dom";
import { PiCoffeeBold } from "react-icons/pi";
import { FiShoppingBag, FiArrowLeft, FiTrash2 } from "react-icons/fi";

import { useCarrinho } from "../context/CarrinhoContext";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function Carrinho() {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    valorTotal,
  } = useCarrinho();

  const valorEntrega = carrinho.length > 0 ? 5 : 0;
  const totalPedido = valorTotal + valorEntrega;

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a]">

      <section className="relative flex min-h-55 items-center overflow-hidden bg-[#21160f] px-5 py-12 sm:min-h-62.5 sm:px-10 lg:px-20">
        <img
          src="/img/About-we.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-linear-to from-[#17100b]/95 via-[#21160f]/75 to-[#21160f]/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-3 flex items-center gap-2 text-sm text-[#d6b99c]">
            <PiCoffeeBold size={20} />
            <span>Aroma Café</span>
            <span>/</span>
            <span className="text-white/70">Carrinho</span>
          </div>

          <h1 className="font-texto text-4xl font-semibold text-white sm:text-5xl">
            Carrinho
          </h1>

          <p className="mt-3 text-sm text-white/75 sm:text-base">
            Revise seus itens antes de finalizar.
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        {carrinho.length === 0 ? (

          <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-[#e8ded1] bg-white px-6 py-14 text-center shadow-sm sm:py-20">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5e9d7] text-[#915831]">
              <FiShoppingBag size={36} />
            </div>

            <h2 className="font-texto text-2xl font-semibold sm:text-3xl">
              Seu carrinho está vazio
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#77716b]">
              Que tal escolher seu café favorito e deixar seu dia mais
              especial?
            </p>

            <Link
              to="/cardapio"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#915831] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6f4328]"
            >
              <FiArrowLeft size={18} />
              Explorar cardápio
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-texto text-2xl font-semibold sm:text-3xl">
                  Seus produtos
                </h2>

                <p className="mt-2 text-sm text-[#77716b]">
                  {carrinho.reduce(
                    (total, item) => total + item.quantidade,
                    0
                  )}{" "}
                  item(ns) no seu carrinho
                </p>
              </div>

              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#915831] transition-colors hover:text-[#6f4328]"
              >
                <FiArrowLeft size={17} />
                Continuar comprando
              </Link>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_370px]">

              <div className="min-w-0 overflow-hidden rounded-2xl border border-[#e8ded1] bg-white shadow-sm">

                <div className="hidden grid-cols-[minmax(0,1fr)_130px_110px_36px] items-center gap-4 border-b border-[#eee5dc] bg-[#fcfaf7] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#77716b] md:grid">
                  <span>Produto</span>
                  <span className="text-center">Quantidade</span>
                  <span className="text-right">Subtotal</span>
                  <span />
                </div>

                <div className="divide-y divide-[#eee5dc]">
                  {carrinho.map((produto) => {
                    const nome =
                      produto.nome ?? produto.name ?? "Produto";

                    const preco = produto.precoUnitario ?? 0;

                    const imagem =
                      produto.image ?? produto.imagem ?? produto.img;

                    const subtotal = preco * produto.quantidade;

                    return (
                      <article
                        key={produto.id}
                        className="grid grid-cols-1 gap-4 p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_130px_110px_36px] md:items-center md:gap-4 md:px-6"
                      >

                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f5e9d7] sm:h-24 sm:w-24">
                            {imagem ? (
                              <img
                                src={imagem}
                                alt={nome}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <PiCoffeeBold
                                size={32}
                                className="text-[#915831]"
                              />
                            )}
                          </div>

                          <div className="min-w-0">
                            <h3 className="wrap-break-word font-semibold text-[#29211b]">
                              {nome}
                            </h3>

                            {produto.description && (
                              <p className="mt-1 line-clamp-2 text-sm text-[#77716b]">
                                {produto.description}
                              </p>
                            )}

                            <p className="mt-2 text-sm font-medium text-[#915831]">
                              {formatarPreco(preco)}
                            </p>

                            {/* Controles no celular */}
                            <div className="mt-3 flex items-center gap-3 md:hidden">
                              <span className="text-xs text-[#77716b]">
                                Quantidade:
                              </span>

                              <div className="inline-flex items-center rounded-full border border-[#e5d8c9]">
                                <button
                                  type="button"
                                  onClick={() =>
                                    diminuirQuantidade(produto.id)
                                  }
                                  aria-label={`Diminuir quantidade de ${nome}`}
                                  className="flex h-8 w-8 items-center justify-center text-lg transition-colors hover:bg-[#f5e9d7]"
                                >
                                  −
                                </button>

                                <span className="min-w-8 text-center text-sm font-medium">
                                  {produto.quantidade}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    aumentarQuantidade(produto.id)
                                  }
                                  aria-label={`Aumentar quantidade de ${nome}`}
                                  className="flex h-8 w-8 items-center justify-center text-lg transition-colors hover:bg-[#f5e9d7]"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="hidden justify-center md:flex">
                          <div className="inline-flex items-center rounded-full border border-[#e5d8c9]">
                            <button
                              type="button"
                              onClick={() =>
                                diminuirQuantidade(produto.id)
                              }
                              aria-label={`Diminuir quantidade de ${nome}`}
                              className="flex h-8 w-8 items-center justify-center text-lg transition-colors hover:bg-[#f5e9d7]"
                            >
                              −
                            </button>

                            <span className="min-w-8 text-center text-sm font-medium">
                              {produto.quantidade}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                aumentarQuantidade(produto.id)
                              }
                              aria-label={`Aumentar quantidade de ${nome}`}
                              className="flex h-8 w-8 items-center justify-center text-lg transition-colors hover:bg-[#f5e9d7]"
                            >
                              +
                            </button>
                          </div>
                        </div>


                        <div className="flex items-center justify-between gap-4 md:block md:text-right">
                          <span className="text-sm text-[#77716b] md:hidden">
                            Subtotal
                          </span>

                          <span className="font-semibold text-[#29211b]">
                            {formatarPreco(subtotal)}
                          </span>
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => removerProduto(produto.id)}
                            aria-label={`Remover ${nome} do carrinho`}
                            title="Remover produto"
                            className="flex h-9 w-9 items-center justify-center rounded-full text-[#8c8177] transition-colors hover:bg-red-50 hover:text-red-600"
                          >
                            <FiTrash2 size={17} />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>


              <aside className="rounded-2xl border border-[#e8ded1] bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
                <h2 className="font-texto text-2xl font-semibold">
                  Resumo do pedido
                </h2>

                <div className="mt-6 space-y-4 border-b border-[#eee5dc] pb-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#77716b]">
                      Subtotal dos produtos
                    </span>

                    <span className="font-medium">
                      {formatarPreco(valorTotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#77716b]">Entrega</span>

                    <span className="font-medium">
                      {valorEntrega === 0
                        ? "—"
                        : formatarPreco(valorEntrega)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 py-5">
                  <span className="text-base font-semibold">Total</span>

                  <span className="text-xl font-bold text-[#915831]">
                    {formatarPreco(totalPedido)}
                  </span>
                </div>

                <Link
                  to="/login"
                  className="w-full block text-center rounded-full bg-[#915831] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#6f4328]"
                >
                  Finalizar pedido
                </Link>

                <Link
                  to="/cardapio"
                  className="mt-3 block w-full rounded-full border border-[#d8c4af] px-5 py-3 text-center text-sm font-medium text-[#915831] transition-colors hover:bg-[#f8f1e8]"
                >
                  Continuar comprando
                </Link>

                <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8f5f0] p-3">
                  <PiCoffeeBold
                    size={22}
                    className="mt-0.5 shrink-0 text-[#915831]"
                  />

                  <p className="text-xs leading-5 text-[#77716b]">
                    Prepare-se para aproveitar seu momento especial com o
                    Aroma Café.
                  </p>
                </div>
              </aside>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Carrinho;