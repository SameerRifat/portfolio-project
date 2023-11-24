"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { PiHandWaving } from "react-icons/pi";
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" max-w-[50rem] text-center mb-28 sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative rounded-full">
          <motion.div
            className="rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/dp.png"
              alt="Sameer dp"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-lg"
            />
          </motion.div>
          <motion.span
            className="absolute rounded-full bottom-1 right-1 bg-white px-0.5 w-6 h-6 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            <PiHandWavingFill style={{ color: "orange", fontSize: "20px" }} />
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   ease: "easeIn",
        //   //   duration: 0.1,
        // }}
      >
        <span className="font-bold">Hello, I'm Sameer.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className=" flex flex-col sm:flex-row gap-4 items-center justify-center font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 rounded-full flex items-center justify-between gap-2
                    outline-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <FaArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 rounded-full flex items-center justify-between gap-2 border border-black/10
                    outline-none hover:scale-110 focus:scale-110 active:scale-105 transition-all cursor-pointer dark:bg-white/10"
        >
          Download Resume{" "}
          <MdOutlineFileDownload className="text-xl opacity-90 group-hover:translate-y-1 transition-all" />
        </a>

        <a
          className="bg-white p-4 rounded-full flex items-center justify-between gap-2 border border-black/10 cursor-pointer text-gray-900
                    outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <FaLinkedin className="text-xl" />
        </a>

        <a
          className="bg-white p-4 rounded-full flex items-center justify-between gap-2 border border-black/10 cursor-pointer text-gray-900
                    outline-none hover:scale-[1.15] focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithub className="text-xl" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
