'use client';

import Link from "next/link";
import GridCards from "../Test2/Test2";
import GridCardsMobile from "../Teste3/Teste3";

export default function Services() {
    return (
        <section id="Services" className="relative bg-gray-100 -skew-y-2 mt-20">
            <div className="relative z-10  skew-y-2">
                <div className="pt-20">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-black pt-10 w-[80%] md:w-[60%] lg:w-[50%] flex justify-center items-center text-center mx-auto mb-10">
                        Nos relacionamos com o ecosistema da sua empresa para inovar e atingir resultados extraordinários
                    </h1>
                </div>
                <GridCards />
                <GridCardsMobile />
                <div className="flex justify-center pb-20 mt-20">
                    <button>
                        <Link href="/" className="text-white text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">
                            Conheça todos nossos serviços               
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
