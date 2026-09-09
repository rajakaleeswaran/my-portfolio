import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";

const experienceData = [
  { role: "Full Stack Intern", company: "Ramco Cements Ltd", date: "July 2025", bullets: ["Built a real-time application with Node.js and SQL Server", "Developed REST APIs for application workflows", "Worked on performance and data-handling improvements"] },
  { role: "Cybersecurity Intern", company: "Supraja Technologies", date: "August 2025", bullets: ["Applied cybersecurity fundamentals to practical tasks", "Built a password strength checker", "Explored secure coding practices"] },
];

const Experience = () => {
  const { colors } = useContext(ThemeContext);
  return <SectionContainer><div className="section-heading"><span className="section-kicker">Experience</span><h2 className="section-title" style={{ color: colors.text }}>Where I’ve been learning by doing.</h2></div><div className="timeline">{experienceData.map((exp) => <HoverCard key={exp.company}><article className="experience-card"><div><h3 style={{ color: colors.text }}>{exp.role}</h3><p className="experience-company">{exp.company}</p><ul className="experience-list">{exp.bullets.map((item) => <li key={item}>{item}</li>)}</ul></div><span className="experience-date">{exp.date}</span></article></HoverCard>)}</div></SectionContainer>;
};
export default Experience;
