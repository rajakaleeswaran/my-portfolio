import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { Award, CheckCircle } from "lucide-react";

const certifications = ["Google Data Foundations", "NPTEL Programming in Java", "Infosys Business Analysis Training", "UiPath certifications", "Cybersecurity Workshop", "MATLAB Onramp"];
const achievements = ["Best Student – Level-2 Hackathon", "Selected among top teams in Internal Smart India Hackathon (SIH) 2025", "Organized a college coding event"];
const List = ({ title, items, Icon, colors }) => <HoverCard><div className="list-card"><h3 style={{ color: colors.text, fontFamily: "'Space Grotesk'", fontSize: 20 }}>{title}</h3>{items.map((item) => <div className="list-item" key={item}><Icon size={19} /><span>{item}</span></div>)}</div></HoverCard>;
export const Certifications = () => { const { colors } = useContext(ThemeContext); return <SectionContainer><div className="section-heading"><span className="section-kicker">Credentials</span><h2 className="section-title" style={{ color: colors.text }}>Certifications & achievements.</h2></div><div className="achievement-grid"><List title="Certifications" items={certifications} Icon={Award} colors={colors}/><List title="Achievements" items={achievements} Icon={CheckCircle} colors={colors}/></div></SectionContainer>; };
export const Achievements = () => null;
