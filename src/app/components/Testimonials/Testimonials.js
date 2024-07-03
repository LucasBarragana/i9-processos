'use client'

import React from 'react';
import Carousel from './Carousel';

const Testimonials = () => {
    return (
        <div className="relative items-center mt-10 pb-20 h-[80vh] w-[100vw] px-10 bg-gray-100 skew-y-3" style={{ backgroundImage: "url('/fundo-testimonials.png')", backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-gradient-to-b from-white to-transparent'></div>
            <div className='relative -skew-y-3 '>
                <div className='flex justify-center align-center text-center'>
                    <h1 className="text-5xl font-semibold mt-20 text-customPurple300 ">O que nossos parceiros <br /> têm a dizer sobre nossos serviços</h1>
                </div>
                <Carousel />
            </div>
        </div>
    );
};

export default Testimonials;
