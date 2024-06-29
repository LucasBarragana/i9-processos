'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <section id="Footer" className=" text-black ">
            <div className="bg-gray-100 rounded-2xl mx-4 py-4 mb-4">
                <div className="md:px-20">
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between align-center ">
                        <div className="flex flex-row justify-around order-1 md:order-2 gap-6">
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
                        <div className="flex flex-col items-center space-y-4 w-full md:w-1/4 order-2 md:order-1">
                            <p className="text-center text-sm md:text-xs">
                                Plataforma para você criar e gerenciar seus formulários
                                com segurança e praticidade.
                            </p>
                            <p className="text-center text-xs md:text-xs">
                                &copy; Copyright 2024 SurveyPro - Todos os direitos reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
