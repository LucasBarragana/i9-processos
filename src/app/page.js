
import About from "./components/About/About";
import Tecs from "./components/About/Tecs";
import Anonimous from "./components/Anonimous/Anonimous";
import HomePage from "./components/Cards/CarouselPage";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Expirience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePartners from "./components/Partners/HomePartners";
import Services2 from "./components/Services/Services2";
import Soluctions from "./components/Soluctions/Soluctions";

export default function Home() {
  return (
    <main className="max-w-screen-2xl box-border">
      <Hero />
      <About />
      <Tecs />
      <Services2 />
      <Anonimous />
      <Soluctions />
      <Experience />
      <HomePage />
      <HomePartners />
      <Contact />
      <Footer />
    </main>
  );
}
