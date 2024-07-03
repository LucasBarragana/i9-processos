'use client'

import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Soluctions() {
    return (
        <section className="h-auto w-[100vw] px-60 py-20  hidden lg:block">
            <h1 className="text-2xl font-semibold mb-20 text-center text-white">
                Nos relacionamos com o ecossistema da sua <br />
                empresa para inovar e atingir resultados extraordinários
            </h1>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="">
                    <div className='mb-10'>
                        <h1 className='text-2xl font-semibold mb-6 text-customPurple300'>Mais De 24 Anos De Experiência, Oferecemos Serviços De TI</h1>
                        <p className='text-white'>
                            Visualize colaborativamente cadeias de
                            suprimentos amigáveis ​​ao usuário e imperativo
                            de unidade cruzada. Fabrique recursos
                            competitivos e holísticos de forma autoritária.
                            Restaure holisticamente recursos em tempo real,
                            enquanto redes padronizadas.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                <CircularProgressbar
                                    value={90}
                                    text={`90%`}
                                    styles={buildStyles({
                                        pathColor: `#1e3a8a`,
                                        textColor: 'transparent', // Hide the default text
                                        trailColor: 'transparent',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                />
                                <div className='absolute inset-0 flex items-center justify-center -top-[1.5em] '>
                                    <div className='flex items-center justify-center rounded-full w-[80px] h-[80px]   bg-customBlue100 text-white font-semibold text-2xl'>
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='relative'>
                                <CircularProgressbar
                                    value={90}
                                    text={`90%`}
                                    styles={buildStyles({
                                        pathColor: `#1e3a8a`,
                                        textColor: 'transparent', 
                                        trailColor: 'transparent',
                                        backgroundColor: '#f3f4f6',
                                    })}
                                />
                                <div className='absolute inset-0 flex items-center justify-center -top-[1.5em]'>
                                    <div className='flex items-center justify-center rounded-full w-[80px] h-[80px]   bg-customBlue100 text-white font-semibold text-2xl'>
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end">
                    <Image src="/Subtract2.png" alt="fundo" width={500} height={500} className="h-auto" />
                </div>
            </div>
        </section>
    );
}
