import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark
                "
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
            viewport = {{once: true}} // animates skill web once
        >
            {name}
        </motion.div>
    )

}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
                "
                    whileHover={{ scale: 1.05 }}
                >
                    Web Development
                </motion.div>
                {/* <Skill name="Web Development" x="0vw" y="0vw" /> */}
                <Skill name="HTML & CSS" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="-5vw" y="-10vw" />
                <Skill name="ReactJS" x="20vw" y="6vw" />
                <Skill name="NextJS" x="0vw" y="12vw" />
                <Skill name="Unity" x="-20vw" y="-15vw" />
                <Skill name="Game Development" x="15vw" y="-12vw" />
                <Skill name="Python" x="32vw" y="-5vw" />
                <Skill name="Java" x="0vw" y="-20vw" />
                <Skill name="C" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />
            </div>
        </>
    )
}

export default Skills
