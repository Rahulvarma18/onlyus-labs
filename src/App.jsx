import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";
import Approach from "./components/Approach";
import Features from "./components/Features";
import Healthcare from "./components/Healthcare";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Approach />
        <Features />
        <Healthcare />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}