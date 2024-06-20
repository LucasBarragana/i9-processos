'use client'

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

  return (
    <nav className="hidden lg:block">
      <div className='fixed top-0 left-0 w-full z-50 h-[86px] bg-black text-white'>
        <div className="mx-auto py-2 flex justify-between items-center px-20 mt-3">
          <div className="flex items-center">
            <div className="text-lg font-bold">
              <Link href="/">
                <Image src='/' width={48} height={48} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#Hero" className={`nav-link ${activeSection === 'Hero' ? 'active' : ''}`}>
              Início
            </Link>
            <Link href="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>
              Sobre
            </Link>
            <Link href="#Services" className={`nav-link ${activeSection === 'Services' ? 'active' : ''}`}>
              Serviços
            </Link>
            <Link href="#Expirience" className={`nav-link ${activeSection === 'Expirience' ? 'active' : ''}`}>
              Experiência
            </Link>
            <Link href="#Testimonials" className={`nav-link ${activeSection === 'Testimonials' ? 'active' : ''}`}>
              Testemunhos
            </Link>
            <Link href="#Contact" className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}>
              Contato
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href='#' className='flex justify-center align-center border rounded-md px-3 py-2 w-[45px] h-[45px]'>
              <Image src='/question.svg' width={19} height={19} alt='Question Icon' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
