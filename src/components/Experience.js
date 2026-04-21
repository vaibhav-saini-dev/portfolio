"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      // The scroll line height becomes full when a 6th
      // experience is added.
      // Should use: ["start end", "end start"] for scalability.
      offset: ["start end", "center start"],
    }
  );

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          " />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer" company="Thunderhouse"
            companyLink="/"
            time="2026-Present" address="Boston, MA"
            work="Building a short-form video application using Ionic React (frontend) and Django REST Framework (backend).
                  Implementing Firebase authentication for user login and session management.
                  Developing core features such as video feed, content delivery, and user interactions."
          />

          <Details
            position="Teaching Assistant" company="UMass Boston"
            companyLink="/"
            time="2025-2026" address="Boston, MA"
            work="Assisted students with problem-solving and proof techniques in an upper-level Theory of Computation course.
                  Graded assignments and exams using structured rubrics to ensure consistency and fairness.
                  Explained complex theoretical concepts during office hours and one-on-one help sessions."
          />

          <Details
            position="Website Developer" company="Medford Vocational Technical High School"
            companyLink="www.google.com"
            time="2022-2023" address="Boston, MA"
            work="Provided front-end website development using Finalsite, Canva, and other editing software.
                  Developed technical solutions required to accommodate specific user-facing assets.
                  Worked in a team of 3 that made Medford's school district's website.
                  Created and published website pages, designed and posted news, and communicated with faculty and staff."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience