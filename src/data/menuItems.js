// src/data/cardapioData.js
import espressoImg from '/img/Café-expresso-1.jpg';
import cappuccinoImg from '/img/capuccino.jpg';
import latteImg from '/img/latte.jpg';
import brownieImg from '/img/brownie.jpg';
export const CATEGORIAS = ["Todos", "Cafés", "Doces", "Salgados", "Bebidas"];
export const produtosCardapio = [
    {
        id: 1,
        nome: "Café Espresso",
        description: "Intenso e encorpado",
        preco: 8.90,
        priceFormatted: "R$ 8,90",
        categoria: "Cafés",
        image: espressoImg
    },
    {
        id: 2,
        nome: "Cappuccino",
        description: "Cremoso e na medida",
        preco: 12.90,
        priceFormatted: "R$ 12,90",
        categoria: "Cafés",
        image: cappuccinoImg
    },
    {
        id: 3,
        nome: "Latte Gelado",
        description: "Suave e delicioso",
        preco: 14.90,
        priceFormatted: "R$ 14,90",
        categoria: "Bebidas",
        image: latteImg
    },
    {
        id: 4,
        nome: "Brownie",
        description: "A combinação perfeita",
        preco: 12.90,
        priceFormatted: "R$ 12,90",
        categoria: "Doces",
        image: brownieImg
    },
    {
        id: 5,
        nome: "Pão de Queijo Recheado",
        description: "Quentinho com requeijão",
        preco: 7.50,
        priceFormatted: "R$ 7,50",
        categoria: "Salgados",
    }
];