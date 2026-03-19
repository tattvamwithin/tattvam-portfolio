import React from "react";

export default function MarqueeSection() {
  const words = ["CREATIVE", "ENGINEERING", "SCALABLE", "ARCHITECTURE", "WORLD CLASS", "DESIGN", "SYSTEMS"];
  
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "3rem 0", background: "var(--glass-bg)", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)", margin: "2rem 0" }}>
      <div style={{ display: "inline-block", animation: "marquee 30s linear infinite" }}>
        {[...words, ...words, ...words].map((word, i) => (
          <span key={i} style={{ 
            fontSize: "3rem", 
            fontWeight: 800, 
            fontFamily: "var(--font-outfit)", 
            marginRight: "4rem",
            color: i % 2 === 0 ? "var(--text-primary)" : "transparent",
            WebkitTextStroke: i % 2 !== 0 ? "1px rgba(255,255,255,0.5)" : "none"
          }}>
            {word} <span style={{ color: "var(--accent-blue)", marginLeft: "4rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
