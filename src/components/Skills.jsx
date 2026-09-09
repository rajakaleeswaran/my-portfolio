import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";

const skillsData = [
  { category: "Languages", items: ["Java", "Python", "JavaScript"] },
  { category: "Frontend", items: ["HTML", "CSS", "React"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Data", items: ["SQL Server", "MongoDB"] },
  { category: "Engineering", items: ["REST APIs", "Cybersecurity"] },
];

const Skills = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <SectionContainer>
      <div className="section-heading"><span className="section-kicker">Toolkit</span><h2 className="section-title" style={{ color: colors.text }}>Technologies I work with.</h2></div>
      <div className="skills-grid">
        {skillsData.map((group) => <HoverCard key={group.category}><div className="skill-group"><h3 style={{ color: colors.text }}>{group.category}</h3><div className="skill-tags">{group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div></div></HoverCard>)}
      </div>
    </SectionContainer>
  );
};
export default Skills;
