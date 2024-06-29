'use client'

import ArrowRight from "../icons/arrow-forward";
import Circle from "../icons/circle";
import Test from "../icons/test";

export default function GridCardsMobile() {
  return (
    <div className="md:flex md:justify-center md:items-center md:h-auto lg:hidden">
        <div className="block px-4 sm:px-8 md:px-10"> 
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-lg p-4 shadow-lg mb-10">   
        <div className="flex-1 p-4">
            <Test />
            <h2 className="font-bold text-lg pb-4">Algo mais aqui</h2>
            <button className="flex font-semibold text-sm">
              <p className="pr-2">Saiba mais</p>                             
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1 p-4">
          <ul className="py-10 text-base">
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
          </div>

        </div> 
        
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-lg p-4 shadow-lg mb-10"> 
          <div className="flex-1 p-4">
            <Test />
            <h2 className="font-bold text-lg pb-4">Algo mais aqui</h2>
            <button className="flex font-semibold text-sm">
              <p className="pr-2">Saiba mais</p>                             
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1 p-4">
            <ul className="py-4 text-base">
              <li className="flex mb-2">
                <Circle />
                <span className="pl-2">Item 1</span>
              </li>
              <li className="flex mb-2">
                <Circle />
                <span className="pl-2">Item 2</span>
              </li>
              <li className="flex mb-2">
                <Circle />
                <span className="pl-2">Item 3</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Terceiro bloco */}
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-lg p-4 shadow-lg mb-10"> 
          <div className="flex-1 pt-8">
            <Test />
            <h2 className="font-bold text-lg">Consultoria de Projetos</h2>
            <button className="flex font-semibold text-sm">
              <p className="pr-2">Saiba mais</p>                             
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1">
            <ul className="py-8 text-base">
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
        
        
        {/* Quinto bloco */}
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-lg p-4 shadow-lg mb-10"> 
          <div className="flex-1 pt-8">
            <Test />
            <h2 className="font-bold text-lg">Consultoria de Projetos</h2>
            <button className="flex font-semibold text-sm">
              <p className="pr-2">Saiba mais</p>                             
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1">
          <ul className="py-10 text-base">
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
          <button className="flex font-semibold text-sm">
            <p className="pr-2">Saiba mais</p>                             
            <ArrowRight />
          </button>
        </div>
        </div>
      
      </div>
    </div>
  );
}
