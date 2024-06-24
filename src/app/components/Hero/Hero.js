'use client'

import Link from "next/link"
import ArrowDown from "../icons/arrow-bottom"
import Image from "next/image"

export default function Hero() {
    return (
        <section id="Hero" className="h-[80vh] w-auto flex flex-col justify-center items-center text-start px-4 md:px-8 relative bg-blue-100 mt-20 mx-10">
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
            <div className="z-10 mt-10">
                <p className="text-base text-white font-semibold">FOCO EM QUALIDADE E RESULTADO</p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 w-[50%] text-white pt-10">
                    Soluções inteligentes para empresas mais eficientes
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white pb-10 w-[40%] ">
                    Tecnologia e inovação para processos eficientes
                </p>
                <button>
                    <Link href="/" className="text-white py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">                
                        Facilite seu processo                
                    </Link>
                </button>
            </div>       
            <div className="absolute -bottom-6 w-16 h-16 rounded-full flex items-center justify-center bg-blue-800 animate-bounce">
                <button className="text-black p-2">
                    <ArrowDown />
                </button>
            </div>       
        </section>
    )
}
