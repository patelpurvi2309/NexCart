import React from "react";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">

        <h2 className="about-title">About Us</h2>

        <p className="about-text">
          <strong>NexCart</strong> is an online shopping platform designed to
          provide a smooth, secure, and user-friendly shopping experience for
          customers across different product categories.
        </p>

        <div className="about-section">
          <h4>Our Mission</h4>
          <p>
            To deliver quality products at affordable prices while ensuring
            customer satisfaction and a seamless shopping experience.
          </p>
        </div>

        <div className="about-section">
          <h4>Our Vision</h4>
          <p>
            To become a trusted and accessible online marketplace for everyone.
          </p>
        </div>

        <div className="about-section">
          <h4>Why Choose Us?</h4>
          <ul className="about-list">
            <li>✔ Wide range of products</li>
            <li>✔ Secure payments</li>
            <li>✔ Easy returns</li>
            <li>✔ Fast and reliable delivery</li>
          </ul>
        </div>

        <div className="about-section">
          <h4>Technology</h4>
          <p>
            This project is built using <strong>React, React Router, Axios </strong>
            and modern UI development practices.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
