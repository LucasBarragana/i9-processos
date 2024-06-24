'use client'

import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import messages from './Messages';
import Image from 'next/image';

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    };
  
    const getClass = (index) => {
      const position = (index - currentIndex + messages.length) % messages.length;
      if (position === 0 || position === 2) return 'card left';
      if (position === 1) return 'card center';
      return 'card';
    };
  
    return (
      <div className='testimonials'>
        <Slider {...settings}>
          {messages.map((msg, index) => (
            <div key={index} className="card-container">
              <div className={getClass(index)}>
                <Image src={msg.LogoEmpresa} width={66}  height={66} alt="Logo Empresa" />
                <p className='italic mb-4'>"{msg.Message}"</p>
                <p className='font-bold'>{msg.Responsable}</p>
                <p className='text-xs'>{msg.Cargo}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    );
  }

export default CarouselComponent;
