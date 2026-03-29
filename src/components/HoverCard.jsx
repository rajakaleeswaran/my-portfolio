import { useState, useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const HoverCard = ({ children, style = {}, onClick }) => {
  const [hover, setHover] = useState(false);
  const { colors } = useContext(ThemeContext);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        padding: "20px",
        borderRadius: "16px",
        background: colors.card,
        border: `1px solid ${colors.border}`,
        boxShadow: hover
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default HoverCard;