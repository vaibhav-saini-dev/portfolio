import React from 'react'
import { CircularTextNew } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden max-md:right-8 max-md:left-auto max-md:top-0 max-md:bottom-auto max-md:absolute
    max-sm:right-0 z-20">
        <div className="w-48 h-auto flex items-center justify-center relative max-md:w-24">
            <CircularTextNew className={"fill-textPrimaryLight dark:fill-textPrimary animate-spin-slow"} />

            <Link 
              href="mailto:vaibhav.saini.professional@proton.me" 
              className="flex items-center justify-center
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              bg-accent text-light
              shadow-md border-2 border-solid border-accent
              w-20 h-20 rounded-full font-semibold
              hover:bg-accentSoft hover:text-dark hover:border-accentSoft
              transition-colors
              max-md:w-12 max-md:h-12 max-md:text-[10px]"
            >
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe