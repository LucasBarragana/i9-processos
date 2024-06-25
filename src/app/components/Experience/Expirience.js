'use client'

import { useState } from "react";
import Image from "next/image";
import images from "./Images";
import GridPattern from "./GridPatterns";

export default function Experience() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        images.slice(0, 9),
        images.slice(9, 18),
        images.slice(18, 27),
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="Expirience" className="h-80vh px-20 py-10 bg-gray-100 -skew-y-2">            
            <GridPattern className="absolute inset-0 z-0" />
            <div className="clients flex h-full w-full rounded-lg mb-10 skew-y-2 z-10">
                <div className="w-[50%] h-full pt-10 mb-10">
                    <h2 className="text-white text-center py-4 text-3xl font-semibold w-[50%] mx-auto mb-10">Clientes que confiam em nossos serviços</h2>
                    <div className="grid grid-cols-3 gap-8 w-[70%] mx-auto">
                        {slides[currentSlide].map((image, index) => (
                            <div key={index} className="flex justify-center items-center ">
                                <Image src={image} width={80} height={80} alt={`companyLogo-${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2 space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`w-4 h-4 rounded-full mt-10 ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="expirience w-[50%] pt-10">
                    <h2 className="text-white text-center py-4 text-3xl font-semibold w-[50%] mx-auto mb-10">Experiência gera grandes resultados</h2>
                    <div className="grid grid-cols-2 gap-10 mt-4 w-[70%] mx-auto">
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+21</h2>
                            <p className="text-xs text-white font-semibold">ANOS NO MERCADO</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+72</h2>
                            <p className="text-xs text-white font-semibold">TRABALHOS REALIZADOS</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+17</h2>
                            <p className="text-xs text-white font-semibold">EMPRESAS PARCEIRAS</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+32</h2>
                            <p className="text-xs text-white font-semibold">ESPECIALISTAS</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+50<span className="text-4xl">%</span></h2>
                            <p className="text-xs text-white font-semibold">CRESCIMENTO EM PROJETOS</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold">+90<span className="text-4xl">%</span></h2>
                            <p className="text-xs text-white font-semibold">SATISFAÇÃO DE CLIENTES</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}