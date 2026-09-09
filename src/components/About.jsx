import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { Code2 } from "lucide-react";

const About = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <SectionContainer>
      <div className="section-heading"><span className="section-kicker">About</span><h2 className="section-title" style={{ color: colors.text }}>Building with curiosity and purpose.</h2></div>
      <div className="about-grid">
        <HoverCard><div className="about-badge"><Code2 /></div></HoverCard>
        <HoverCard><div className="about-copy"><p>I’m a full-stack developer who enjoys turning ideas into useful software. My work spans frontend interfaces, backend APIs, databases and security-minded development. I learn by building, debugging and improving real projects.</p></div></HoverCard>
      </div>
    </SectionContainer>
  );
};
export default About;
