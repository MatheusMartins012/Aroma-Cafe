
import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

function obterPreco(produto) {
  const valor = produto.preco ?? produto.price ?? 0;

  if (typeof valor === "number") {
    return valor;
  }

  // Converte valores como "R$ 12,90" em números
  const numero = Number(
    String(valor)
      .replace(/[^\d,.-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );

  return Number.isFinite(numero) ? numero : 0;
}

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [painelAberto, setPainelAberto] = useState(false);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => {
      const existente = atual.find((item) => item.id === produto.id);

      if (existente) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atual,
        {
          ...produto,
          quantidade: 1,
          precoUnitario: obterPreco(produto),
        },
      ];
    });

    setPainelAberto(true);
  }

  function aumentarQuantidade(id) {
    setCarrinho((atual) =>
      atual.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function diminuirQuantidade(id) {
    setCarrinho((atual) =>
      atual
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerProduto(id) {
    setCarrinho((atual) =>
      atual.filter((item) => item.id !== id)
    );
  }

  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = carrinho.reduce(
    (total, item) => total + item.precoUnitario * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        quantidadeTotal,
        valorTotal,
        painelAberto,
        setPainelAberto,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);

  if (!contexto) {
    throw new Error(
      "useCarrinho deve ser usado dentro de CarrinhoProvider."
    );
  }

  return contexto;
}
