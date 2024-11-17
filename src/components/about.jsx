import React, { useState } from "react";
import "./about.css";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import bs from "./img/bs.png";
import figma from "./img/figma.png";
import php from "./img/php.png";

function About() {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowExperience(false);
  };

  const toggleExperience = () => {
    setShowAbout(false);
    setShowExperience(true);
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="cv" data-aos="zoom-in">
          <div className="cv-img">
            <h4>
              <a
                href="https://drive.google.com/drive/folders/1SWw__eqjYT0VcZ--N2j5SLmKOKjfORK4?hl=id"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                View CV
              </a>
            </h4>
          </div>
        </div>
        <div className="about-me">
          <div className="menu-tabs">
            <div
              className="tab"
              onClick={toggleAbout}
              style={{ color: showAbout ? "#f4f4f9" : "#00798c" }}
            >
              About Me
            </div>
            <div
              className="tab"
              onClick={toggleExperience}
              style={{ color: showExperience ? "#f4f4f9" : "#00798c" }}
            >
              Experience
            </div>
          </div>
          <div className="content" data-aos="zoom-in" >
            {showAbout && (
              <div className="about-content">
                <p>
                  Hello, I'm Fathir Ramdan Maulani, a Grade 12 Software
                  Engineering 1 student who has been interested in programming
                  since Grade 10. That learning experience led to my interest in
                  web development.
                  <br />
                  <br />I am also active in the PMR organisation at school,
                  where I learned about teamwork and solidarity values. The
                  combination of an interest in technology and a passion for
                  helping others has formed a strong foundation in my journey as
                  a passionate programmer.
                </p>
              </div>
            )}
            {showExperience && (
              <div className="experience-content">
                <div className="experience-grid">
                  <div className="experience-1 scale">
                    <img src={html} alt="" />
                    <h4>HTML</h4>
                  </div>
                  <div className="experience-2 scale">
                    <img src={css} alt="" />
                    <h4>CSS</h4>
                  </div>
                  <div className="experience-3 scale">
                    <img src={js} alt="" />
                    <h4>JS</h4>
                  </div>
                  <div className="experience-4 scale">
                    <img src={figma} alt="" />
                    <h4>Figma</h4>
                  </div>
                  <div className="experience-5 scale">
                    <img src={php} alt="" />
                    <h4>php</h4>
                  </div>
                  <div className="experience-6 scale">
                    <img src={bs} alt="" />
                    <h4>Bootstraps</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
