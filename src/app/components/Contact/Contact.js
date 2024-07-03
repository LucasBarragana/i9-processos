'use client';

export default function Contact() {
  return (
    <section id="Contact" className="h-[70vh] relative mx-10 rounded-xl mb-10 ">
      <div className="h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("/contact-background.png")' }}>
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent rounded-xl"></div>
        <div className="h-full flex justify-end items-center px-4 lg:px-20 rounded-xl xl:py-40">
          <div className="w-full lg:w-2/6 text-white z-10 pr-10">
            <h1 className="text-sm lg:text-2xl xl:text-5xl text-left mb-4 lg:mb-8 font-bold">
              Traga o seu desafio de software para quem valoriza seu investimento
            </h1>
            <h2 className="text-sm lg:text-xl text-left mb-4 lg:mb-8">
              Seremos sua extensão transformadora e vamos desenvolver sua ideia em forma de uma solução segura, bem-sucedida e com toda a transparência no processo até a entrega.
            </h2>
            <button className=" text-xs md:text-xl text-white py-2 md:py-2 px-2 md:px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out gradient-bg font-medium">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
