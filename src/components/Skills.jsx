import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";

const skillsData = [
  { category: "Languages", items: ["Java", "Python", "JavaScript"] },
  { category: "Frontend", items: ["HTML", "CSS", "React"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["SQL Server", "MongoDB"] },
  { category: "Concepts", items: ["REST APIs", "Cybersecurity"] },
];

const Skills = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <h2
        style={{
          color: colors.text,
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        Technical Skills
      </h2>

      <HoverCard colorTheme={colors}>
        {skillsData.map((group, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            
            {/* Category */}
            <h3
              style={{
                color: colors.text,
                marginBottom: "10px",
              }}
            >
              {group.category}
            </h3>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="skill-pill"
                  style={{
                    padding: "10px 18px",
                    borderRadius: "30px",
                    border: `1px solid ${colors.border}`,
                    background: colors.background,
                    color: colors.text,
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "default",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}
      </HoverCard>
    </SectionContainer>
  );
};

export default Skills;