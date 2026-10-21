
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiX, FiArrowRight } from "react-icons/fi";

import { produtosCardapio } from "../data/menuItems";
import { destaques } from "../data/destaques";

function Pesquisa({ aberta, fechar }) {
  const [termo, setTermo] = useState("");
  const navigate = useNavigate();

  const produtosDestaque = destaques().products ?? [];

  const produtos = [
    ...produtosCardapio,
    ...produtosDestaque,
  ].filter(
    (produto, indice, lista) =>
      lista.findIndex((item) => item.id === produto.id) === indice
  );

  const paginas = [
    { nome: "Início", caminho: "/" },
    { nome: "Cardápio", caminho: "/cardapio" },
    { nome: "Sobre nós", caminho: "/sobre" },
    { nome: "Contato", caminho: "/contato" },
    { nome: "Carrinho", caminho: "/carrinho" },
  ];

  const normalizar = (texto) =>
    String(texto ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const consulta = normalizar(termo);

  const resultadosProdutos = consulta
    ? produtos
        .filter((produto) => {
          const nome = produto.nome ?? produto.name ?? "";
          const descricao = produto.description ?? produto.descricao ?? "";

          return normalizar(`${nome} ${descricao}`).includes(consulta);
        })
        .slice(0, 5)
    : [];

  const resultadosPaginas = consulta
    ? paginas.filter((pagina) =>
        normalizar(pagina.nome).includes(consulta)
      )
    : [];

  function abrirResultado(caminho) {
    navigate(caminho);
    setTermo("");
    fechar();
  }

  useEffect(() => {
    if (!aberta) return;

    function lidarComTecla(evento) {
      if (evento.key === "Escape") {
        fechar();
      }
    }

    window.addEventListener("keydown", lidarComTecla);

    return () => {
      window.removeEventListener("keydown", lidarComTecla);
    };
  }, [aberta, fechar]);

  useEffect(() => {
    if (aberta) {
      setTermo("");
    }
  }, [aberta]);

  if (!aberta) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm sm:pt-28"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) fechar();
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#e8dccd] bg-[#fffdf9] shadow-2xl">
        {/* Campo de pesquisa */}
        <form
          onSubmit={(evento) => {
            evento.preventDefault();

            if (!consulta) return;

            if (resultadosProdutos.length > 0) {
              abrirResultado("/cardapio");
              return;
            }

            if (resultadosPaginas.length > 0) {
              abrirResultado(resultadosPaginas[0].caminho);
            }
          }}
          className="flex items-center gap-3 border-b border-[#eee5dc] px-4 py-4 sm:px-6"
        >
          <CiSearch size={27} className="shrink-0 text-[#915831]" />

          <input
            autoFocus
            type="search"
            value={termo}
            onChange={(evento) => setTermo(evento.target.value)}
            placeholder="O que você está procurando?"
            className="min-w-0 flex-1 bg-transparent text-[#29211b] outline-none placeholder:text-[#a59a90]"
          />

          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar pesquisa"
            className="rounded-full p-2 text-[#77716b] transition-colors hover:bg-[#f5e9d7] hover:text-[#915831]"
          >
            <FiX size={21} />
          </button>
        </form>

        <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6">
          {!consulta ? (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9a7b60]">
                Sugestões de pesquisa
              </p>

              <div className="flex flex-wrap gap-2">
                {["Café", "Cappuccino", "Brownie", "Cardápio"].map(
                  (sugestao) => (
                    <button
                      key={sugestao}
                      type="button"
                      onClick={() => setTermo(sugestao)}
                      className="rounded-full border border-[#e5d8c9] px-4 py-2 text-sm text-[#6f4e37] transition-colors hover:border-[#915831] hover:bg-[#f5e9d7]"
                    >
                      {sugestao}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Resultados de produtos */}
              <section>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9a7b60]">
                  Produtos
                </h2>

                {resultadosProdutos.length > 0 ? (
                  <div className="space-y-1">
                    {resultadosProdutos.map((produto, indice) => {
                      const nome =
                        produto.nome ?? produto.name ?? "Produto";

                      const preco = produto.preco ?? produto.price;

                      const imagem =
                        produto.image ?? produto.imagem ?? produto.img;

                      return (
                        <button
                          key={`${produto.id ?? nome}-${indice}`}
                          type="button"
                          onClick={() => abrirResultado("/cardapio")}
                          className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-[#f5e9d7]"
                        >
                          {imagem ? (
                            <img
                              src={imagem}
                              alt=""
                              className="h-12 w-12 shrink-0 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f5e9d7] text-[#915831]">
                              <CiSearch size={23} />
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-[#29211b]">
                              {nome}
                            </p>

                            {preco != null && (
                              <p className="mt-1 text-sm text-[#915831]">
                                {typeof preco === "number"
                                  ? preco.toLocaleString("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                    })
                                  : preco}
                              </p>
                            )}
                          </div>

                          <FiArrowRight
                            size={18}
                            className="shrink-0 text-[#9a7b60]"
                          />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-[#77716b]">
                    Nenhum produto encontrado.
                  </p>
                )}
              </section>

              {/* Resultados de páginas */}
              <section>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9a7b60]">
                  Páginas
                </h2>

                {resultadosPaginas.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {resultadosPaginas.map((pagina) => (
                      <button
                        key={pagina.caminho}
                        type="button"
                        onClick={() => abrirResultado(pagina.caminho)}
                        className="rounded-full border border-[#e5d8c9] px-4 py-2 text-sm text-[#6f4e37] transition-colors hover:bg-[#f5e9d7]"
                      >
                        {pagina.nome}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#77716b]">
                    Nenhuma página encontrada.
                  </p>
                )}
              </section>
            </div>
          )}
        </div>

        <div className="border-t border-[#eee5dc] bg-[#fcfaf7] px-5 py-3">
          <p className="text-xs text-[#8b8076]">
            Aroma Café · Encontre seu próximo favorito.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
