'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <section id="Footer" className="bg-black text-white py-8">
            <div className="px-20 mx-auto">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between align-center ">
                    <div className="flex flex-row justify-around order-1 md:order-2 gap-20">
                        <div className="mb-4 md:mb-0 ">
                            <h2 className="font-bold mb-2 text-sm md-text-lg  lg:text-xl">Páginas</h2>
                            <Link href='#' className="block text-xs mb-2 md:text-base hover:text-pink-500">Início</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Preço</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Sobre nós</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Termos de uso</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Privacidade</Link>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h2 className="font-bold mb-2 text-sm md-text-base lg:text-xl">Ajuda</h2>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Central de Ajuda</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">Dúvidas frequentes</Link>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2 text-sm md-text-basel lg:text-xl">Contato</h2>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">WhatsApp</Link>
                            <Link href='#' className="block text-xs mb-2  md:text-base hover:text-pink-500">contato@surveypro.com.br</Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4 w-full md:w-2/5 order-2 md:order-1">
                        <p className="text-center text-sm md:text-base">
                            Plataforma para você criar e gerenciar seus formulários
                            com segurança e praticidade.
                        </p>
                        <p className="text-center text-xs md:text-sm">
                            &copy; Copyright 2024 I9 - Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
