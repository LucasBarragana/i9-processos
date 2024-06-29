'use client'

import Image from "next/image"

export default function Services2(){
    return(
        <section id="Services2" className="max-w-screen-2xl relative bg-gray-100 -skew-y-3 mt-14 py-20">
            <div className="skew-y-3 text-3xl text-center pt-10 pb-14">
                <h1>Conheça nossa suíte de soluções empresariais</h1>
                <p>Tudo organizado para potencializar os seus resultados.</p>
            </div>
            <div className="">
                <ul className="buttons flex align-center justify-between mx-14 rounded-full px-10 py-2">
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            Desenvolvimento de <br />software
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            Consultoria e gestão <br />de projetos
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            Outsourcing
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            SurveyPro
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            NextSuite
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            Rifa Fácil
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            I9 Car
                        </button>
                    </li>
                    <li className="px-4 py-2 rounded-full">
                        <button>
                            RP
                        </button>
                    </li>
                </ul>
            </div>
            <div className="content-services mt-1 mx-16 rounded-lg">
                <div className="skew-y-3 grid grid-cols-2 gap-12 px-10 py-10 mx-14 text-white">
                    <div>
                        <h1 className="text-2xl mb-10">Desenvolvimento de software</h1>
                        <p>
                            Aqui iremos poder desenvolver algum texto sobre a
                            plataforma, com algumas características ideias,
                            funcionamentos e resultados ilustrativos.
                            Aqui iremos poder desenvolver algum texto sobre a
                            plataforma, com algumas características ideias,
                            funcionamentos e resultados ilustrativos
                        </p>
                    </div>
                    <div >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="cards bg-gray-100  px-14 py-14 rounded-lg">
                                <p>algum conteudo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteudo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteudo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteudo aqui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}