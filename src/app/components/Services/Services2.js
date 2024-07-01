'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function Services2() {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: "Desenvolvimento de software",
            description: "Aqui iremos poder desenvolver algum texto sobre a plataforma, com algumas características ideias, funcionamentos e resultados ilustrativos. Aqui iremos poder desenvolver algum texto sobre a plataforma, com algumas características ideias, funcionamentos e resultados ilustrativos"
        },
        {
            title: "Consultoria e gestão de projetos",
            description: "Descrição para Consultoria e gestão de projetos"
        },
        {
            title: "Outsourcing",
            description: "Descrição para Outsourcing"
        },
        {
            title: "SurveyPro",
            description: "Descrição para SurveyPro"
        },
        {
            title: "NextSuite",
            description: "Descrição para NextSuite"
        },
        {
            title: "Rifa Fácil",
            description: "Descrição para Rifa Fácil"
        },
        {
            title: "I9 Car",
            description: "Descrição para I9 Car"
        },
        {
            title: "RP",
            description: "Descrição para RP"
        }
    ];

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id="Services2" className="relative max-w-screen-2xl bg-gray-100 -skew-y-3 mt-14 py-20"
                 style={{ backgroundImage: "url('/fundo-services.png')", backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent "></div>
            <div className="relative skew-y-3 text-3xl text-center pb-14">
                <h1>Conheça nossa suíte de soluções empresariais</h1>
                <p>Tudo organizado para potencializar os seus resultados.</p>
            </div>
            <div className="relative">
                <ul className="buttons flex justify-between mx-14 rounded-full px-4 py-2">
                    {["Desenvolvimento de software", "Consultoria e gestão de projetos", "Outsourcing", "SurveyPro", "NextSuite", "Rifa Fácil", "I9 Car", "RP"].map((text, index) => (
                        <li key={index} className={`flex-1 flex items-center justify-center px-2 py-2 mx-2 rounded-full text-xs font-medium ${activeIndex === index ? 'active' : ''}`}>
                            <button onClick={() => handleButtonClick(index)} className="text-center">
                                {text.split(' ').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < text.split(' ').length - 1 && ' '}
                                    </React.Fragment>
                                ))}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="content-services relative mt-1 mx-16 rounded-lg">
                <div className="skew-y-3 grid grid-cols-2 gap-12 px-10 py-10 mx-14 text-white">
                    <div>
                        <h1 className="text-2xl mb-10 font-semibold">{services[activeIndex].title}</h1>
                        <p>{services[activeIndex].description}</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                            <div className="cards bg-gray-100 px-14 py-14 rounded-lg">
                                <p>algum conteúdo aqui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
