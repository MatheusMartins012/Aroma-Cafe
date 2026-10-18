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
import cheeseCakeImg from '/img/cheesecake.jpeg'
import choqueMadameImg from '/img/choque-madame.jfif'
import CroissantImg from '/img/croissant.jfif'
import chocolatePainImg from '/img/pain-chocolat.jfif'
import sanduichePastramiImg from '/img/sanduiche-pastrami.jfif'
import tartateAbacateImg from '/img/tartane-abacate.jfif'
import tortaLimaoImg from '/img/torta-limao.jfif'
import AfagattoImg from '/img/afagato.jfif'
import chaEarlImg from '/img/cha-earl.jfif'
import chocolateQuenteImg from '/img/chocolate-quente.jfif'
import sodaItalianaImg from '/img/soda-italiana.jfif'
import sucoImg from '/img/suco-couveroxa.jpg'
import coldBew from '/img/cold-bew.jpg'
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

    {
        id: 11,
        nome: "Cheese Cake",
        description: "Combinação perfeita",
        preco: 32.99,
        priceFormatted: "R$ 32.99",
        categoria: "Doces",
        image: cheeseCakeImg
    },

    {
        id: 12,
        nome: "Choque Madame",
        description: "Combinação perfeita",
        preco: 14.99,
        priceFormatted: "R$ 14.99",
        categoria: "Salgados",
        image: choqueMadameImg
    },

    {
        id: 13,
        nome: "Croissant",
        description: "Combinação perfeita",
        preco: 9.99,
        priceFormatted: "R$ 9.99",
        categoria: "Salgados",
        image: CroissantImg
    },

    {
        id: 14,
        nome: "Chocolate Pain",
        description: "Combinação perfeita",
        preco: 10.99,
        priceFormatted: "R$ 10.99",
        categoria: "Salgados",
        image: chocolatePainImg
    },



    {
        id: 15,
        nome: "Sanduíche Pastrami",
        description: "Combinação perfeita",
        preco: 20.99,
        priceFormatted: "R$ 20.99",
        categoria: "Salgados",
        image: sanduichePastramiImg
    },

    {
        id: 16,
        nome: "Tartate de Abacate",
        description: "Combinação perfeita",
        preco: 25.99,
        priceFormatted: "R$ 25.99",
        categoria: "Doces",
        image: tartateAbacateImg
    },

    {
        id: 17,
        nome: "Torta de limão",
        description: "Combinação perfeita",
        preco: 17.99,
        priceFormatted: "R$ 17.99",
        categoria: "Doces",
        image: tortaLimaoImg
    },

    {
        id: 18,
        nome: "Afagatto",
        description: "Combinação perfeita",
        preco: 30.99,
        priceFormatted: "R$ 30.99",
        categoria: "Bebidas",
        image: AfagattoImg
    },

    {
        id: 19,
        nome: "Afagatto",
        description: "Combinação perfeita",
        preco: 30.99,
        priceFormatted: "R$ 30.99",
        categoria: "Bebidas",
        image: AfagattoImg
    },


    {
        id: 20,
        nome: "Chá Earl",
        description: "Combinação perfeita",
        preco: 8.99,
        priceFormatted: "R$ 8.99",
        categoria: "Bebidas",
        image: chaEarlImg
    },

    {
        id: 21,
        nome: "Cold bew",
        description: "Combinação perfeita",
        preco: 9.99,
        priceFormatted: "R$ 9.99",
        categoria: "Bebidas",
        image: coldBew
    },

    {
        id: 22,
        nome: "Chocolate Quente",
        description: "Combinação perfeita",
        preco: 12.99,
        priceFormatted: "R$ 12.99",
        categoria: "Bebidas",
        image: chocolateQuenteImg
    },

    {
        id: 23,
        nome: "Soda Italiana",
        description: "Combinação perfeita",
        preco: 14.99,
        priceFormatted: "R$ 14.99",
        categoria: "Bebidas",
        image: sodaItalianaImg
    },

    {
        id: 24,
        nome: "Suco Couve-roxa",
        description: "Combinação perfeita",
        preco: 5.99,
        priceFormatted: "R$ 5.99",
        categoria: "Bebidas",
        image: sucoImg
    },
];  