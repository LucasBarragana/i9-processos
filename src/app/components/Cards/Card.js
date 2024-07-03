import React from 'react';

const Card = ({ title, description, imageUrl, position, stars }) => {
    let cardClass = "bg-white rounded-xl shadow-md w-[300px] h-[340px] p-4 border-2 border-blue-900 ";

    // Aplicar estilos predefinidos com base na posição do card
    if (position === 1 || position === 5) {
        cardClass += "card15"; // Estilo para o primeiro e o quinto card
    } else if (position === 2 || position === 4) {
        cardClass += "card24"; // Estilo para o segundo e o quarto card
    } else if (position === 3) {
        cardClass += "card3"; // Estilo para o card central
    }

    return (
        <div className=''>
            <div className={cardClass}>
                <div>
                    <img src={imageUrl} alt={title} className="absolute -top-5 -right-5 h-24 w-24 object-cover mb-4 rounded-lg" />
                </div>
                <div className='absolute left-4 top-0 h-full w-6 bg-customPurple100'></div>
                <div className='px-10 pt-10 text-customPurple300'>
                    <h2 className='text-base font-medium'>Feedbacks dos nossos clientes</h2>
                    <div className='w-full h-1 bg-customPurple100'></div>
                    <div className="flex mb-2 w-full ">
                        {Array.from({ length: stars }).map((_, i) => (
                            <span key={i} className="text-yellow-500 text-4xl">★</span>
                        ))}
                        {Array.from({ length: 5 - stars }).map((_, i) => (
                            <span key={i} className="text-gray-300 text-4xl">★</span>
                        ))}
                    </div>
                    <h2 className="text-sm font-base mb-2">{title}</h2>
                    <p className=" text-xs">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
