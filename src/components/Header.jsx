import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";

const Header = () => {
  const { colors } = useContext(ThemeContext);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <SectionContainer>
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        {/* Greeting */}
        <p
          style={{
            color: colors.accent,
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Hello, I'm RAJAKALEESWARAN
        </p>

        {/* Title */}
        <h1 style={{ color: colors.text, fontSize: "48px", margin: "10px 0", letterSpacing: "-1px" }}>
          Full Stack Developer &
        </h1>

        <h1 style={{ color: colors.accent, fontSize: "48px", letterSpacing: "-1px" }}>
          Cybersecurity Enthusiast
        </h1>

        {/* Tagline */}
        <p
          style={{
            color: colors.textSecondary,
            maxWidth: "600px",
            margin: "20px auto",
          }}
        >
          I build scalable, secure, and high-performance web applications using
          React, Node.js, and SQL Server.
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "30px" }}>
          <button
            className="btn-primary"
            style={{ marginRight: "14px" }}
          >
            View My Work
          </button>

          <button
            className="btn-secondary"
            style={{
              border: `1px solid ${colors.textSecondary}`,
              color: colors.text,
            }}
            onClick={() =>
              (window.location.href =
                "mailto:rajakaleeswaranhari5@gmail.com")
            }
          >
            Let's Talk
          </button>
        </div>

        {/* Social Icons */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Github
            className="social-icon"
            size={24}
            color={colors.textSecondary}
            onClick={() => openLink("https://github.com/rajakaleeswaran")}
          />

          <Linkedin
            className="social-icon"
            size={24}
            color={colors.textSecondary}
            onClick={() => openLink("https://www.linkedin.com")}
          />

          <Twitter
            className="social-icon"
            size={24}
            color={colors.textSecondary}
            onClick={() => openLink("https://twitter.com")}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Header;