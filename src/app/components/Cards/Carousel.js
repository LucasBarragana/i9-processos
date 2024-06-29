'use client'

// components/Carousel.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Exemplo de dados dos cards (substitua com seus dados reais)
    const cards = [
        { id: 1, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 2, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 3, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 4, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 5, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    ];

    // Atualiza o índice atual quando o carousel muda de slide
    const handleSlideChange = index => {
        setCurrentIndex(index);
    };

    // Configurações do Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        rtl: true, // Movimento da direita para a esquerda
        beforeChange: (current, next) => handleSlideChange(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={card.id} className='py-20 '>
                    <Card
                        title={card.title}
                        description={card.description}
                        stars={card.stars}
                        imageUrl={card.imageUrl}
                        position={getDynamicPosition(index, currentIndex, cards.length)}
                    />
                </div>
            ))}
        </Slider>
    );
};

// Função auxiliar para determinar a posição dinâmica do card
const getDynamicPosition = (cardIndex, currentIndex, totalCards) => {
    // Calcula a posição do card relativa ao currentIndex
    let position = currentIndex + cardIndex + 1;

    // Ajusta para que position seja positivo e dentro do range de totalCards
    if (position < 0) {
        position += totalCards;
    }

    // Calcula a posição baseada em 1 (primeiro card tem posição 1, segundo card tem posição 2, etc.)
    // Neste caso, queremos estilizar o card de acordo com sua posição fixa, independente de sua posição real no carousel
    switch (position % totalCards) {
        case 0:
        case 5:
            return 1; // Estilização para posição 1 e 5
        case 2:
        case 4:
            return 2; // Estilização para posição 2 e 4
        case 3:
            return 3; // Estilização para posição 3
        default:
            return totalCards; // Fallback para o último card, se necessário
    }
};


export default Carousel;
