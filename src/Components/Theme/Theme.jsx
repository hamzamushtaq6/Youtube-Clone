import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// Custom Hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
