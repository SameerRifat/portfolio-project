"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const Header = () => {
  // const [activeSection, setActiveSection] = useState("Home");
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[7rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full flex justify-center p-2 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: "-100%", x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        // transition={{
        //   ease: 'easeIn',
        //   // delay: 0.1,
        // }}
      >
        <ul className="w-[22rem] sm:w-full h-full flex flex-wrap sm:flex-nowrap justify-center gap-y-1 gap-x-3 sm:gap-0 sm:justify-between items-center ">
          {links.map((link) => (
            <li
              key={link.hash}
              className={clsx(
                "flex justify-center items-center rounded-3xl"
                // {"bg-gray-100": activeSection === link.name,}
              )}
              // layoutId="activeSection"
              // transition={{
              //   type: "spring",
              //   stiffness: 380,
              //   damping: 30,
              // }}
            >
              <Link
                href={link.hash}
                // className={clsx(
                //   "py-1 px-3 flex justify-center items-center rounded-3xl relative dark:text-gray-500 dark:hover:text-gray-300",
                //   { " dark:text-gray-200": activeSection === link.name }
                // )}
                className={clsx(
                  "py-1 px-3 flex justify-center items-center rounded-3xl relative",
                  {
                    "dark:text-gray-500 dark:hover:text-gray-300": activeSection !== link.name,
                    "dark:text-gray-200": activeSection === link.name,
                  }
                )}
                onClick={() => {setActiveSection(link.name); setTimeOfLastClick(Date.now())}}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 border-2 border-red-500"
      >

      </nav> */}
      {/* <ul className="border2 border-red-500 w-[22rem] flex flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">

      </ul> */}
    </header>
  );
};

export default Header;
