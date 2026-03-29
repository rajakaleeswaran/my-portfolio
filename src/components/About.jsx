import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { User } from "lucide-react";

const About = () => {
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
        About Me
      </h2>

      <HoverCard
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            padding: "16px",
            borderRadius: "20px",
            background: colors.background,
          }}
        >
          <User size={28} color={colors.accent} />
        </div>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "800px",
          }}
        >
          I’m a Full Stack Developer with hands-on experience in building
          real-world applications using React, Node.js, and SQL Server. I focus
          on writing clean, scalable, and secure code while solving practical
          problems.
        </p>
      </HoverCard>
    </SectionContainer>
  );
};

export default About;