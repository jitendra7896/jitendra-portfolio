import React from "react";
import { experienceData } from "../constants/workdata";
import profilePIc from "../assets/Images/profile-pic.png";
import PowerButton from "../subComponents/PowerButton";
const AboutPage = () => {
  return (
    <div className="resume-wrapper">
      <PowerButton/>
      <section className="profile section-padding">
        <div className="container">
          <div className="picture-resume-wrapper">
            <div className="picture-resume">
              <span>
                <img
                  src={profilePIc}
                  alt="Profile"
                />
              </span>
              <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -9"
                      result="cm"
                    />
                  </filter>
                </defs>
                <g filter="url(#goo)">
                  <circle
                    id="main_circle"
                    className="st0"
                    cx="171.5"
                    cy="175.6"
                    r="130"
                  />
                  {[...Array(11)].map((_, i) => (
                    <circle
                      key={i}
                      id={`circle${i}`}
                      className={`bubble${i} st1`}
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="name-wrapper">
            <h1>
              Jitendra <br /> Chatwani
            </h1>
          </div>
          <div className="clearfix"></div>
          <div className="contact-info clearfix">
            <ul className="list-titles">
              <li>Call</li>
              <li>Mail</li>
              <li>Home</li>
            </ul>
            <ul className="list-content">
              <li>+91 8559966618</li>
              <li>chatwanijitu@gmail.com</li>
              <li>Jaipur, Rajasthan, India</li>
            </ul>
          </div>
          <div className="contact-presentation">
            <p>
              <span className="bold">Skilled</span> Software Developer with 4
              years of experience in designing and implementing robust software
              solutions. Proficient in both frontend and backend technologies,
              including React and Java Spring Boot. Adept at optimizing
              performance, ensuring scalability, and delivering high-quality
              code that meets business objectives and user needs.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section-padding">
        <div className="container">
          <h3 className="experience-title">Experience</h3>

          <div className="experience-wrapper">
            {experienceData.map((item, index) => (
              <div key={index} className="company-wrapper clearfix">
                <div className="experience-title">{item.company}</div>
                <div className="time">{item.time}</div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">{item.title}</div>
                  <div className="company-description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-wrapper clearfix">
            <h3 className="section-title">Basic Skills</h3>
            <ul>
              <li className="skill-percentage">HTML / HTML5</li>
              <li className="skill-percentage">CSS / CSS3 / SASS</li>
              <li className="skill-percentage">Javascript</li>
              <li className="skill-percentage">Jquery</li>
              <li className="skill-percentage">React</li>
              <li className="skill-percentage">Java</li>
            </ul>
          </div>

          <div className="section-wrapper clearfix">
            <h3 className="section-title">Hobbies</h3>
            <p>
              <span className="bold text-white">Plan and Prepare Meals:</span>{" "}
              Create weekly meal plans, shop for ingredients, and cook
              nutritious meals at home.
            </p>
            <p>
              <span className="bold text-white">Problems Solving:</span> Like to
              solve problems and handle new challenges for improving logical
              reasoning.
            </p>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
    </div>
  );
};

export default AboutPage;
