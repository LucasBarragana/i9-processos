'use client'

import Link from "next/link"
import GridCards from "../Test2/Test2"

export default function Services(){
    return(
        <section id="Services" className=" bg-blue-100">
            <div className="mt-20">
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black pt-10 w-[40%] flex justify-center items-center text-center mx-auto mb-10">
                    Nos relacionamos com o ecosistema da sua empresa para inovar e atingir resultados extraordinários
                </h1>
            </div>
            <GridCards />
            <div className="flex justify-center pb-20 mt-20">
                <button>
                    <Link href="/" className="text-white text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">                
                        Conheça todos nossos serviços               
                    </Link>
                </button>
            </div>
        </section>
    )
}