'use client'

import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Soluctions() {
    return (
        <section className="h-auto w-[100vw] xl:px-80 py-20 hidden lg:block">
            <h1 className="text-4xl font-semibold mb-20 text-center text-white">
                Nos relacionamos com o ecossistema da sua <br />
                empresa para inovar e atingir resultados extraordinários
            </h1>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="">
                    <div className='mb-10'>
                        <h1 className='text-3xl font-semibold mb-6 text-customPurple300'>Mais De 24 Anos De Experiência, Oferecemos Serviços De TI</h1>
                        <p className='text-white text-lg'>
                            Visualize colaborativamente cadeias de
                            suprimentos amigáveis ​​ao usuário e imperativo
                            de unidade cruzada. Fabrique recursos
                            competitivos e holísticos de forma autoritária.
                            Restaure holisticamente recursos em tempo real,
                            enquanto redes padronizadas.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className='flex space-x-4 font-semibold '>
                            <div className='bg-custom-blue-100 rounded-full'>
                            <CircularProgressbar
                                value={90}
                                text={`90%`}
                                styles={buildStyles({
                                    pathColor: `#1e3a8a`,
                                    textColor: 'white',
                                    trailColor: 'transparent',
                                    backgroundColor: '#f3f4f6',
                                })}
                            />
                            </div>
                            <div>
                                <h2 className='text-xl text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <CircularProgressbar
                                value={90}
                                text={`90%`}
                                styles={buildStyles({
                                    pathColor: `#1e3a8a`,
                                    textColor: 'white',
                                    trailColor: 'transparent',
                                    backgroundColor: '#f3f4f6',
                                })}
                            />
                            <div>
                                <h2 className='text-xl text-customPurple300 font-bold'>Crescimento empresarial</h2>
                                <p className='text-white text-xs mt-4'>Transite ideias de primeira linha com eficiência antes do mercado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end">
                    <Image src="/Subtract2.png" alt="fundo" layout="responsive" width={500} height={500} className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
