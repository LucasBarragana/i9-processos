'use client'

export default function About() {
    return (
        <section id="About" className="flex h-80vh w-full px-20 bg-blue-100">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 h-full">
                    <img src="deal1.jpg" alt="Descrição da imagem" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-center text-center p-8 my-auto">
                    <h3 className="mb-4 font-semibold">A evolução para seu projeto está aqui</h3>
                    <h1 className="mb-10 text-3xl font-semibold">
                        Somos uma empresa de desenvolvimento de software e outsourcing, sempre atualizada com as tendências 
                        do mercado e as necessidades dos clientes para oferecer o melhor serviço.
                    </h1>
                    <h2 className="mb-10 text-2xl font-base w-[80%] ">
                        Trabalhamos com profissionais altamente disruptivos e com foco na resolução de problemas.
                    </h2>
                    <button className="text-white py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">Evolua sua Empresa</button>
                </div>
            </div>
        </section>
    )
}
