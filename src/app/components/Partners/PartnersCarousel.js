'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './CardPartners';

export default function PartnersCarousel(){
    const cards = [
        { id: 1,imageUrl: '/Farmacias.png' },
        { id: 2,imageUrl: '/totvs2.png' },
        { id: 3,imageUrl: '/softplan.png' },
        { id: 4,imageUrl: '/digix.png' },
        { id: 5,imageUrl: '/somos.png' },
    ];

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
        rtl: true,
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

    return(
        <section className='bg-gray-100 rounded-full mb-10'>
            <Slider {...settings}>
                {cards.map(card => (
                    <div key={card.id} className='pt-6'>
                        <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
                    </div>
                ))}
            </Slider>
        </section>
    )
}