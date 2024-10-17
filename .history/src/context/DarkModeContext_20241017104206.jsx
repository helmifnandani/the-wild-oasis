import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  const toggleDarkMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode() {
    conts context = useContext(DarkModeContext);
}

export default DarkModeProvider;
