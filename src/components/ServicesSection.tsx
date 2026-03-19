"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Web / App Development",
    description: "Architecting and developing high-performance, scalable full-stack applications tailored to complex business requirements.",
    icon: "💻"
  },
  {
    title: "Intelligent Automation",
    description: "Engineering robust workflow automations and data pipelines to eliminate manual tasks and accelerate productivity.",
    icon: "⚡"
  },
  {
    title: "Modern Serverless",
    description: "Deploying ultra-fast, globally distributed edge applications leveraging Vercel infrastructure and Neon Serverless Postgres.",
    icon: "☁️"
  },
  {
    title: "Custom CRM/ERP",
    description: "Building bespoke enterprise resource planning and customer relationship systems to centralize and streamline operations.",
    icon: "🏢"
  },
  {
    title: "3D Product Rendering",
    description: "Specialized expertise in Blender for high-end jewelry and product rendering, delivering photorealistic, premium visuals.",
    icon: "💎"
  }
];

export default function ServicesSection() {
  return (
    <section className="section" id="services" style={{ padding: "8rem 0" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "flex-start" }}>
        
        {/* Left Side: Sticky Title */}
        <div style={{ 
          flex: "1 1 300px", 
          position: "sticky", 
          top: "150px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          <ScrollReveal>
            <div style={{ color: "var(--accent-blue)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px" }}>Capabilities</div>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.1, margin: "1rem 0" }}>
              My <span className="gradient-text">Expertise</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "400px" }}>
              I deliver end-to-end solutions, bridging the gap between rigorous engineering and visionary design. Here is what I bring to the table.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side: Scrolling Cards */}
        <div style={{ flex: "2 1 600px", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0}>
              <div 
                className="glass-panel" 
                style={{ 
                  padding: "3rem", 
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem"
                }}
              >
                {/* Decorative Background Orb */}
                <div style={{ 
                  position: "absolute", 
                  top: "-50px", 
                  right: "-50px", 
                  width: "150px", 
                  height: "150px", 
                  borderRadius: "50%", 
                  background: `radial-gradient(circle, ${index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'} 0%, transparent 70%)`,
                  opacity: 0.2,
                  filter: "blur(20px)"
                }}></div>

                <div style={{ fontSize: "3rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.5px" }}>{service.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px" }}>
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
