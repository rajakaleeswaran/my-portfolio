/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

// 🌙 Improved Dark Theme (LOW CONTRAST 🔥)
const darkColors = {
  background: "#0f172a",        // smooth dark blue-gray
  card: "#111827",              // softer card
  text: "#f1f5f9",              // soft white
  textSecondary: "#94a3b8",     // muted gray
  accent: "#6366f1",            // modern indigo
  border: "#1e293b",            // subtle border
};

// ☀️ Light Theme
const lightColors = {
  background: "#f1f5f9",        // soft gray/white
  card: "#ffffff",
  text: "#0f172a",
  textSecondary: "#475569",
  accent: "#6366f1",            // consistent accent color
  border: "#e2e8f0",
};

// 🎯 Design system
const baseTheme = {
  spacing: {
    xs: "6px",
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colors = isDarkMode ? darkColors : lightColors;

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 🌐 Apply background to whole page
  useEffect(() => {
    document.body.style.background = colors.background;
    document.body.style.color = colors.text;
    document.body.style.transition = "all 0.3s ease";
  }, [colors]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        colors,
        theme: baseTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};