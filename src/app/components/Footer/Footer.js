'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <section id="Footer" className=" text-black ">
            <div className="bg-gray-100 rounded-2xl mx-4 py-4 mb-4">
                <div className="md:px-20">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between align-center ">
                        <div className="flex flex-row justify-around order-1 md:order-3 gap-6">
                            <div className="mb-4 md:mb-0 ">
                                <h2 className=" mb-2 text-sm md-text-base lg:text-base font-semibold">Páginas</h2>
                                <Link href='#' className="block text-xs mb-2 md:text-xs hover:text-pink-500">Início</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Preço</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Sobre nós</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Termos de uso</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Privacidade</Link>
                            </div>
                            <div className="mb-4 md:mb-0">
                                <h2 className="font-bold mb-2 text-sm md-text-base lg:text-base">Ajuda</h2>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Central de Ajuda</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">Dúvidas frequentes</Link>
                            </div>
                            <div>
                                <h2 className="font-bold mb-2 text-sm md-text-basel lg:text-base">Contato</h2>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">WhatsApp</Link>
                                <Link href='#' className="block text-xs mb-2  md:text-xs hover:text-pink-500">contato@surveypro.com.br</Link>
                            </div>
                        </div>
                        <div className="text-xs md:order-2">
                            <div>
                                <div className="flex mb-4">
                                    <Image src="/local.svg" alt="address" width={16} height={16} />
                                    <p className="ml-2">Estrada do Rio de Janeiro km 25, Vila Rio – Rio de Janeiro / RJ</p>
                                </div>
                                <div className="flex mb-4">
                                    <Image src="/email.svg" alt="email" width={16} height={16} />
                                    <p className="ml-2">contato@i9tisolutions.com.br</p>
                                </div>
                                <div className="flex">
                                    <Image src="/whats2.svg" alt="whats" width={16} height={16} />
                                    <p className="ml-2">+55 (48) 9152-3013</p>
                                </div>
                            </div>
                            <div className="flex justify-end align-center mt-10">
                                <div className="flex space-x-4">
                                    <Link href="/">
                                        <Image src="/whats2.svg" alt="whats" width={26} height={26} />
                                    </Link>
                                    <Link href="/">
                                        <Image src="/inst.svg" alt="inst" width={26} height={26} />
                                    </Link>
                                    <Link href="/">
                                        <Image src="/face.svg" alt="face" width={16} height={16} />
                                    </Link>
                                    <Link href="/">
                                        <Image src="/linkdn.svg" alt="linkdn" width={26} height={26} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 w-full md:w-1/4 order-2 md:order-1">
                            <Image src="/Logoi9all.png" alt="logo" width={86} height={86} />
                            <p className="text-center text-sm md:text-xs">
                                Quer conversar sobre seu projeto?
                            </p>
                            <p className="text-center text-sm md:text-xs">
                                Soluções inteligentes para empresas mais eficientes.
                            </p>
                            <p className="text-center text-xs md:text-xs">
                                &copy; Copyright 2024 i9 Ti Solutions - Todos os direitos reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
