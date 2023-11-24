"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.75);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index
        }
      };
    },
  };

  return (
    <section ref={ref} id="skills" className="max-w-[42rem] mb-28 text-center sm:mb-40 scroll-mt-28">
      <SectionHeading>Skills</SectionHeading>
      <motion.ul className="flex flex-wrap gap-2 justify-center text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index} 
            className="bg-white border border-black/[0.1] px-5 py-3 rounded-lg dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
