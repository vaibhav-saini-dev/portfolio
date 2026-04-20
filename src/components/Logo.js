import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import logoGif from "../../public/gifs/profile/Smug_Frieren.gif";
import Image from 'next/image';

const MotionLink = motion(Link);
const FramerImage = motion(Image);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                href="/"
                className='relative w-16 h-16 flex items-center justify-center
                rounded-full border-2 border-solid border-dark
                bg-amber-100 text-dark font-bold text-2xl overflow-hidden
                dark:bg-black dark:text-light dark:border-light
                '
            >
                <motion.span
                    className="absolute"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    VS
                </motion.span>

                <FramerImage
                    src={logoGif}
                    alt="logo animation"
                    fill
                    className="absolute object-cover"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    // transition={{ duration: 0.3 }}
                />
            </MotionLink>
        </div>
    );
};

export default Logo;