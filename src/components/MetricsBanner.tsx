import React from "react";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Global Uptime" }
];

export default function MetricsBanner() {
  return (
    <section style={{ padding: "0 0 4rem 0" }}>
      <div className="container">
        <ScrollReveal>
          <div className="glass-panel" style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexWrap: "wrap",
            padding: "2.5rem 4rem",
            gap: "2rem"
          }}>
            {metrics.map((metric, index) => (
              <div key={index} style={{ textAlign: "center", flex: "1 1 auto" }}>
                <div style={{ 
                  fontSize: "3.5rem", 
                  fontWeight: 800, 
                  fontFamily: "var(--font-outfit)", 
                  background: "linear-gradient(to bottom, #fff, rgba(255,255,255,0.3))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.2rem",
                  lineHeight: 1
                }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600 }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
