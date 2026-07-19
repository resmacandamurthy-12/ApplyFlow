import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <Hero
              title="ApplyFlow"
              description="Track every internship. Manage every opportunity."
              buttonLabel="Get Started"
            />
            <Features />
            <About />
            <Preview />
            <CTA />
            <Footer />
          </main>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
