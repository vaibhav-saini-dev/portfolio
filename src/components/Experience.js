"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;

          {
            companyLink ? (
              <a
                href={companyLink}
                target="_blank"
                className="text-accent hover:text-accentSoft capitalize transition-colors"
              >
                @{company}
              </a>
            ) : (
              <span
                className="text-accent hover:text-accentSoft capitalize transition-colors"
              >
                @{company}
              </span>
            )
          }
        </h3>

        <span className="capitalize font-medium text-textSecondaryLight dark:text-textSecondary max-xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium w-full text-textPrimaryLight dark:text-textPrimary max-md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 text-textPrimaryLight dark:text-textPrimary">
      <h2 className="font-bold text-8xl mb-32 w-full text-center max-md:text-6xl max-sm:text-[3rem] max-xs:text-4xl max-md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative max-lg:w-[90%] max-md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-accent origin-top
          max-md:w-0.5 max-md:left-7.5 max-xs:left-5"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 max-xs:ml-2">
          <Details
            position="Software Dev"
            company="Thunderhouse"
            companyLink=""
            time="2026-Present"
            address="Boston, MA"
            work=
            {
              <>
                Building a short-form video application using <span className="text-primary dark:text-primaryDark">Ionic React (frontend)</span> and 
                <span className="text-primary dark:text-primaryDark"> Django REST Framework (backend)</span>. Implementing 
                <span className="text-primary dark:text-primaryDark"> Firebase authentication</span> for 
                <span className="text-primary dark:text-primaryDark"> user login </span>
                and 
                <span className="text-primary dark:text-primaryDark"> session management</span>. Developing core features such as video feed, 
                content delivery, and user interactions.
              </>
            }
          />

          <Details
            position="Teaching Assistant"
            company="UMass Boston"
            companyLink="https://www.umb.edu/"
            time="2025-2026"
            address="Boston, MA"
            work={
              <>
                Assisted students with <span className="text-primary dark:text-primaryDark">problem-solving</span> and 
                <span className="text-primary dark:text-primaryDark"> proof techniques</span> in an 
                <span className="text-primary dark:text-primaryDark"> upper-level Theory of Computation</span> course. 
                <span className="text-primary dark:text-primaryDark"> Graded assignments</span> and 
                <span className="text-primary dark:text-primaryDark"> exams</span> using structured rubrics to 
                ensure consistency and fairness. 
                <span className="text-primary dark:text-primaryDark"> Tutored complex theoretical concepts</span> during office hours and one-on-one help sessions.
              </>
            }
          />

          <Details
            position="Website Developer"
            company="Medford Vocational Technical High School"
            companyLink="https://mhs-mvths.mps02155.org/cte"
            time="2022-2023"
            address="Boston, MA"
            work={
              <>
                Provided <span className="text-primary dark:text-primaryDark">front-end website development </span> using <span className="text-primary dark:text-primaryDark">
                  Finalsite</span>, <span className="text-primary dark:text-primaryDark">Canva</span>, and other editing software. Developed technical solutions required to
                accommodate specific user-facing assets. 
                <span className="text-primary dark:text-primaryDark"> Worked in a team</span> that made Medford&apos;s school district&apos;s website. 
                <span className="text-primary dark:text-primaryDark"> Created and published website pages</span>, 
                <span className="text-primary dark:text-primaryDark"> designed and posted news</span>, and 
                <span className="text-primary dark:text-primaryDark"> communicated </span>with faculty and staff.
              </>
              }
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience