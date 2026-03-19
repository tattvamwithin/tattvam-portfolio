"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      padding: "2rem 0", 
      borderTop: "1px solid var(--glass-border)", 
      marginTop: "4rem",
      background: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)"
    }}>
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          &copy; {currentYear} Tattvam. All rights reserved.
        </div>
        
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>Privacy Policy</a>
          <a href="#" style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>Terms of Service</a>
        </div>
        
        <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          Designed & Built with <span style={{ color: "var(--accent-pink)" }}>♥</span>
        </div>
      </div>
    </footer>
  );
}
