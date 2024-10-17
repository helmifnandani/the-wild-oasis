import { createContext } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocal;
  return <div></div>;
};

export default DarkModeContext;
