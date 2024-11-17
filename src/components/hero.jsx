import "./hero.css";
import heroImg from "./img/hero.png";

function Hero() {
  const scrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-text" data-aos="fade-right">
        <h1>Hi, I'm Fathir Ramdan Maulani</h1>
        <p>a Web Developer</p>
        <span>A web development and student from SMKN 1 BANJAR</span>
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
      <div className="hero-img-container" data-aos="zoom-in-up">
        <div className="hero-img-frame">
          <img src={heroImg} alt="Hero" />
          <div className="orbit">
            <div className="planet"></div>
            <div className="meteor"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
