import { useEffect, useState } from "react";

function AboutMe({ className }) {
  return (
    <div className={className} id="aboutMeSection">
      <div className="about-me-header section-header-container">
        <h3 className="section-header-text">About Me</h3>
        <hr className="visual-line"></hr>
      </div>
      <div className="about-me-content">
        Hi, my name is Camerone Stoney and I like to make things on the web. In
        2019 I completed a full stack web development boot camp after dabbling
        in tech for a while. Since that time, I have been doing web development
        and analytics implementation full time with little side projects along
        the way.
      </div>
      <picture className="about-me-picture">
        <img
          src="/images/cameroneStoney.png"
          alt="Camerone Stoney"
          className="self-image"
        />
      </picture>
    </div>
  );
}

export default AboutMe;
