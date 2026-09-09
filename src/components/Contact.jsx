import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import SectionContainer from "./SectionContainer";
import HoverCard from "./HoverCard";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";

const Contact = () => {
  const { colors } = useContext(ThemeContext);
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [message, setMessage] = useState("");
  const handleSend = (event) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href = `mailto:rajakaleeswaranhari5@gmail.com?subject=${subject}&body=${body}`; };
  return <SectionContainer><div className="section-heading"><span className="section-kicker">Contact</span><h2 className="section-title" style={{ color: colors.text }}>Have a project or opportunity?</h2><p className="section-subtitle">I’m open to conversations about internships, full-time opportunities and interesting software projects.</p></div><HoverCard><div className="contact-card"><div className="contact-copy"><h3 style={{ color: colors.text }}>Let’s build something useful.</h3><p>Send a message and your email client will open with the details ready to go.</p><div className="contact-details"><span className="contact-detail"><Mail size={17}/>rajakaleeswaranhari5@gmail.com</span><span className="contact-detail"><Phone size={17}/>+91 9385538055</span><span className="contact-detail"><MapPin size={17}/>Tamil Nadu, India</span><a className="contact-detail" href="https://github.com/rajakaleeswaran" target="_blank" rel="noreferrer"><Github size={17}/>github.com/rajakaleeswaran</a></div></div><form className="contact-form" onSubmit={handleSend}><input required aria-label="Name" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)}/><input required type="email" aria-label="Email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/><textarea required aria-label="Message" placeholder="Tell me a little about your message..." value={message} onChange={(e)=>setMessage(e.target.value)}/><button className="btn-primary" type="submit"><Send size={16}/> Send message</button></form></div></HoverCard></SectionContainer>;
};
export default Contact;
