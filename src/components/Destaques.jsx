import { destaques } from '../data/destaques'; // Ajuste o caminho se necessário para onde está sua lógica

export function Destaques() {
  const { products, handleAddToCart } = destaques();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-full h-60 mb-4 overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rou nded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="font-bold text-stone-800 text-lg mb-1 px-5">
                {product.name}
              </h3>
              <p className="text-stone-500 text-sm mb-4 px-5">
                {product.description}
              </p>
            </div>

            <div>
              <div className="font-bold text-stone-900 text-lg mb-4 px-5">
                {product.price}
              </div>

              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#8C5A3C] hover:bg-[#73482F] text-white font-medium py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destaques;