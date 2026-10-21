
import { Link } from "react-router-dom";
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";
import { useCarrinho } from "../context/CarrinhoContext";

const moeda = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function CarrinhoLateral() {
  const {
    carrinho,
    quantidadeTotal,
    valorTotal,
    painelAberto,
    setPainelAberto,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
  } = useCarrinho();

  if (!painelAberto) return null;

  return (
    <>

      <aside
        role="dialog"
        aria-label="Resumo do carrinho"
        className="fixed right-0 top-0 z-100 flex h-dvh
      w-97.5 max-w-full flex-col border-l border-[#e8dccd]
    bg-[#fffdf9] text-[#2b1d14] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b
          border-[#eadfd2] bg-[#21150f] px-5 py-4 text-white">
          <div>
            <p className="font-serif text-xl">Seu carrinho</p>
            <p className="mt-1 text-xs text-white/65">
              {quantidadeTotal}{" "}
              {quantidadeTotal === 1 ? "item" : "itens"} selecionados
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPainelAberto(false)}
            aria-label="Fechar"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <IoCloseOutline size={26} />
          </button>
        </div>

    
        <div className="border-b border-[#eadfd2] bg-[#f5ede3]
          px-5 py-3 text-sm text-[#6f4e37]">
          ✓ Produto adicionado ao seu pedido
        </div>

    
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {carrinho.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg">
                Seu carrinho está vazio
              </p>
              <p className="mt-2 text-sm text-[#7c6a5b]">
                Que tal escolher um café especial?
              </p>
            </div>
          ) : (
            carrinho.map((produto) => {
              const nome = produto.nome || produto.name;
              const imagem = produto.image;
              const preco = produto.precoUnitario;

              return (
                <div
                  key={produto.id}
                  className="flex gap-3 border-b border-[#eee5db] pb-4"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden
                    rounded-xl bg-[#f5ede3]">
                    {imagem ? (
                      <img
                        src={imagem}
                        alt={nome}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center
                        justify-center text-2xl">
                        ☕
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-semibold">
                      {nome}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#8C5A3C]">
                      {moeda(preco * produto.quantidade)}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full
                        border border-[#dfcdbb]">
                        <button
                          type="button"
                          aria-label={`Diminuir quantidade de ${nome}`}
                          onClick={() => diminuirQuantidade(produto.id)}
                          className="px-3 py-1 hover:bg-[#f5ede3] cursor-pointer"
                        >
                          −
                        </button>

                        <span className="min-w-7 text-center text-sm">
                          {produto.quantidade}
                        </span>

                        <button
                          type="button"
                          aria-label={`Aumentar quantidade de ${nome}`}
                          onClick={() => aumentarQuantidade(produto.id)}
                          className="px-3 py-1 hover:bg-[#f5ede3] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removerProduto(produto.id)}
                        aria-label={`Remover ${nome}`}
                        className="rounded-lg p-2 text-[#8a7462]
                          transition hover:bg-red-50 hover:text-red-600 cursor-pointer"
                      >
                        <IoTrashOutline size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

       
        <div className="border-t border-[#eadfd2] bg-white p-5">
          <div className="mb-2 flex justify-between text-sm text-[#6f5a4a]">
            <span>Quantidade de itens</span>
            <span>{quantidadeTotal}</span>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold">Subtotal</span>
            <span className="font-serif text-xl font-bold text-[#8C5A3C]">
              {moeda(valorTotal)}
            </span>
          </div>

          <Link
            to="/carrinho"
            onClick={() => setPainelAberto(false)}
            className="block rounded-full bg-[#8C5A3C] px-4 py-3
              text-center font-semibold text-white transition
              hover:bg-[#73482F]"
          >
            Ir para o carrinho
          </Link>

          <button
            type="button"
            onClick={() => setPainelAberto(false)}
            className="mt-2 w-full rounded-full py-2 text-sm
              text-[#6f5a4a] transition hover:bg-[#f5ede3] cursor-pointer"
          >
            Continuar comprando
          </button>
        </div>
      </aside>
    </>
  );
}
