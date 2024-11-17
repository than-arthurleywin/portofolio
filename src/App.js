import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
