'use client'

import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Soluctions() {
    return (
        <section className="px-20 py-20">
            <h1 className="text-2xl font-semibold mb-20 text-center text-white">
                Nos relacionamos com o ecossistema da sua <br />
                empresa para inovar e atingir resultados extraordinários
            </h1>
            <div className="grid grid-cols-2 gap-8">
                <div className="">
                    <div className='mb-10'>
                        <h1 className='text-2xl font-medium mb-6 text-white'>Mais De 24 Anos De Experiência, Oferecemos Serviços De TI</h1>
                        <p className='text-white'>
                            Visualize colaborativamente cadeias de
                            suprimentos amigáveis ​​ao usuário e imperativo
                            de unidade cruzada. Fabrique recursos
                            competitivos e holísticos de forma autoritária.
                            Restaure holisticamente recursos em tempo real,
                            enquanto redes padronizadas.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                <CircularProgressbar
                                    value={95}
                                    text={`95%`}
                                    styles={buildStyles({
                                        pathColor: `#1e3a8a`,
                                        textColor: '#000',
                                        trailColor: '#d1d5db',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                />
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex items-center justify-center rounded-full w-28 h-14 bg-gray-100 text-black border-4 border-blue-900 font-semibold text-xl'>95%</div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-blue-500'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                <CircularProgressbar
                                    value={95}
                                    text={`95%`}
                                    styles={buildStyles({
                                        pathColor: `#1e3a8a`,
                                        textColor: '#000',
                                        trailColor: '#d1d5db',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                />
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex items-center justify-center rounded-full w-28 h-14 bg-gray-100 text-black border-4 border-blue-900 font-semibold text-xl'>95%</div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-blue-500'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/Subtract2.png" alt="fundo" width={500} height={500} className="h-auto" />
                </div>
            </div>
        </section>
    );
}
