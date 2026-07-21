import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Features from "../components/landing/Features";
import Preview from "../components/landing/Preview";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Preview />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
