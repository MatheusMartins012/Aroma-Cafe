// src/data/cardapioData.js
import espressoImg from '/img/Café-expresso-1.jpg';
import cappuccinoImg from '/img/capuccino.jpg';
import latteImg from '/img/latte.jpg';
import brownieImg from '/img/brownie.jpg';
import paoQuejoImg from '/img/pao-queijo.jfif'
import cappuccinoItalianoImg from '/img/capuccino-italiano.jfif'
import matchaLatteImg from '/img/matcha-latte.jfif'
import mochaImg from '/img/mocha.jpg'
import boloChocolateImg from '/img/bolo-chocolate.jfif'
import boloRedImg from '/img/bolo-red.jfif'
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
        image: paoQuejoImg
    },

    {
        id: 6,
        nome: "Cappuccino Italiano",
        description: "Combinação perfeita",
        preco: 10.50,
        priceFormatted: "R$ 10,50",
        categoria: "Cafés",
        image: cappuccinoItalianoImg
    },

    {
        id: 7,
        nome: "Matcha Latte",
        description: "Combinação perfeita",
        preco: 15.00,
        priceFormatted: "R$ 15.00",
        categoria: "Cafés",
        image: matchaLatteImg
    },

    {
        id: 8,
        nome: "Mocha",
        description: "Combinação perfeita",
        preco: 17.50,
        priceFormatted: "R$ 17.50",
        categoria: "Cafés",
        image: mochaImg
    },

    {
        id: 9,
        nome: "Bolo de chocolate",
        description: "Combinação perfeita",
        preco: 7.00,
        priceFormatted: "R$ 7.00",
        categoria: "Doces",
        image: boloChocolateImg
    },

    {
        id: 10,
        nome: "Bolo red",
        description: "Combinação perfeita",
        preco: 7.50,
        priceFormatted: "R$ 7.50",
        categoria: "Doces",
        image: boloRedImg
    },

];