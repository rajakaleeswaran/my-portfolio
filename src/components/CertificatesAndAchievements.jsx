import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  "Google Data Foundations",
  "NPTEL Programming in Java",
  "Infosys Business Analysis Training",
  "UiPath (multiple certifications)",
  "Cybersecurity Workshop",
  "MATLAB Onramp",
];

const achievements = [
  "Best Student – Level-2 Hackathon",
  "Selected among top teams in Internal Smart India Hackathon (SIH) 2025",
  "Organized college coding event",
];

export const Certifications = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <h2
        style={{
          color: colors.text,
          fontSize: "28px",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        Certifications
      </h2>

      <HoverCard style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Award size={24} color={colors.accent} style={{ minWidth: "24px" }} />
              <p
                style={{
                  color: colors.text,
                  fontSize: "16px",
                  fontWeight: "500"
                }}
              >
                {cert}
              </p>
            </div>
          ))}
        </div>
      </HoverCard>
    </SectionContainer>
  );
};

export const Achievements = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <h2
        style={{
          color: colors.text,
          fontSize: "28px",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        Achievements
      </h2>

      <HoverCard style={{ width: "100%" }}>
        {achievements.map((ach, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <CheckCircle size={22} color={colors.accent} style={{ minWidth: "22px" }} />
            <p
              style={{
                color: colors.textSecondary,
                fontSize: "16px",
                lineHeight: "1.6"
              }}
            >
              {ach}
            </p>
          </div>
        ))}
      </HoverCard>
    </SectionContainer>
  );
};