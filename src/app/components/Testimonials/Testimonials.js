'use client'

import { useState } from "react";
import ArrowLeftCircle from "../icons/arrow-left-circle";
import ArrowRightCircle from "../icons/arrow-right-circle";
import messages from "./Messages";
import Image from "next/image";

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
    };

    const { LogoEmpresa, Message, Responsable, Cargo } = messages[currentSlide];

    return (
        <section id="Testimonials" className="h-[90vh] px-20 py-10 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-blue-900 pt-10 w-[40%] flex justify-center items-center text-center mx-auto">
                O que nossos parceiros tem a dizer sobre nossos serviços:
            </h1>
            <div className="w-full h-full flex flex-col md:flex-row items-center">
                <div className="w-2/5 mb-4 md:mb-0">
                    <div className="relative w-90 h-80 rounded-r-full overflow-hidden">
                        <Image src="/deal1.jpg" alt="additional image" layout="fill" objectFit="cover"  />
                    </div>
                </div>
                <div className="w-2/5 flex flex-col items-center mx-auto">
                    <div className="mb-4">
                        <Image src={LogoEmpresa} width={100} height={100} alt="company logo" />
                    </div>
                    <div className="text-center mb-4">
                        <p className="text-gray-600 text-4xl">&quot;{Message}&quot;</p>
                        <h3 className="font-bold mt-2 text-2xl">{Responsable}</h3>
                        <p className="text-gray-500">{Cargo}</p>
                    </div>
                    <div className="flex justify-center items-center w-full mt-4">
                        <button onClick={handlePrev} className="p-2">
                            <ArrowLeftCircle />
                        </button>
                        <button onClick={handleNext} className="p-2">
                            <ArrowRightCircle />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
