'use client';

import Link from "next/link";
import ArrowDown from "../icons/arrow-bottom";
import Image from "next/image";

export default function Hero() {
    const smoothScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="Hero" className="pt-20">
            <div className="h-[80vh] w-auto flex flex-col justify-center items-center text-start px-4 md:px-8 relative mx-4 sm:mx-8 md:mx-10">
                <div className="backgroundHero">
                    <Image
                        src="/fundo3.jpg"
                        alt="Background Image"
                        layout="fill"
                        quality={100}
                        className="rounded-3xl"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customBlue to-transparent opacity-100 rounded-3xl"></div>
                <div className="z-10 ">
                    <p className="text-xs text-white font-semibold">FOCO EM QUALIDADE E RESULTADO</p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 w-[50%] text-white pt-10">
                        Soluções inteligentes para empresas mais eficientes
                    </h1>
                    <p className="text-xs md:text-xl mb-8 text-white pb-10 w-[40%] ">
                        Tecnologia e inovação para processos eficientes
                    </p>
                    <button className="text-xs sm:text-xs md:text-base py-2 px-4 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-full text-white hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold" onClick={() => smoothScrollToSection('Hero')}>
                        Facilite seu processo
                    </button>
                </div>
                <div className="absolute -bottom-6 w-16 h-16 rounded-full flex items-center justify-center bg-blue-800 animate-bounce">
                    <button className="text-black p-2" onClick={() => smoothScrollToSection('About')}>
                        <Link href="#About"><ArrowDown /></Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
