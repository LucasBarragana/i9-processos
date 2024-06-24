'use client'

import CarouselComponent from "./Testimonials2"

export default function PageTestimonials(){
    return(
        <section className="h-[70vh] w-full px-20 mb-10 bg-white">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-blue-900 pt-10 w-1/2 flex justify-center items-center text-center mx-auto mb-10">
                O que nossos parceiros tem a dizer sobre nossos serviços:
            </h1>
            <CarouselComponent />
        </section>
    )
}