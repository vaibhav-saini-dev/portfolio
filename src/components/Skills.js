import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold
            bg-surface text-textPrimary
            dark:bg-surfaceLight dark:text-textPrimaryLight
            border border-border dark:border-borderLight
            py-3 px-6 shadow-md cursor-pointer absolute
            hover:border-accent dark:hover:border-accentSoft
            transition-colors
            max-lg:py-2 max-lg:px-4 max-md:text-sm max-md:py-1.5 max-md:px-3
            max-xs:bg-transparent max-xs:dark:bg-transparent max-xs:border-transparent
            max-xs:text-textPrimaryLight max-xs:dark:text-textPrimary max-xs:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center text-textPrimaryLight dark:text-textPrimary max-md:text-6xl max-md:mt-32">
                Skills
            </h2>

            <div className="w-full h-screen relative flex items-center justify-center rounded-full
            bg-circularLight dark:bg-circularDark
            max-lg:h-[80vh] max-sm:h-[60vh] max-xs:h-[50vh]
            max-lg:bg-circularLightLg max-lg:dark:bg-circularDarkLg
            max-md:bg-circularLightMd max-md:dark:bg-circularDarkMd
            max-sm:bg-circularLightSm max-sm:dark:bg-circularDarkSm">

                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold
                    bg-accent text-light
                    p-8 shadow-md cursor-pointer
                    hover:bg-accentSoft hover:text-dark
                    transition-colors
                    max-lg:p-6 max-md:p-4 max-xs:text-xs max-xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <Skill name="HTML & CSS" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="-5vw" y="-10vw" />
                <Skill name="ReactJS" x="20vw" y="6vw" />
                <Skill name="NextJS" x="0vw" y="12vw" />
                <Skill name="Unity" x="-20vw" y="-15vw" />
                <Skill name="Game Dev" x="15vw" y="-12vw" />
                <Skill name="Python" x="32vw" y="-5vw" />
                <Skill name="Java" x="0vw" y="-20vw" />
                <Skill name="C" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />
            </div>
        </>
    )
}

export default Skills