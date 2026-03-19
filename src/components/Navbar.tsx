import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="nav-brand">
        Tattvam.
      </a>
      <nav className="nav-links">
        <a href="#services">Expertise</a>
        <a href="#experience">Career</a>
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact" className="nav-cta">Let's Talk</a>
      </nav>
    </header>
  );
}
