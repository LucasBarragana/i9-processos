'use client'

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'ROBERTO FERREIRA',
        feedback: 'Com a integração do IG em nossa empresa vimos a importância de ter um trabalho especializado para esta área. Fez toda a diferença!',
        stars: 4,
        image: '/pb.png',
    },
    {
        name: 'ROBERTO FERREIRA',
        feedback: 'Com a integração do IG em nossa empresa vimos a importância de ter um trabalho especializado para esta área. Fez toda a diferença!',
        stars: 5,
        image: '/pb.png',
    },
    {
        name: 'ROBERTO FERREIRA',
        feedback: 'Com a integração do IG em nossa empresa vimos a importância de ter um trabalho especializado para esta área. Fez toda a diferença!',
        stars: 4,
        image: '/pb.png',
    },
    {
        name: 'ROBERTO FERREIRA',
        feedback: 'Com a integração do IG em nossa empresa vimos a importância de ter um trabalho especializado para esta área. Fez toda a diferença!',
        stars: 5,
        image: '/pb.png',
    },
    {
        name: 'ROBERTO FERREIRA',
        feedback: 'Com a integração do IG em nossa empresa vimos a importância de ter um trabalho especializado para esta área. Fez toda a diferença!',
        stars: 5,
        image: '/pb.png',
    },
];

const carouselVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsCarousel() {
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start((index) => ({
                x: index === 0 ? 400 : index === 1 ? 250 : index === 2 ? 100 : index === 3 ? -100 : -250,
                opacity: index === 2 ? 1 : 0.75,
                scale: index === 2 ? 1 : 0.9,
                transition: {
                    x: { type: 'tween', duration: 1, ease: 'linear' },
                    opacity: { type: 'tween', duration: 1, ease: 'linear' },
                    scale: { type: 'tween', duration: 1, ease: 'linear' }
                }
            }));

            setTimeout(() => {
                testimonials.push(testimonials.shift());
                controls.set((index) => ({
                    x: 0,
                }));
            }, 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, [controls]);

    return (
        <section className="mx-auto relative px-10 sm:px-10 md:px-20 my-16 lg:px-40 max-w-screen-2xl box-border py-40">
            <h2 className="text-center text-2xl font-bold mb-10">O que nossos parceiros tem a dizer sobre nossos serviços:</h2>
            <div className="flex justify-center items-center relative">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className={`absolute w-80 px-12 py-10 bg-white rounded-lg shadow-lg ${getPositionClasses(index)}`}
                        initial="hidden"
                        animate={controls}
                        custom={index}
                        variants={carouselVariants}
                    >
                        <div className="flex flex-col items-center">
                          <div className='absolute -top-5 -right-5 z-10'>
                            <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full" />
                          </div>
                            <h3 className="text-lg font-bold mb-2">Feedback dos nossos clientes</h3>
                            <div className="flex mb-2">
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <span key={i} className="text-yellow-500">★</span>
                                ))}
                                {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
                                    <span key={i} className="text-gray-300">★</span>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-2">{testimonial.name}</p>
                            <p className="text-gray-600 text-sm text-center">{testimonial.feedback}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function getPositionClasses(index) {
    const positions = [
        'left-[100px] ',
        'left-[250px]',
        'left-[400px]',
        'left-[550px]',
        'left-[700px]',
    ];
    return positions[index % positions.length];
}
