import React, { useState } from "react";
import "./about.css";

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
        <div className="cv">
          <div className="cv-img">
            <h4>
              <a
                href="https://drive.google.com/drive/folders/1SWw__eqjYT0VcZ--N2j5SLmKOKjfORK4?hl=id"
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="content">
            {showAbout && (
              <div className="about-content">
                <p>
                  Hello, I'm Fathir Ramdan Maulani, a Grade 11 Software
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
                <div className="experience">
                  <div className="experience-item">
                    <h4>Internship at XYZ Company</h4>
                    <p>
                      Worked on front-end development using HTML, CSS, and
                      JavaScript.
                    </p>
                  </div>
                  <div className="experience-item">
                    <h4>Volunteer Developer at ABC Organization</h4>
                    <p>
                      Developed and maintained the organization's website using
                      PHP and SQL.
                    </p>
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
