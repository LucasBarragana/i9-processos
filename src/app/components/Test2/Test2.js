'use client';

import Link from "next/link";
import ArrowRight from "../icons/arrow-forward";
import Circle from "../icons/circle";
import Test from "../icons/test";

export default function GridCards() {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="grid grid-rows-3 grid-flow-col gap-6">        
        {/* Primeiro bloco */}
        <div className="row-span-2 col-span-1 bg-white rounded-lg p-4 shadow-lg">
          <Test />
          <h3 className="font-bold text-lg">Desenvolvimento de Software</h3>
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
          <button className="flex font-semibold text-sm">
            <p className="pr-2">Saiba mais</p>                             
            <ArrowRight />
          </button>
        </div> 
        
        {/* Segundo bloco */}
        <div className="row-span-1 col-span-2 bg-white grid grid-cols-2 rounded-lg p-4 shadow-lg">
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
        <div className="row-span-1 col-span-2 bg-white   grid grid-cols-2  rounded-lg p-4 shadow-lg">
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
        
        {/* Quarto bloco (espaço vazio) */}
        <div className="row-span-1 col-span-1rounded-lg p-4 bg-blue-100 text-blue-100">
          ----------------------------
        </div>
        
        {/* Quinto bloco */}
        <div className="row-span-2 col-span-1 bg-white rounded-lg p-4 shadow-lg">
          <Test />
          <h3 className="font-bold text-lg">Alocação de Recursos</h3>
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
  );
}
