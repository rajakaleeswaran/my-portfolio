import { useContext, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider, ThemeContext } from "./theme/ThemeContext.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Certifications, Achievements } from "./components/CertificatesAndAchievements";
import Contact from "./components/Contact";

const MainScreen = () => {
  const { isDarkMode, colors, toggleTheme } = useContext(ThemeContext);
  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };
  const scrollTo = (id) => refs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  const navLinks = ["home", "about", "projects", "experience", "contact"];
  const themeStyle = {
    "--text": colors.text,
    "--muted": colors.textSecondary,
    "--accent": colors.accent,
    "--border": colors.border,
    "--card": colors.card,
    "--soft": isDarkMode ? "#172033" : "#f8fafc",
    background: colors.background,
    color: colors.text,
  };

  return (
    <div className="site-shell" style={themeStyle}>
      <nav className="navbar" aria-label="Primary navigation">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Back to home">
          Rajakaleeswaran<span className="brand-dot">.</span>
        </button>
        <div className="nav-links">
          {navLinks.map((id) => (
            <button className="nav-link" key={id} onClick={() => scrollTo(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="site-content">
        <section ref={refs.home} id="home"><Header /></section>
        <section ref={refs.about} id="about"><About /><Skills /></section>
        <section ref={refs.projects} id="projects"><Projects /></section>
        <section ref={refs.experience} id="experience"><Experience /><Certifications /><Achievements /></section>
        <section ref={refs.contact} id="contact"><Contact /></section>
        <footer className="footer">© {new Date().getFullYear()} Rajakaleeswaran · Built with React + Vite</footer>
      </main>
    </div>
  );
};

export default function App() {
  return <ThemeProvider><MainScreen /></ThemeProvider>;
}
