"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info, gpa, honors }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between max-md:w-[80%]">

      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-textPrimaryLight dark:text-textPrimary max-sm:text-xl max-xs:text-lg">
          {type}
        </h3>

        <span className="capitalize font-medium text-textSecondaryLight dark:text-textSecondary max-xs:text-sm">
          {time} | {place}
        </span>

        <p className="font-medium w-full text-textPrimaryLight dark:text-textPrimary max-md:text-sm">
          {info}
        </p>

        <p className="font-medium w-full my-3 text-textPrimaryLight dark:text-textPrimary max-md:text-sm">
          {gpa}
        </p>

        <p className="font-medium w-full text-textPrimaryLight dark:text-textPrimary max-md:text-sm">
          {honors}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 text-textPrimaryLight dark:text-textPrimary">
      <h2 className="font-bold text-8xl mb-32 w-full text-center max-md:text-6xl max-sm:text-[3rem] max-xs:text-4xl max-md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative max-lg:w-[90%] max-md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-accent origin-top
          max-md:w-0.5 max-md:left-7.5 max-xs:left-5"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 max-xs:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2023-2026"
            place="University of Massachusetts Boston"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            gpa="GPA: 3.92/4.0"
            honors="Honors: Graduating one year early."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education;