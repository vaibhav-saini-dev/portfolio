import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 
    bg-backgroundLight dark:bg-background
    p-32 max-xl:p-24 max-lg:p-16 max-mb:p-12 max-sm:p-8 
    ${className}`}>
        {children}
    </div>
  )
}

export default Layout