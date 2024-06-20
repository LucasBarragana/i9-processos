'use client'

import Link from "next/link"
import ArrowDown from "../icons/arrow-bottom"

export default function Hero() {
    return (
        <section id="Hero" className="h-[90vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-8 bg-black relative shadow-lg">
            <p className="text-base text-white font-semibold">FOCO EM QUALIDADE E RESULTADO</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 w-[40%] text-white pt-10">
                Soluções inteligentes para empresas mais eficientes
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white pb-10 w-[20%] ">
                Tecnologia e inovação para processos eficientes
            </p>
            <button>
                <Link href="/" className="text-white py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">                
                    Facilite seu processo                
                </Link>
            </button>
            <div className="absolute -bottom-6 w-16 h-16 rounded-full flex items-center justify-center bg-blue-800 animate-bounce">
                <button className="text-white p-2">
                    <ArrowDown />
                </button>
            </div>              
        </section>
    )
}
