import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="service-swipe">
      <div className="diffSection" id="services_section">
        <center>
          <p
            style={{
              fontSize: "50px",
              padding: "100px",
              paddingBottom: "40px",
              color: "#fff",
            }}
          >
            Services
          </p>
        </center>
      </div>

      <a href="#">
        <div className="s-card">
          <img
            src="../src/assets/images/icon/computer-courses.png"
            alt="Free Online Computer Courses"
          />
          <p>Accés à tout vos cours</p>
        </div>
      </a>

      <a href="subjects/jee.html">
        <div className="s-card">
          <img
            src="../src/assets/images/icon/brainbooster.png"
            alt="Building Concepts"
          />
          <p>Construire des bases pour les examens</p>
        </div>
      </a>

      <a href="subjects/jee.html#sample_papers">
        <div className="s-card">
          <img
            src="../src/assets/images/icon/papers.jpg"
            alt="Sample Papers of Competitive Exams"
          />
          <p>Accéder à des anciens examens corrigés</p>
        </div>
      </a>

      <a href="#contactus_section">
        <div className="s-card">
          <img
            src="../src/assets/images/icon/discussion.png"
            alt="Discussion with Tutors"
          />
          <p>Discuter avec vos professeurs et vos camarades</p>
        </div>
      </a>

      <a href="#contactus_section">
        <div className="s-card">
          <img
            src="../src/assets/images/icon/help.png"
            alt="24x7 Online Support"
          />
          <p>Assistance en ligne 24/7</p>
        </div>
      </a>
    </div>
  );
};

export default Services;
