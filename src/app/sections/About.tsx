'use client';

import Image from 'next/image';
import technologies from '../data/technologies.json';
import { Divider } from '@nextui-org/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const techRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true });
    const isContentInView = useInView(contentRef, { once: true });
    const isTechInView = useInView(techRef, { once: true });

    const createAnimationClass = (
        isVisible: boolean,
        translateValue: string,
        delay = ''
    ) => `
        transition-all ease-in duration-400 ${delay}
        ${isVisible ? 'opacity-100' : `${translateValue} opacity-0`}
    `;

    return (
        <section
            className="sticky top-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-l from-secondary-900 via-default-900 to-secondary-900"
            id="about">
            <div className="flex flex-col items-center justify-center gap-4 w-5xl">
                <h1
                    ref={titleRef}
                    className={`text-4xl text-black mb-6 sm:text-2xl sm:mb-4 ${createAnimationClass(
                        isTitleInView,
                        '-translate-y-10'
                    )}`}>
                    About
                </h1>

                <p
                    ref={contentRef}
                    className={`text-xl text-center text-black w-[50%] md:w-[80%] sm:text-medium ${createAnimationClass(
                        isContentInView,
                        '-translate-x-40',
                        'delay-100'
                    )}`}>
                    Hello ! I&apos;m Dylan, a 24-year-old frontend development
                    enthusiast based in France. Recently graduated from
                    OpenClassrooms, I have acquired a solid foundation of skills
                    in user interface design and web development.
                </p>

                <p
                    className={`text-xl text-center text-black w-[50%] md:w-[80%] sm:text-medium ${createAnimationClass(
                        isContentInView,
                        '-translate-x-40',
                        'delay-200'
                    )}`}>
                    My goal is to create fluid and engaging user experiences
                    through a combination of creativity and technical skills.
                    Explore my portfolio to discover my projects and see how I
                    bring ideas to life through code.
                </p>

                <Divider
                    className={`my-4 bg-default-50/20 ${createAnimationClass(
                        isContentInView,
                        'w-0',
                        'delay-[250ms]'
                    )} ${isContentInView ? 'w-[50%] md:w-[80%]' : 'w-0'}`}
                />

                <div
                    ref={techRef}
                    className="flex items-center justify-center p-2 m-2 gap-2 w-full max-w-3xl flex-wrap sm:m-0 sm:p-0 sm:w-[80%]">
                    {technologies.map((technology, index) => (
                        <Image
                            src={technology.image}
                            alt={technology.name}
                            width={40}
                            height={40}
                            key={index}
                            className={`${createAnimationClass(
                                isTechInView,
                                index % 2 === 0
                                    ? '-translate-y-10'
                                    : 'translate-y-10',
                                'delay-300'
                            )}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
