import React from "react";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      <HiOutlineMoon />
    </ButtonIcon>
  );
};

export default DarkModeToggle;
