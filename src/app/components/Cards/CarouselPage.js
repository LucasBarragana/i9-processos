'use client'

import React from 'react';
import Carousel from './Carousel';

const HomePage = () => {
    return (
        <div className="items-center mt-20 pb-40 h-auto w-full bg-gray-100 skew-y-3">
            <div className='-skew-y-3 '>
                <div className='flex align-center justify-center'>
                    <h1 className="text-3xl font-semibold mt-20">O que nossos parceiros tem a dizer sobre nossos serviços</h1>
                </div>
                <Carousel />
            </div>
        </div>
    );
};

export default HomePage;
