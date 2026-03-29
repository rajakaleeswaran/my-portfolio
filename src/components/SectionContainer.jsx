import { useEffect, useState } from "react";

const SectionContainer = ({ children, style = {} }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: "all 0.6s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionContainer;