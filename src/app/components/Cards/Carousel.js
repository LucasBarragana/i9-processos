'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 2, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 3, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 4, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
        { id: 5, stars: 4, title: 'ROBERTO FERREIRA', description: '“ Com a integração da i9 em nossa empresa vimos a importância de ter um trabalho especializado para esta área.Fez toda a diferença!', imageUrl: "/pb.png" },
    ];

    const handleSlideChange = index => {
        setCurrentIndex(index);
    };

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        rtl: true, 
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
                <div key={card.id} className='py-10'>
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

const getDynamicPosition = (cardIndex, currentIndex, totalCards) => {
    let position = currentIndex + cardIndex + 1;
    if (position < 0) {
        position += totalCards;
    }

    switch (position % totalCards) {
        case 0:
        case 5:
            return 1; 
        case 2:
        case 4:
            return 2; 
        case 3:
            return 3; 
        default:
            return totalCards;
    }
};


export default Carousel;
