import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid 
    border-borderLight dark:border-border
    bg-backgroundLight text-textPrimaryLight
    dark:bg-background dark:text-textPrimary
    font-medium text-lg max-sm:text-base">
        <Layout className="py-8 flex items-center justify-center max-lg:flex-col max-lg:py-6">

            <div className="flex items-center max-lg:py-2">
                Built With 
                <span className="text-accent dark:text-accentSoft text-2xl px-1">&#9825;</span> 
                by&nbsp;
                <Link 
                  href="https://github.com/vaibhav-saini-dev" 
                  target={"_blank"}
                  className="underline underline-offset-2 text-accent hover:text-accentSoft transition-colors"
                >
                  Vaibhav Saini
                </Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer