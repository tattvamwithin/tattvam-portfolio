import React from "react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Engineer",
    company: "TechNexus Inc.",
    desc: "Spearheaded the migration of a legacy monolithic platform into a modular Next.js architecture. Improved load times by 60%."
  },
  {
    year: "2020 - 2023",
    role: "Frontend Developer",
    company: "Creative Digital Studio",
    desc: "Built award-winning, heavily animated campaign websites for Fortune 500 clients using React and precise CSS."
  },
  {
    year: "2018 - 2020",
    role: "Software Developer",
    company: "Agile Startups",
    desc: "Developed initial MVP products and scalable backends utilizing Python and PostgreSQL for early-stage companies."
  }
];

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="container" style={{ maxWidth: "900px" }}>
        <ScrollReveal>
          <h2 className="section-title">Career <span className="gradient-text">Milestones</span></h2>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="glass-panel" style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{exp.role}</h3>
                    <div style={{ color: "var(--accent-blue)", fontWeight: 500 }}>{exp.company}</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.9rem", color: "var(--text-muted)", border: "1px solid var(--glass-border)" }}>
                    {exp.year}
                  </div>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  {exp.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
