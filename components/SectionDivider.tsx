"use client"

import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div 
    className='w-1 h-16 my-24 rounded-full bg-gray-200 hidden sm:block dark:bg-opacity-20'
        initial={{  opacity: 0, y: 100 }}
        animate={{  opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
    >

    </motion.div>
  )
}

export default SectionDivider