import React from "react";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="hero-title">
          Crafting Digital <br />
          <span className="gradient-text-color">Excellence.</span>
        </h1>
        <p className="hero-subtitle">
          I am Tattvam, a Senior Full Stack Engineer. I build exceptional, high-performance web applications that scale, driving real business value.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
