import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const projects = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Projects</title>
                <meta name="description" content="A collection of projects demonstrating my various web development, game development, and system experience/skills." />
            </Head>
            <main>
                <Layout>
                    <AnimatedText text="Imagination Trumps Knowledge!" />
                </Layout>
            </main>
        </>
    )
}

export default projects