import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

const Contact = () => {
  const { colors } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const handleSend = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:rajakaleeswaranhari5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionContainer>
      <h2 style={{ color: colors.text, fontSize: "28px", marginBottom: "20px" }}>
        Get In Touch
      </h2>

      <HoverCard>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* LEFT */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h3 style={{ color: colors.text, fontSize: "24px", marginBottom: "15px" }}>
              Let's build something together.
            </h3>

            <p style={{ color: colors.textSecondary, lineHeight: "1.7" }}>
              I'm open to opportunities. Feel free to reach out!
            </p>

            <div style={{ marginTop: "25px", display: "flex", flexDirection: "column", gap: "15px" }}>
              <p style={{ display: "flex", gap: "12px", alignItems: "center", color: colors.text }}>
                <Phone size={18} color={colors.accent} /> +91 9385538055
              </p>
              <p style={{ display: "flex", gap: "12px", alignItems: "center", color: colors.text }}>
                <Mail size={18} color={colors.accent} />
                rajakaleeswaranhari5@gmail.com
              </p>
              <p style={{ display: "flex", gap: "12px", alignItems: "center", color: colors.text }}>
                <MapPin size={18} color={colors.accent} /> Tamil Nadu, India
              </p>
            </div>

            <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
              <Github className="social-icon" size={24} color={colors.textSecondary} cursor="pointer" onClick={() => openLink("https://github.com/rajakaleeswaran")} />
              <Linkedin className="social-icon" size={24} color={colors.textSecondary} cursor="pointer" onClick={() => openLink("https://www.linkedin.com")} />
            </div>

            <button
              className="btn-primary"
              style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "8px" }}
              onClick={() => openLink("#")}
            >
              <Download size={18} /> Download Resume
            </button>
          </div>

          {/* RIGHT FORM */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ 
                width: "100%", marginBottom: "15px", padding: "14px",
                background: colors.background, color: colors.text,
                border: `1px solid ${colors.border}`, borderRadius: "8px" 
              }}
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: "100%", marginBottom: "15px", padding: "14px",
                background: colors.background, color: colors.text,
                border: `1px solid ${colors.border}`, borderRadius: "8px" 
              }}
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ 
                width: "100%", padding: "14px", minHeight: "130px",
                background: colors.background, color: colors.text,
                border: `1px solid ${colors.border}`, borderRadius: "8px", resize: "vertical"
              }}
            />

            <button
              className="btn-primary"
              onClick={handleSend}
              style={{ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </HoverCard>
    </SectionContainer>
  );
};

export default Contact;