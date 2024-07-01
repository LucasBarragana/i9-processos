'use client'

import React from 'react';
import Carousel from './Carousel';

const HomePage = () => {
    return (
        <div className="relative items-center mt-10 pb-20 h-auto w-full bg-gray-100 skew-y-3"
             style={{ backgroundImage: "url('/fundo-testimonials.png')", backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
            <div className='relative -skew-y-3 '>
                <div className='flex align-center justify-center'>
                    <h1 className="text-3xl font-semibold mt-20">O que nossos parceiros têm a dizer sobre nossos serviços</h1>
                </div>
                <Carousel />
            </div>
        </div>
    );
};

export default HomePage;
