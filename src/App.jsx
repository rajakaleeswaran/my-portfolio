import { useContext, useRef } from "react";
import { ThemeProvider, ThemeContext } from "./theme/ThemeContext.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import {
  Certifications,
  Achievements,
} from "./components/CertificatesAndAchievements";
import Contact from "./components/Contact";
const MainScreen = () => {
  const { isDarkMode, colors, toggleTheme } = useContext(ThemeContext);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (id) => {
    const refs = { home: homeRef, about: aboutRef, projects: projectsRef, experience: experienceRef, contact: contactRef };
    refs[id].current?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div style={{ background: colors.background, minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: `${colors.background}cc`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h3 style={{ color: colors.text, fontSize: "22px", letterSpacing: "-0.5px" }}>Portfolio.</h3>

        <div style={{ display: "flex", gap: "15px" }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: "transparent",
                border: "none",
                color: colors.textSecondary,
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "15px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.accent)}
              onMouseLeave={(e) => (e.target.style.color = colors.textSecondary)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-primary">
            Resume
          </button>

          <button
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isDarkMode ? "flex-end" : "flex-start",
              width: "56px",
              height: "28px",
              padding: "4px",
              borderRadius: "14px",
              background: isDarkMode ? "#334155" : "#cbd5e1",
              border: "none",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle Theme"
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <div ref={homeRef}>
          <Header />
        </div>

        <div ref={aboutRef}>
          <About />
          <Skills />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={experienceRef}>
          <Experience />
          <Certifications />
          <Achievements />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "30px" }}>
          <p style={{ color: colors.textSecondary }}>
            Designed & Developed by Rajakaleeswaran
          </p>
          <p style={{ color: colors.textSecondary, fontSize: "12px" }}>
            Built with React + Vite
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
}