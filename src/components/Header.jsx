import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { ArrowDown, Github, Mail } from "lucide-react";

const Header = () => {
  const { colors } = useContext(ThemeContext);
  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="hero" style={{ color: colors.text }}>
      <div className="hero-inner">
        <span className="eyebrow">Available for opportunities</span>
        <h1>Hi, I'm Rajakaleeswaran.<br /><span className="gradient-text">I build for the web.</span></h1>
        <p className="hero-copy">
          Full-stack developer focused on building clean, secure and practical digital experiences with Java, JavaScript, React, Node.js and SQL.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Explore my work <ArrowDown size={16} />
          </button>
          <a className="btn-secondary" href="mailto:rajakaleeswaranhari5@gmail.com">Let's talk</a>
        </div>
        <div className="hero-socials">
          <button className="social-button" onClick={() => open("https://github.com/rajakaleeswaran")} aria-label="GitHub"><Github size={19} /></button>
          <a className="social-button" href="mailto:rajakaleeswaranhari5@gmail.com" aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
    </div>
  );
};
export default Header;
