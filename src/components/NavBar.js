import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, MailIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group text-textPrimaryLight dark:text-textPrimary`}>
            {title}

            <span className={`
            h-px inline-block bg-accent
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >&nbsp;</span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button 
            className={`${className} relative group text-textPrimary dark:text-textPrimaryLight my-2`} 
            onClick={handleClick}
        >
            {title}

            <span className={`
            h-px inline-block bg-accentSoft dark:bg-accent
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}
            >&nbsp;</span>
        </button>
    );
};

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between
            bg-backgroundLight text-textPrimaryLight
            dark:bg-background dark:text-textPrimary
            relative z-10 max-lg:px-16 max-md:px-12 max-sm:px-8'
        >
            <button className="flex-col justify-center items-center hidden max-lg:flex" onClick={handleClick}>
                <span className={`bg-textPrimaryLight dark:bg-textPrimary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-textPrimaryLight dark:bg-textPrimary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-textPrimaryLight dark:bg-textPrimary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center max-lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://www.linkedin.com/in/vaibhav-saini-coder/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a href="https://github.com/vaibhav-saini-dev" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GitHubIcon />
                    </motion.a>

                    <motion.a href="https://leetcode.com/u/vaibhavsaini294/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 dark:bg-light dark:rounded-full"
                    >
                        <LeetCodeIcon />
                    </motion.a>

                    <motion.a href="mailto:vaibhav.saini.professional@proton.me" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 bg-light dark:bg-light dark:rounded-sm dark:border dark:border-light"
                    >
                        <MailIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className="ml-3 flex items-center justify-center rounded-full p-1
                        bg-accent text-light hover:bg-accentSoft hover:text-dark transition-colors"
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div 
                    initial={{scale:0, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-surface/90 dark:bg-surfaceLight/90 rounded-lg backdrop-blur-md py-32
                    border border-border"
                    >
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href="https://www.linkedin.com/in/vaibhav-saini-coder/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mr-3 max-sm:mx-1"
                            >
                                <LinkedInIcon />
                            </motion.a>

                            <motion.a href="https://github.com/vaibhav-saini-dev" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 bg-backgroundLight dark:bg-background rounded-full max-sm:mx-1"
                            >
                                <GitHubIcon />
                            </motion.a>

                            <motion.a href="https://leetcode.com/u/vaibhavsaini294/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 bg-backgroundLight rounded-full max-sm:mx-1"
                            >
                                <LeetCodeIcon />
                            </motion.a>

                            <motion.a href="mailto:vaibhav.saini.professional@proton.me" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 ml-3 bg-backgroundLight rounded-sm border border-borderLight max-sm:mx-1"
                            >
                                <MailIcon />
                            </motion.a>

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className="ml-3 flex items-center justify-center rounded-full p-1
                                bg-accent text-light hover:bg-accentSoft hover:text-dark transition-colors"
                            >
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar