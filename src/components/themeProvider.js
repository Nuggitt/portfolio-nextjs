"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ darkMode: null, setDarkMode: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(null);

  // Just read the class the no-flash script already set
  useEffect(() => {
    const initial = document.documentElement.classList.contains("dark");
    setDarkMode(initial);
  }, []);

  // Keep DOM + storage in sync when user toggles
  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
