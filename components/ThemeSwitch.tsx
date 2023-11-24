"use client";

import { useTheme } from "@/context/ThemeContextProvider";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// type Theme = "light" | "dark";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme()
//   const [theme, setTheme] = useStat e<Theme>("light");

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("theme") as Theme | null;
//     if (localTheme) {
//       setTheme(localTheme);
//       if (localTheme === "dark") {
//         document.documentElement.classList.add("dark");
//       }
//     } else if (window.matchMedia("(prefer-color-sheme: dark)").matches) {
//       setTheme("dark");
//       document.documentElement.classList.add("dark")
//     }
//   }, []);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
