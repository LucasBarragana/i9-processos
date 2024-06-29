'use client'

import PartnersCarousel from "./PartnersCarousel"

export default function HomePartners(){
    return(
        <section>
            <div className="container mx-auto mt-8">
                <div className="flex align-center justify-center">
                    <h1 className="text-3xl font-semibold mb-4 text-white">Empresas que confiam na I9</h1>
                </div>
                <PartnersCarousel />
            </div>
        </section>
    )
}