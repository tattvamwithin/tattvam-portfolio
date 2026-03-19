"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="glass-panel contact-grid">
            
            {/* Left Side: Contact Info */}
            <div className="contact-info">
              <h2 className="contact-title">
                Ready to <span className="gradient-text">Collaborate?</span>
              </h2>
              <p className="contact-text">
                I'm open to new opportunities, freelance projects, and exciting technical challenges. Drop me a message and I'll get back to you within 24 hours.
              </p>
              
              <div className="contact-socials">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
