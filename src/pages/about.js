import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/Frieren_studying_2.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
      springValue.on("change", (latest) => {
        // toFixed(0) avoids fractions
        // Animates value from 0 to value itself in increments of 1
        // ref.current checks if ref is mounted
        if (ref.current && latest.toFixed(0) <= value ) {
            ref.current.textContent = latest.toFixed(0)
        }
      })
    }, [springValue, value])
    
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Portfolio | About</title>
                <meta name="description" content="About section of my software developer experience and history" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Background & Experience" className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16 ">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="font-medium">
                                Greetings, I'm Vaibhav Saini. I’m a software developer with a strong computer science foundation, experienced in everything from low-level C
                                programming and systems projects, 2D & 3D single-player and multiplayer video games, to modern full-stack web development.
                            </p>
                            <p className="my-4 font-medium">
                                I don’t enjoy staying in one lane. Whether it’s web development, game development, or working with new technologies, I focus on understanding
                                the fundamentals so I can quickly adapt and build in any environment. I may not know every tool upfront, but I know how to quickly and
                                effectively learn and figure things out.
                            </p>
                            <p className="mb-4 font-medium">
                                I care about how things work just as much as how they look. From backend logic to frontend experience, I aim to build solutions that are clean, efficient, and complete.
                                I’m constantly pushing myself to grow, take on new challenges, and become the kind of developer who can turn any idea into a working product (no matter the stack).

                            </p>
                            <p className="font-medium">
                                Right now, I’m continuing to sharpen my skills through projects and real-world problem solving, with the goal of becoming a well-rounded
                                developer who can take an idea and turn it into a finished product.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                        ">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-4xl bg-dark" />
                            <Image src={profilePic} alt="Image of me" className="w-full h-auto rounded-2xl" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied Clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Projects Completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about