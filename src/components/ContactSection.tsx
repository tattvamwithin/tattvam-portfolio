"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="glass-panel" style={{ padding: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            
            {/* Left Side: Contact Info */}
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                Ready to <span className="gradient-text">Collaborate?</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "3rem", lineHeight: 1.6 }}>
                I'm open to new opportunities, freelance projects, and exciting technical challenges. Drop me a message and I'll get back to you within 24 hours.
              </p>
              
              <div style={{ display: "flex", gap: "2rem", paddingTop: "2rem" }}>
                <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>GitHub</a>
                <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>LinkedIn</a>
                <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>Twitter</a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)", borderRadius: "12px", color: "#fff", outline: "none", fontFamily: "var(--font-inter)" }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Email</label>
                  <input type="email" placeholder="john@example.com" style={{ width: "100%", padding: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)", borderRadius: "12px", color: "#fff", outline: "none", fontFamily: "var(--font-inter)" }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." style={{ width: "100%", padding: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)", borderRadius: "12px", color: "#fff", outline: "none", resize: "none", fontFamily: "var(--font-inter)" }}></textarea>
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
