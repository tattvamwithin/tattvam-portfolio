"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const skills = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Cloud Architecture", "Shopify Plus"];

export default function AboutSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Dynamic local time updating every second
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">The <span className="gradient-text">Details</span></h2>
        </ScrollReveal>
        
        {/* Bento Box Grid */}
        <div className="bento-grid">
          
          {/* Main Journey Box */}
          <div className="glass-panel bento-journey">
            <ScrollReveal>
              <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Journey</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                I am a passionate Full Stack Developer focused on building incredibly robust, scalable applications. My engineering philosophy merges deep technical architectural knowledge with an uncompromising eye for top-tier, Awwwards-level design.
              </p>
            </ScrollReveal>
          </div>

          {/* Status & Location Box */}
          <div className="glass-panel bento-status">
            <ScrollReveal delay={100}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34C759", boxShadow: "0 0 10px #34C759", animation: "pulse 2s infinite" }}></div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>Available for Work</span>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-outfit)" }}>{time || "Loading..."}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Global Availability</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Connect / Social Box */}
          <div className="glass-panel bento-connect">
            <ScrollReveal delay={200}>
              <a href="#contact" className="bento-link" style={{ fontSize: "1.2rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s" }}>
                Let's get in touch <span style={{ fontSize: "1.5rem", color: "var(--accent-purple)" }}>→</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Tech Stack Box */}
          <div className="glass-panel bento-tech">
             <ScrollReveal delay={300}>
               <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                 <span style={{ fontWeight: 700, marginRight: "1rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px" }}>Core Tech //</span>
                 {skills.map(skill => (
                   <span key={skill} className="badge" style={{ fontSize: "1rem", padding: "0.5rem 1.2rem", background: "rgba(255,255,255,0.08)" }}>{skill}</span>
                 ))}
               </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
