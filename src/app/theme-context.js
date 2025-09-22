// "use client";
// import { createContext, useContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(true); // <-- ✅ yeh hai aapka main variable

//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       <div className={darkMode ? "dark-mode" : "light-mode"}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // custom hook for easier use
// export const useTheme = () => useContext(ThemeContext);
