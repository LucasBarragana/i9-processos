'use client'

import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, imageUrl, position, stars }) => {
    let cardClass = "bg-white rounded-[50px] shadow-md w-[429px] h-[453px] p-4 border-2 border-blue-900 ";

    // Aplicar estilos predefinidos com base na posição do card
    if (position === 1 || position === 5) {
        cardClass += "card15"; // Estilo para o primeiro e o quinto card
    } else if (position === 2 || position === 4) {
        cardClass += "card24"; // Estilo para o segundo e o quarto card
    } else if (position === 3) {
        cardClass += "card3"; // Estilo para o card central
    }

    return (
        <div className=''>
            <div className={cardClass}>
                <div>
                    <img src={imageUrl} alt={title} className="absolute -top-5 -right-5 h-20 w-20 object-cover mb-4 rounded-lg" />
                </div>
                <div className='absolute left-8 top-0 h-full w-6 bg-customPurple100'></div>
                <div><Image src='/logo-card.svg' width={76} height={76} alt='logo' className='absolute left-1 bottom-2' /> </div>
                <div className='pl-12 px-10 pt-10 text-customPurple300'>
                    <h2 className='text-[25px] font-semibold'>Feedbacks dos nossos clientes</h2>
                    <div className='w-full h-1 bg-customPurple100'></div>
                    <div className="flex mb-2 w-full ">
                        {Array.from({ length: stars }).map((_, i) => (
                            <span key={i} className="text-yellow-500 text-4xl">★</span>
                        ))}
                        {Array.from({ length: 5 - stars }).map((_, i) => (
                            <span key={i} className="text-gray-300 text-4xl">★</span>
                        ))}
                    </div>
                    <h2 className="text-[25px] font-base mb-2">{title}</h2>
                    <p className=" text-[18px]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
