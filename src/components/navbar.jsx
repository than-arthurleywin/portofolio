import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToComponent = (componentName) => {
    const component = document.querySelector(`.${componentName}`);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">
            <span className="logo-highlight">AL</span>PORTFOLIO
          </a>
        </div>
        <div className={`menu ${isMobileMenuOpen ? "active" : ""}`}>
          {["hero", "about", "portfolio", "contact"].map((section) => (
            <p key={section}>
              <a
                href={`#${section}`}
                onClick={() => scrollToComponent(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </p>
          ))}
        </div>
        <div className="menu-bar" onClick={toggleMobileMenu}>
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            size="sm"
            className="menu-icon"
          />
        </div>
      </nav>
      <div className={`menu-mobile ${isMobileMenuOpen ? "active" : ""}`}>
        {["hero", "about", "portfolio", "contact"].map((section) => (
          <p key={section}>
            <a href={`#${section}`} onClick={() => scrollToComponent(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
