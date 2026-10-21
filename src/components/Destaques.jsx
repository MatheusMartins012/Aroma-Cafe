
import { destaques } from "../data/destaques";
import { useCarrinho } from "../context/CarrinhoContext";

export function Destaques() {
  const { products } = destaques();

  const { adicionarAoCarrinho } = useCarrinho();

  function handleAddToCart(product) {
    adicionarAoCarrinho(product);
  }

  return (
    <div className="mx-auto max-w-7xl py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const nomeProduto = product.name || product.nome;

          const precoProduto =
            product.price ??
            (typeof product.preco === "number"
              ? product.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : product.preco);

          return (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-2xl
                border border-stone-100 bg-white shadow-sm
                transition-shadow hover:shadow-md"
            >
              <div>
                {/* Imagem */}
                <div className="mb-4 h-60 w-full overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={nomeProduto}
                    className="h-full w-full rounded-xl object-cover
                      transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Nome e descrição */}
                <h3 className="mb-1 px-5 text-lg font-bold text-stone-800">
                  {nomeProduto}
                </h3>

                <p className="mb-4 px-5 text-sm text-stone-500">
                  {product.description}
                </p>
              </div>

              <div>
                {/* Preço */}
                <div className="mb-4 px-5 text-lg font-bold text-stone-900">
                  {precoProduto}
                </div>

                {/* Adicionar ao carrinho */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="w-full cursor-pointer rounded-xl bg-[#8C5A3C]
                    px-4 py-2.5 font-medium text-white
                    transition-colors duration-300 hover:bg-[#73482F]
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-[#8C5A3C] focus-visible:ring-offset-2"
                >
                  Adicionar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Destaques;
