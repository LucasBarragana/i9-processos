
import About from "./components/About/About";
import Tecs from "./components/About/Tecs";
import Possibilits from "./components/Possibilits/Possibilits";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePartners from "./components/Partners/HomePartners";
import Services2 from "./components/Services/Services2";
import Soluctions from "./components/Soluctions/Soluctions";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tecs />
      <Services2 />
      <Possibilits />
      <Soluctions />
      <Testimonials />
      <HomePartners />
      <Contact />
      <Footer />
    </main>
  );
}
