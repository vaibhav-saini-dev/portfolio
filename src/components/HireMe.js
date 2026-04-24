import React from 'react'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed left-6 bottom-6 z-20 max-md:left-auto max-md:right-6 max-md:bottom-auto max-md:top-4 max-md:absolute max-sm:right-4 max-sm:top-4">
      <Link
        href="mailto:vaibhav.saini.professional@proton.me"
        aria-label="Contact me"
        className="
        group relative flex items-center justify-center
        w-20 h-20 rounded-full
        border border-accent/70
        bg-backgroundLight/70 dark:bg-background/70
        backdrop-blur-md shadow-lg
        transition-all duration-300 ease-in-out
        hover:w-40 hover:border-accent hover:shadow-[0_0_25px_rgba(129,140,248,0.45)]
        max-md:w-16 max-md:h-16 max-md:hover:w-36
        max-sm:w-16 max-sm:h-16 max-sm:hover:w-36
        "
      >
        <span
          className="
          absolute inset-1 rounded-full
          border border-accent/40
          animate-pulse
          group-hover:border-accent
          "
        />

        <span
          className="
          text-accent font-bold text-xl tracking-widest
          transition-all duration-300
          group-hover:opacity-0 group-hover:scale-75
          "
        >
          ✦
        </span>

        <span
          className="
          absolute opacity-0 scale-90
          text-sm font-semibold text-textPrimaryLight dark:text-textPrimary
          transition-all duration-300
          group-hover:opacity-100 group-hover:scale-100
          "
        >
          Contact Me
        </span>
      </Link>
    </div>
  )
}

export default HireMe