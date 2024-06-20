
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Expirience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
