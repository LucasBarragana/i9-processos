'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Desktop() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'Hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50, 
        behavior: 'smooth',
      });
    }
  };


  return (
    <nav className="hidden lg:block bg-blue-900 max-w-screen-2xl">
      <div className='fixed w-full top-0 z-50 h-[8px] bg-gray-900'></div>
      <div className='fixed w-auto top-2 z-50 h-[52px] bg-white shadow-lg mx-10 rounded-full px-28'>
        <div className="py-2 flex justify-between items-center px-4 sm:px-6 lg:px-10 ">
          <div className="flex items-center">
            <div className="text-lg font-bold">
              <Link href="/">
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-28">
            <button className={`nav-link ${activeSection === 'Hero' ? 'active' : ''}`} onClick={() => smoothScrollToSection('Hero')}>
              Início
            </button>
            <button className={`nav-link ${activeSection === 'About' ? 'active' : ''}`} onClick={() => smoothScrollToSection('About')}>
              Sobre
            </button>
            <button className={`nav-link ${activeSection === 'Services' ? 'active' : ''}`} onClick={() => smoothScrollToSection('Services')}>
              Serviços
            </button>
            <div><Image src="/Logoi9.png" alt='logo' width={48} height={48} className='animate-spin w-8 h-8'/></div>
            <button className={`nav-link ${activeSection === 'Expirience' ? 'active' : ''}`} onClick={() => smoothScrollToSection('Expirience')}>
              Experiência
            </button>
            <button className={`nav-link ${activeSection === 'Testimonials' ? 'active' : ''}`} onClick={() => smoothScrollToSection('Testimonials')}>
              Testemunhos
            </button>
            <button className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`} onClick={() => smoothScrollToSection('Contact')}>
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
