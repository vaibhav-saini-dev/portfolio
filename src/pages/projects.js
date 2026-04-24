import AnimatedText from '@/components/AnimatedText'
import { GitHubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import fortniteInfo from "../../public/images/projects/FortniteInfo.png"
import bashInC from "../../public/images/projects/bash_in_c.jpg"
import shotgunSkrimsli from "../../public/images/projects/shotgun_skrimsli.jpg"
import smartCAS from "../../public/images/projects/smart_classroom_attendance_system.png"
import analyzeBoston from "../../public/images/projects/analyze_boston_crime.webp"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);
const FramerLink = motion(Link);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid
        border-accent bg-backgroundLight shadow-2xl p-12
        dark:bg-background dark:border-accentSoft
        max-lg:flex-col max-lg:p-8 max-xs:rounded-2xl max-xs:rounded-br-3xl max-xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
            bg-accent dark:bg-accentSoft rounded-br-3xl max-xs:-right-2 max-sm:h-[102%] max-xs:w-full max-xs:rounded-3xl" />

            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg max-lg:w-full">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 max-lg:w-full max-lg:pl-0 max-lg:pt-6">
                <span className="text-accent font-medium text-xl max-xs:text-base">{type}</span>

                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-textPrimaryLight dark:text-textPrimary max-sm:text-sm">
                        {title}
                    </h2>
                </Link>

                <p className="my-2 font-medium text-textSecondaryLight dark:text-textSecondary max-sm:text-sm">
                    {summary}
                </p>

                <div className="mt-2 flex items-center

                ">
                    <FramerLink href={github} target="_blank" className="w-10"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GitHubIcon />
                    </FramerLink>

                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-accent text-light p-2 px-6 text-lg font-semibold
                        hover:bg-accentSoft hover:text-dark border-2 border-transparent
                        hover:border-accent transition-all max-sm:px-4 max-sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-accent bg-backgroundLight p-6 relative
        dark:bg-background dark:border-accentSoft max-xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-4xl
            bg-accent dark:bg-accentSoft rounded-br-3xl max-md:-right-2 max-md:w-[101%] max-xs:h-[102%] max-xs:rounded-3xl" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-accent font-medium text-xl max-lg:text-lg max-md:text-base">
                    {type}
                </span>

                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold text-textPrimaryLight dark:text-textPrimary max-lg:text-2xl">
                        {title}
                    </h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                        className="text-lg font-semibold underline text-accent hover:text-accentSoft dark:hover:text-accentSoft transition-colors max-md:text-base">
                        Visit
                    </Link>

                    <FramerLink href={github} target="_blank" className="w-8 max-md:w-6"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GitHubIcon />
                    </FramerLink>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects Page</title>
                <meta name="description" content="A collection of projects demonstrating my various web development, game development, and system experience/skills." />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center
            bg-backgroundLight text-textPrimaryLight
            dark:bg-background dark:text-textPrimary">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Built with Purpose"
                        className="mb-16 max-lg:text-7xl! max-sm:mb-8 max-sm:text-6xl! max-xs:text-4xl!"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-y-24 max-sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="PWA + Vite React + API"
                                title="FortniteInfo"
                                img={fortniteInfo}
                                summary="A progressive web application that can be downloaded on your phone. Uses live data from the popular video game Fortnite, showcasing current maps and shop items used in the game, alongside any news for the game!"
                                link="https://fortnite-info.netlify.app/"
                                github="https://github.com/vaibhav-saini-dev/FortniteInfo"
                            />
                        </div>

                        <div className="col-span-6 max-sm:col-span-12">
                            <Project
                                type="Low-level programming"
                                title="Bash in C"
                                img={bashInC}
                                link="https://github.com/vaibhav-saini-dev/bash-in-C"
                                github="https://github.com/vaibhav-saini-dev/bash-in-C"
                            />
                        </div>

                        <div className="col-span-6 max-sm:col-span-12">
                            <Project
                                type="Unity 2D"
                                title="Shotgun Skrimsli"
                                img={shotgunSkrimsli}
                                link="https://github.com/vaibhav-saini-dev/Unity2D---Shotgun-Skrimsli"
                                github="https://github.com/vaibhav-saini-dev/Unity2D---Shotgun-Skrimsli"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                type="Vite React + Firebase + ESP32"
                                title="Smart Classroom Attendance System"
                                img={smartCAS}
                                summary="A smart classroom attendance system that uses an RFID reader. This was a group project that utilized Vite React for the frontend, Firebase for the backend, and ESP32 for the hardware coded in C."
                                link="https://smart-classroom-attendance-system.netlify.app/"
                                github="https://github.com/vaibhav-saini-dev/Smart-Classroom-Attendance-System"
                            />
                        </div>

                        <div className="col-span-6 max-sm:col-span-12">
                            <Project
                                type="Website & API"
                                title="Analyzing Boston Crime Data"
                                img={analyzeBoston}
                                link="https://vaibhav-saini-dev.github.io/CS480-HW3-BONUS/"
                                github="https://github.com/vaibhav-saini-dev/CS480-HW3-BONUS"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects