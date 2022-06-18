import React from "react";
import "./Hero.scss";
import { heroBg } from "../../../assets";

const heroContent = {
  title: "Paragon Oak - award winning oak framed buildings",
  slogan: "Made With Pride",
};

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="hero_content">
        <p>{heroContent.title}</p>
        <h3>{heroContent.slogan}</h3>
      </div>
      <div className="hero_scroll-down"></div>
      <div
        className="hero_subtitle"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        in Yorkshire
      </div>
    </section>
  );
};

export default Hero;
