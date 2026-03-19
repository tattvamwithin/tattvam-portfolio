import React from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Global Fintech Architecture",
    category: "Financial Systems",
    description: "Architected and built a highly secure, distributed transaction processing engine capable of handling 10,000+ TPS with sub-millisecond latency. Designed the entire microservice ecosystem and real-time WebSocket dashboard for institutional traders.",
    tech: ["Next.js", "Go", "PostgreSQL", "Kafka"],
    link: "#",
    gradient: "linear-gradient(135deg, #0A84FF, #001F3F)"
  },
  {
    title: "AI Generative Engine",
    category: "Machine Learning",
    description: "Developed a comprehensive abstraction layer and UI pipeline for interacting with complex LLMs. The platform allows enterprise clients to securely construct, test, and deploy custom prompt chains directly into their existing cloud infrastructure.",
    tech: ["Python", "PyTorch", "React", "AWS"],
    link: "#",
    gradient: "linear-gradient(135deg, #BF5AF2, #1A0B2E)"
  },
  {
    title: "Next-Gen SaaS Dashboard",
    category: "Product Design",
    description: "A complete overhaul of a legacy enterprise analytics suite. Focused on extreme performance, real-time data visualization using D3.js, and a bespoke design system that reduced user task completion time by 40%.",
    tech: ["TypeScript", "D3.js", "Tailwind", "tRPC"],
    link: "#",
    gradient: "linear-gradient(135deg, #FF375F, #2E0B14)"
  }
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured <span className="gradient-text">Case Studies</span></h2>
        </ScrollReveal>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="glass-panel" style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", padding: "1.5rem", gap: "4rem", alignItems: "center", flexWrap: "wrap", position: "relative", overflow: "hidden" }}>
                  
                  {/* Image/Visual Placeholder */}
                  <div style={{ 
                    flex: "1 1 400px", 
                    minHeight: "400px", 
                    borderRadius: "16px", 
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {/* Abstract overlapping circles for visual interest */}
                    <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", position: "absolute", top: "-50px", left: "-50px", backdropFilter: "blur(10px)" }}></div>
                    <div style={{ width: "150px", height: "150px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", position: "absolute", bottom: "20px", right: "20px" }}></div>
                    <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "4px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>[ Project Visual ]</span>
                  </div>

                  {/* Content Area */}
                  <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", padding: "2rem 0" }}>
                    <div style={{ color: "var(--accent-blue)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "0.5rem" }}>
                      {project.category}
                    </div>
                    <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", lineHeight: 1.1 }}>{project.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                      {project.description}
                    </p>
                    
                    <div style={{ marginBottom: "2.5rem" }}>
                      {project.tech.map(t => (
                        <span key={t} className="badge" style={{ fontSize: "0.85rem", padding: "0.3rem 0.8rem", background: "transparent" }}>{t}</span>
                      ))}
                    </div>
                    
                    <a href={project.link} className="btn-secondary" style={{ alignSelf: "flex-start", padding: "0.8rem 2rem", fontSize: "1rem" }}>
                      Explore Case Study →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
