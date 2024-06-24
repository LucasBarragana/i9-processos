'use client'

import Image from "next/image"

export default function About() {
    return (
        <section id="About" className="flex h-80vh w-full bg-blue-100">
            <div className="flex w-full h-full mt-20">
                <div className="lineDeal w-1/3 h-full relative pr-4 py-4 border border-black">
                    <Image
                        src="/deal1.jpg"
                        alt="Descrição da imagem"
                        height={600}
                        width={600}
                        className="deal w-400 h-400"
                    />
                </div>
                {/* Div com conteúdo ocupando 2/3 do width */}
                <div className="w-2/3 h-full flex flex-col justify-center items-center text-center px-20">
                    <h3 className="mb-4 font-semibold">A evolução para seu projeto está aqui</h3>
                    <h1 className="mb-10 text-3xl font-semibold">
                        Somos uma empresa de desenvolvimento de software e outsourcing, sempre atualizada com as tendências 
                        do mercado e as necessidades dos clientes para oferecer o melhor serviço.
                    </h1>
                    <h2 className="mb-10 text-2xl font-base w-[80%]">
                        Trabalhamos com profissionais altamente disruptivos e com foco na resolução de problemas.
                    </h2>
                    <button className="text-white py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">
                        Evolua sua Empresa
                    </button>
                </div>
            </div>
        </section>
    )
}
