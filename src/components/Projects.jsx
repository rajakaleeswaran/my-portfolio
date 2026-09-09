import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { ExternalLink, Folder, Github } from "lucide-react";

const projectsData = [
  { title: "Vehicle Insurance Verification System", description: "Full-stack application for structured insurance data and document workflows.", stack: ["Node.js", "Express", "SQL Server"], github: "https://github.com/rajakaleeswaran" },
  { title: "Student Activity Tracking System", description: "Mentor-oriented platform for organizing and tracking student activities.", stack: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"], github: "https://github.com/rajakaleeswaran" },
  { title: "Password Strength Checker", description: "Security-focused utility that evaluates password quality using validation rules.", stack: ["Python", "JavaScript"], github: "https://github.com/rajakaleeswaran" },
];

const Projects = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <SectionContainer>
      <div className="section-heading"><span className="section-kicker">Selected work</span><h2 className="section-title" style={{ color: colors.text }}>Projects that solve problems.</h2><p className="section-subtitle">A selection of practical projects across full-stack development, automation and security.</p></div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <HoverCard key={project.title} style={{}}>
            <article className="project-card">
              <div className="project-icon"><Folder size={20} /></div>
              <h3 style={{ color: colors.text }}>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.stack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}</div>
              <div className="project-actions"><a className="btn-primary" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a className="btn-secondary" href={project.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Explore</a></div>
            </article>
          </HoverCard>
        ))}
      </div>
    </SectionContainer>
  );
};
export default Projects;
