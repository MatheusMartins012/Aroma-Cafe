import { useState } from 'react';

import espressoImg from '/img/Café-expresso-1.jpg';
import cappuccinoImg from '/img/capuccino.jpg';
import latteImg from '/img/latte.jpg';
import brownieImg from '/img/brownie.jpg'; 


export function destaques() {
    const [cart, setCart] = useState([]);

    const products = [
        {
            id: 1,
            name: "Café Espresso",
            nome: "Café Espresso",
            description: "Intenso e encorpado",
            price: "R$ 8,90",
            preco: 8.90,
            categoria: "Cafés",
            image: espressoImg
        },
        {
            id: 2,
            name: "Cappuccino",
            nome: "Cappuccino",
            description: "Cremoso e na medida",
            price: "R$ 12,90",
            preco: 12.90,
            categoria: "Cafés",
            image: cappuccinoImg
        },
        {
            id: 3,
            name: "Latte",
            nome: "Latte gelado",
            description: "Suave e delicioso",
            price: "R$ 14,90",
            preco: 14.90,
            categoria: "Bebidas",
            image: latteImg
        },
        {
            id: 4,
            name: "Brownie",
            nome: "Brownie",
            description: "A combinação perfeita",
            price: "R$ 12,90",
            preco: 12.90,
            categoria: "Doces",
            image: brownieImg
        },
    
    ];

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`Adicionado: ${product.name || product.nome}`);
    };

    return {
        products,
        cart,
        handleAddToCart,
    };
}