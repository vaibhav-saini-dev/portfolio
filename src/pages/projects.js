import AnimatedText from '@/components/AnimatedText'
import { GitHubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import {motion} from "framer-motion";
import fortniteInfo from "../../public/images/projects/FortniteInfo.png"
import bashInC from "../../public/images/projects/bash_in_c.jpg"
import shotgunSkrimsli from "../../public/images/projects/shotgun_skrimsli.jpg"
import smartCAS from "../../public/images/projects/smart_classroom_attendance_system.png"
import analyzeBoston from "../../public/images/projects/analyze_boston_crime.webp"

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"> <GitHubIcon /> </Link>
                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        "
                    > Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-4xl bg-dark 
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    > Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"> <GitHubIcon /> </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects</title>
                <meta name="description" content="A collection of projects demonstrating my various web development, game development, and system experience/skills." />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Built with Purpose"
                        className="mb-16 lg:text-7xl! sm:mb-8 sm:text-6xl! xs:text-4xl!"
                    />
                    {/* gap-24 is the gap between x and y */}
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="PWA + Vite React + API"
                                title="FortniteInfo"
                                img={fortniteInfo}
                                summary="A progressive web application that can be downloaded on your phone.

Uses live data from the popular video game Fortnite, showcasing current maps and shop items used in the game, alongside any news for the game!"
                                link="https://fortnite-info.netlify.app/"
                                github="https://github.com/vaibhav-saini-dev/FortniteInfo"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Low-level programming"
                                title="Bash in C"
                                img={bashInC}
                                link="https://github.com/vaibhav-saini-dev/bash-in-C"
                                github="https://github.com/vaibhav-saini-dev/bash-in-C"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
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
                                type="Vite React + Firebase + ESP32 (coded in C)"
                                title="Smart Classroom Attendance System"
                                img={smartCAS}
                                summary="A smart classroom attendance system that uses an RFID reader. This was a group project that utilized Vite React for the frontend, Firebase for the backend, and ESP32 for the hardware (coded in C)."
                                link="https://smart-classroom-attendance-system.netlify.app/"
                                github="https://github.com/vaibhav-saini-dev/Smart-Classroom-Attendance-System"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Website & API"
                                title="Analyzing Boston Crime Data"
                                img={analyzeBoston}
                                link="https://vaibhav-saini-dev.github.io/CS480-HW3-BONUS/"
                                github="https://github.com/vaibhav-saini-dev/CS480-HW3-BONUS"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects