import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <div className="diffSection" id="about_section">
      <center>
        <p style={{ fontSize: "50px", padding: "100px" }}>About</p>
      </center>
      <div className="about-content">
        <div className="side-image">
          <img
            className={`sideImage ${isVisible ? "sideImage-appear" : ""}`}
            src="../src/assets/images/extra/e3.jpg"
            alt="Side Visual"
          />
        </div>
        <div className={`side-text ${isVisible ? "side-text-appear" : ""}`}>
          <h2>What you think about us ?</h2>
          <p>
            Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion, and directed research.
            <br />
            Educational websites can include websites that have games, videos, or topic-related resources that act as tools to enhance learning and supplement classroom teaching. These websites help make the process of learning entertaining and attractive to the student, especially in today's age.
            <br />
            Using HTML (HyperText Markup Language), CSS (Cascading Style Sheet), and JavaScript, we can make learning easier and more interesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;