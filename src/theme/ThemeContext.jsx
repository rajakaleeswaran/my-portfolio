/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

const darkColors = { background: "#080b14", card: "#0f1422", text: "#f8fafc", textSecondary: "#a8b2c5", accent: "#818cf8", border: "#20283a" };
const lightColors = { background: "#f7f8fc", card: "#ffffff", text: "#0b1020", textSecondary: "#566176", accent: "#4f46e5", border: "#e5e7ef" };
const baseTheme = { spacing: { xs: "6px", sm: "10px", md: "16px", lg: "24px", xl: "32px" }, radius: { sm: "8px", md: "12px", lg: "20px" } };
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const colors = isDarkMode ? darkColors : lightColors;
  const toggleTheme = () => setIsDarkMode((prev) => { const next = !prev; localStorage.setItem("portfolio-theme", next ? "dark" : "light"); return next; });
  useEffect(() => { document.body.style.background = colors.background; document.body.style.color = colors.text; }, [colors]);
  return <ThemeContext.Provider value={{ isDarkMode, colors, theme: baseTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
