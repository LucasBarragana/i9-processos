'use client'

import Link from "next/link"
import ArrowRight from "../icons/arrow-forward"
import Circle from "../icons/circle"
import Test from "../icons/test"

export default function Services(){
    return(
        <section id="Services" className=" bg-blue-100">
            <div className="pt-10">
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-blue-900 pt-10 w-[40%] flex justify-center items-center text-center mx-auto">
                    Nos relacionamos com o ecosistema da sua empresa para inovar e atingir resultados extraordinários
                </h1>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="relative w-full h-full max-w-screen-lg mx-auto">
                    <div className="absolute left-0 top-24 md:w-[390px] h-[440px] bg-white shadow-lg rounded-lg p-8">
                        <Test />
                        <h3 className="font-bold text-xl">Desenvolvimento de Software</h3>
                        <ul className="py-10 text-lg">
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Foco em Soluções</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Customização e Flexibilidade</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Orientação para Resultados</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Adaptação a Diversos Setores</span>
                            </li>
                            <li className="flex">
                                <Circle />
                                <span className="pl-6">Inovação e Competitividade</span>
                            </li>
                        </ul>
                        <button className="flex font-semibold">
                            <p className="pr-2">Saiba mais</p>                             
                            <ArrowRight />
                        </button>
                    </div>
                    <div className="absolute top-24 right-0 md:w-[590px] h-[240px] bg-white shadow-lg rounded-lg px-8 flex ">
                        <div className="flex-1 pt-8">
                            <Test />
                            <h2 className="font-bold text-xl pb-10">Consultoria de Projetos</h2>
                            <button className="flex font-semibold">
                                <p className="pr-2">Saiba mais</p>                             
                                <ArrowRight />
                            </button>
                        </div>
                        <div className="flex-1">
                            <ul className=" py-8 text-lg">
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Otimização de Processos</span>
                                </li>
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Foco na Simplificação Tecnológica</span>
                                </li>
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Suporte para Tomada de Decisão</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black shadow-lg rounded-lg">
                    </div>
                    <div className="absolute bottom-20 left-0 md:w-[590px] h-[240px] bg-white shadow-lg rounded-lg p-8 flex">
                        <div className="flex-1">
                            <Test />
                            <h2 className="font-bold text-xl pb-10">Algo mais aqui</h2>
                            <button className="flex font-semibold">
                                <p className="pr-2">Saiba mais</p>                             
                                <ArrowRight />
                            </button>
                        </div>
                        <div className="flex-1">
                            <ul className="py-8 text-lg">
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Item 1</span>
                                </li>
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Item 1</span>
                                </li>
                                <li className="flex mb-2">
                                    <Circle />
                                    <span className="pl-6">Item 1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute bottom-20 right-0 md:w-[390px] h-[452px] bg-white shadow-lg rounded-lg p-8">
                        <Test />
                        <h3 className="font-bold text-xl">Alocação de Recursos</h3>
                        <ul className="py-10 text-lg">
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Especialização Técnica</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Adaptação às Necessidades</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Valor Agregado ao Time</span>
                            </li>
                            <li className="flex mb-2">
                                <Circle />
                                <span className="pl-6">Garantia de Qualidade</span>
                            </li>
                            <li className="flex">
                                <Circle />
                                <span className="pl-6">Não Interferência na Rotina</span>
                            </li>
                        </ul>
                        <button className="flex font-semibold">
                            <p className="pr-2">Saiba mais</p>                             
                            <ArrowRight />
                        </button>
                    </div>
                </div>                
            </div>
            <div className="flex justify-center pb-20">
                <button>
                    <Link href="/" className="text-white text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-semibold">                
                        Conheça todos nossos serviços               
                    </Link>
                </button>
            </div>
        </section>
    )
}