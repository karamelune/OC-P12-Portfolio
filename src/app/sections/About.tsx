'use client';

import Image from 'next/image';
import technologies from '../data/technologies.json';
import { Divider } from '@nextui-org/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true });

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-secondary-900 via-default-900 to-secondary-900"
            id="about">
            <div className="flex flex-col items-center justify-center gap-4 w-5xl">
                <h1
                    ref={ref}
                    className={`text-4xl text-black mb-6 transition-all ease-in duration-400 sm:text-2xl sm:mb-4 ${
                        isInView ? 'opacity-100' : '-translate-y-10 opacity-0'
                    }`}>
                    About
                </h1>
                <p
                    ref={ref2}
                    className={`text-xl text-center text-black w-[50%] transition-all ease-in duration-400 delay-100 md:w-[80%] sm:text-medium ${
                        isInView2 ? 'opacity-100' : '-translate-x-40 opacity-0'
                    }`}>
                    Hello ! I&apos;m Dylan, a 24-year-old frontend development
                    enthusiast based in France. Recently graduated from
                    OpenClassrooms, I have acquired a solid foundation of skills
                    in user interface design and web development.
                </p>

                <p
                    ref={ref2}
                    className={`text-xl text-center text-black w-[50%] transition-all ease-in duration-400 delay-200 md:w-[80%] sm:text-medium ${
                        isInView2 ? 'opacity-100' : '-translate-x-40 opacity-0'
                    }`}>
                    My goal is to create fluid and engaging user experiences
                    through a combination of creativity and technical skills.
                    Explore my portfolio to discover my projects and see how I
                    bring ideas to life through code.
                </p>
                <Divider
                    ref={ref2}
                    className={`my-4 bg-default-50/20 transition-all ease-in duration-400 delay-[250ms] ${
                        isInView2
                            ? 'w-[50%] md:w-[80%] opacity-100'
                            : 'w-0 opacity-0'
                    }`}
                />
                <div
                    ref={ref3}
                    className="flex items-center justify-center p-2 m-2 gap-2 w-full max-w-3xl flex-wrap sm:m-0 sm:p-0 sm:w-[80%]">
                    {technologies.map((technology, index) => (
                        <Image
                            src={technology.image}
                            alt={technology.name}
                            width={40}
                            height={40}
                            key={index}
                            className={`transition-all ease-in duration-400 delay-300 ${
                                isInView3
                                    ? 'opacity-100'
                                    : 'odd:translate-y-10 even:-translate-y-10 opacity-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
