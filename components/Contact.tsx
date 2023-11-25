'use client'

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SendBtn from "./SendBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 text-center -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:example@gmail" className="underline">
          example@gmail.com {" "}
        </a>
        or through this form
      </p>
      <form className="mt-6 flex flex-col"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData)
          if(data?.error) {
            // alert(data.error.message);
            toast.error(data.error.message)
            return;
          }
          // console.log('error: ', error)
          // console.log('data: ', data)

          toast.success("Email sent successfully")
        }}
      >
        <input
          className="h-14 borderBlack p-2 dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-800"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-800"
          required
          maxLength={5000}
        ></textarea>
        <SendBtn />
        {/* <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </button> */}
      </form>
    </motion.section>
  );
};

export default Contact;
