
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Expirience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Soluctions from "./components/Soluctions/Soluctions";
import PageTestimonials from "./components/Testimonials2/PageTestimonials";

export default function Home() {
  return (
    <main className="bg-blue-100">
      <Hero />
      <About />
      <Services />
      <Soluctions />
      <Experience />
      <PageTestimonials />
      <Contact />
      <Footer />
    </main>
  );
}
