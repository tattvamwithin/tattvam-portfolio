"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="nav-brand">
        Tattvam.
      </a>
      
      {/* Mobile Burger Toggle */}
      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#services" onClick={() => setIsOpen(false)}>Expertise</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Career</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
        <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Let's Talk</a>
      </nav>
    </header>
  );
}
