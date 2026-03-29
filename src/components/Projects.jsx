import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const projectsData = [
  {
    title: "Vehicle Insurance Verification System",
    description:
      "A full-stack web app handling structured data and document uploads.",
    stack: ["Node.js", "Express", "SQL Server"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Student Activity Tracking System",
    description:
      "A mentor-based platform improving student data tracking.",
    stack: ["HTML", "CSS", "JS", "Node.js", "SQL Server"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Password Strength Checker",
    description:
      "Tool to evaluate password strength using validation logic.",
    stack: ["Python", "JavaScript"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

const Projects = () => {
  const { colors } = useContext(ThemeContext);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <SectionContainer>
      <h2 style={{ color: colors.text, fontSize: "28px", marginBottom: "20px" }}>
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {projectsData.map((project, index) => (
          <HoverCard key={index} colorTheme={colors}>
            <div style={{ marginBottom: "10px" }}>
              <Folder size={20} color={colors.accent} />
            </div>

            <h3 style={{ color: colors.text }}>{project.title}</h3>

            <p style={{ color: colors.textSecondary }}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div style={{ marginTop: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: colors.background,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
              <button
                className="btn-primary"
                onClick={() => openLink(project.github)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Github size={16} /> GitHub
              </button>

              <button
                className="btn-secondary"
                onClick={() => openLink(project.demo)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: `1px solid ${colors.textSecondary}`,
                  color: colors.text,
                }}
              >
                <ExternalLink size={16} /> Demo
              </button>
            </div>
          </HoverCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;