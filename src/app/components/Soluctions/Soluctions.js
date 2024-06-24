'use client'

import { useState } from 'react';
import contents from './Contents';
import Conection from './Conection';


export default function Soluctions() {


    const [activeContent, setActiveContent] = useState(0);

    const handleButtonClick = (contentId) => {
        setActiveContent(contentId);
    };

    return (
        <section className="px-20 py-20 bg-white">
            <h1 className="text-4xl font-semiBold mb-4">Conheça nossa suíte de soluções empresariais</h1>
            <p className="text-xl mb-14">Tudo organizado para potencializar os seus resultados.</p>

            <div className="flex">
                <div className="w-3/5 p-8">
                    <div className='flex'>
                        <div className='w-1/2 h-full mb-20'>
                            {contents.map((content) => (
                                <div 
                                    key={content.id} 
                                    className={activeContent === content.id ? 'block' : 'hidden'}
                                >
                                    <h2 className="text-sm font-bold mb-2">{content.title}</h2>
                                    <h1 className="text-2xl font-bold mb-8">{content.subTitle}</h1>
                                    <p className="mb-2">{content.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-1/2 h-full grid grid-cols-2 gap-4'>
                            <div className='bg-gray-200 rounded-lg p-4'>
                                <h1 className='font-semibold text-green-500 text-2xl'>+40%</h1>
                                <p className='text-xs'>Processamento de dados</p>
                            </div>
                            <div className='bg-gray-200 rounded-lg p-4'>
                                <h1 className='font-semibold text-green-500 text-2xl'>+40%</h1>
                                <p className='text-xs'>Processamento de dados</p>
                            </div>
                            <div className='bg-gray-200 rounded-lg p-4'>
                                <h1 className='font-semibold text-green-500 text-2xl'>+40%</h1>
                                <p className='text-xs'>Processamento de dados</p>
                            </div>
                            <div className='bg-gray-200 rounded-lg p-4'>
                                <h1 className='font-semibold text-green-500 text-2xl'>+40%</h1>
                                <p className='text-xs'>Processamento de dados</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center align-end bg-gray-100 rounded-full px-4 py-4">
                        {contents.map((content) => (
                            <button 
                                key={content.id} 
                                onClick={() => handleButtonClick(content.id)}
                                className={`logo flex items-center justify-center bg-gray-400 w-16 h-16 mr-8 font-semibold  ${activeContent === content.id ? 'text-gray-900 text-lg' : 'text-gray-300 text-xs'}`}
                            >
                                {content.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-2/5 ml-4 ">
                    <div className='flex justify-center align-center items-center '>
                        <h2 className='text-lg'>As conexões necessárias para melhor performace</h2>
                    </div>
                    <Conection />
                </div>
            </div>
        </section>
    );
}
