'use client';

export default function Contact() {
  return (
    <section id="Contact" className="h-80vh flex justify-center items-center px-20 py-10">
      <div className="h-full w-full rounded-xl text-white bg-blue-900 flex justify-center items-center flex-col py-20">
        <h1 className="text-5xl text-center mb-8 w-[50%] font-bold">
            Traga o seu desafio de software para quem valoriza seu investimento
        </h1>
        <h2 className="text-xl text-center mb-8 w-[50%] ">
            Seremos sua extensão transformadora e vamos desenvolver sua ideia em forma de uma solução segura, bem-sucedida e com toda a transparência no processo até a entrega.
        </h2>
        <div className="contact rounded-xl font-bold">
          <button className="text-xl px-4 py-6 w-full h-full rounded-xl text-blue-900 rounded-xl hover:text-white transition-all duration-500 ease-in-out">
            FALE COM NOSSOS ESPECIALISTAS
          </button>
        </div>
      </div>
    </section>
  );
}
