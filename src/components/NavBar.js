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
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}
            >&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        // Note to self: flex sets the display to use flexbox
        //               items: for vertical alignment
        //               justify: for horizontal alignment
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between
            dark:text-light
            '
        >
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`}></span>
            </button>
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                {/* <CustomLink href="/articles" title="Experience" className="mx-4" /> */}
                {/* <CustomLink href="/articles" title="Skills" className="ml-4" /> */}
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.linkedin.com/in/vaibhav-saini-coder/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 mr-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/vaibhav-saini-dev" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                >
                    <GitHubIcon />
                </motion.a>
                <motion.a href="https://leetcode.com/u/vaibhavsaini294/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 dark:bg-light dark:rounded-full"
                >
                    <LeetCodeIcon />
                </motion.a>
                <motion.a href="mailto:vaibhav.saini.professional@proton.me" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3 dark:bg-light dark:border-[0.1rem] dark:border-solid dark:border-light"
                >
                    <MailIcon />
                </motion.a>
            
            <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
                {
                    mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
            </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar