import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";

const experienceData = [
  {
    role: "Full Stack Intern",
    company: "Ramco Cements Ltd",
    date: "July 2025",
    bullets: [
      "Built a real-time app using Node.js & SQL Server",
      "Developed REST APIs",
      "Improved system performance",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Supraja Technologies",
    date: "Aug 2025",
    bullets: [
      "Worked on cybersecurity basics",
      "Built password strength checker",
      "Learned secure coding",
    ],
  },
];

const Experience = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <h2 style={{ color: colors.text, fontSize: "28px", marginBottom: "20px" }}>
        Experience
      </h2>

      <HoverCard>
        {experienceData.map((exp, index) => (
          <div key={index} style={{ marginBottom: "30px", borderLeft: `2px solid ${colors.border}`, paddingLeft: "20px" }}>
            <h3 style={{ color: colors.text, fontSize: "20px", marginBottom: "4px" }}>{exp.role}</h3>
            <p style={{ color: colors.accent, fontWeight: "500", fontSize: "16px" }}>{exp.company}</p>
            <p style={{ color: colors.textSecondary, fontSize: "14px", marginTop: "4px", marginBottom: "12px" }}>{exp.date}</p>

            <ul style={{ marginTop: "10px", paddingLeft: "18px" }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{ color: colors.textSecondary, marginBottom: "8px", lineHeight: "1.6" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </HoverCard>
    </SectionContainer>
  );
};

export default Experience;