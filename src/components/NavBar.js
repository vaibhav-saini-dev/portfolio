import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';

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
            `}>&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    return (
        // Note to self: flex sets the display to use flexbox
        //               items: for vertical alignment
        //               justify: for horizontal alignment
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Experience" className="mx-4" />
                <CustomLink href="/articles" title="Skills" className="ml-4" />
            </nav>
            <nav>
                <Link href="/" target={"_blank"}>LinkedIn</Link>
                <Link href="/" target={"_blank"}>GitHub</Link>
                <Link href="/" target={"_blank"}>LeetCode</Link>
                <Link href="/" target={"_blank"}>Itch.io</Link>
                <Link href="/" target={"_blank"}>Email</Link>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar