import { useState } from 'react';

// Correção: remover o '/public' do início, pois o Vite já enxerga a pasta public automaticamente
import espressoImg from '/img/Café-expresso-1.jpg';
import cappuccinoImg from '/img/capuccino.jpg';
import latteImg from '/img/latte.jpg';
import brownieImg from '/img/brownie.jpg'; // Corrigido de brownieImgImg para brownieImg

export function destaques() {
    const [cart, setCart] = useState([]);

    const products = [
        {
            id: 1,
            name: "Café Espresso",
            description: "Intenso e encorpado",
            price: "R$ 8,90",
            image: espressoImg,
        },
        {
            id: 2,
            name: "Cappuccino",
            description: "Cremoso e na medida",
            price: "R$ 12,90",
            image: cappuccinoImg,
        },
        {
            id: 3,
            name: "Latte",
            description: "Suave e delicioso",
            price: "R$ 14,90",
            image: latteImg,
        },
        {
            id: 4,
            name: "Brownie",
            description: "a combinação perfeita",
            price: "R$ 12,90",
            image: brownieImg, // Usando a variável correta agora
        }
    ];

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`Adicionado: ${product.name}`);
    };

    return {
        products,
        cart,
        handleAddToCart,
    };
}