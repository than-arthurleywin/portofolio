import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
