import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return (
        // Note to self: flex sets the display to use flexbox
        //               items: for vertical alignment
        //               justify: for horizontal alignment
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
            </nav>
            <Logo />
            <nav>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
            </nav>
        </header>
    )
}

export default NavBar