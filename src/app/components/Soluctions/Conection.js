'use client'


import { useRef } from "react";
import { AnimatedBeam } from './AnimatedBeam';
import Image from "next/image";


export default function Conection(){
    const containerRef = useRef(null);
    const centralRef = useRef(null);
    const fromRefs = {
      googleDrive: useRef(null),
      googleDocs: useRef(null),
      notion: useRef(null),
      zapier: useRef(null),
      whatsapp: useRef(null),
      messenger: useRef(null),
    };

    return(
        <div className="relative h-full w-full " ref={containerRef}>
            <div ref={centralRef} className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Central Icon" className="w-16 h-16" />
            </div>

            <div ref={fromRefs.googleDrive} className="absolute top-1/2 left-10 w-16 h-16 bg-blue-100 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Zapier" className="w-10 h-10" />  
            </div>
            <div ref={fromRefs.googleDocs} className="absolute top-20 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Google Docs" className="w-10 h-10" />
            </div>
            <div ref={fromRefs.notion} className="absolute top-20 left-10 w-16 h-16 bg-blue-100 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Zapier" className="w-10 h-10" />
            </div>
            <div ref={fromRefs.zapier} className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Zapier" className="w-10 h-10" />
            </div>
            <div ref={fromRefs.whatsapp} className="absolute bottom-10 left-10 w-16 h-16 bg-blue-100 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Zapier" className="w-10 h-10" />
            </div>
            <div ref={fromRefs.messenger} className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center shadow-lg z-10">
                <Image src="/totvs.png" width={60} height={60} alt="Messenger" className="w-10 h-10" />
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.googleDrive} toRef={centralRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.googleDocs} toRef={centralRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.notion} toRef={centralRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.zapier} toRef={centralRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.whatsapp} toRef={centralRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={fromRefs.messenger} toRef={centralRef} curvature={50} />
        </div>
    )
}