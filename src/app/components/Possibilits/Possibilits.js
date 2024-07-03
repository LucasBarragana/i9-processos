'use client'

import Image from 'next/image'

export default function Possibilits() {
    return (
        <section className="h-auto w-[100vw] px-10 mt-20  hidden lg:block">
            <div className="grid lg:grid-cols-2 h-full gap-4 bg-gradient-to-t from-customBlue100 to-transparent rounded-lg text-customPurple300 mx-10">                
                <div className="px-32 py-24">
                    <h1 className="text-5xl font-bold mb-20">Ilimitadas possibilidades na solução de problemas</h1>
                    <p className="text-xl">
                        Na i9 TI Solutions, contamos com uma equipe excepcionalmente experiente e altamente capacitada, 
                        dedicada a desenvolver soluções sob medida para cada desafio. Utilizando as tecnologias mais avançadas 
                        e adequadas para cada projeto, nossa equipe está comprometida em oferecer a melhor experiência do usuário possível. 
                        Priorizamos a usabilidade, a acessibilidade e o design intuitivo em todas as soluções que desenvolvemos, 
                        garantindo que nossos clientes e seus usuários finais tenham uma experiência digital excepcional em cada interação.
                    </p>
                </div>
                <div className="relative w-full h-full">
                    <Image src="/anom.svg" alt="Imagem ilustrativa" layout="fill" />
                </div>
            </div>
        </section>
    )
}
