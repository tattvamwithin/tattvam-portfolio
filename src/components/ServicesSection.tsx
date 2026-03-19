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
    <section className="section" id="services">
      <div className="container services-container">
        
        {/* Left Side: Sticky Title */}
        <div className="services-sidebar">
          <ScrollReveal>
            <div className="services-label">Capabilities</div>
            <h2 className="services-title">
              My <span className="gradient-text">Expertise</span>
            </h2>
            <p className="services-desc">
              I deliver end-to-end solutions, bridging the gap between rigorous engineering and visionary design. Here is what I bring to the table.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side: Scrolling Cards */}
        <div className="services-list">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0}>
              <div className="glass-panel service-card">
                {/* Decorative Background Orb */}
                <div className="service-orb" style={{ 
                  background: `radial-gradient(circle, ${index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'} 0%, transparent 70%)`
                }}></div>

                <div className="service-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">
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
