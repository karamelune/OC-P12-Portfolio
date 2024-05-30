'use client';

import { Divider } from '@nextui-org/react';
import { Socials } from '../components/Socials';
import { Navigation } from '../components/Navigation';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className="sticky top-0 flex flex-col items-center justify-center w-full h-screen p-2 m-2 bg-gradient-to-l from-primary-50 via-default-50 to-primary-50 ">
            <div
                ref={ref}
                className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    <h1 className="text-6xl text-white px-4 md:text-5xl md:text-center md:mb-2 sm:text-4xl">
                        Hello{' '}
                        <span className="inline-block animate-shake-hand">
                            👋🏻
                        </span>
                        , my name is{' '}
                        <span
                            className={`font-bold text-primary-400 transition-all ease-in duration-400 inline-block ${
                                isInView
                                    ? 'opacity-100'
                                    : '-translate-y-10 sm:translate-x-10 sm:-translate-y-0 opacity-0'
                            }`}>
                            Dylan
                        </span>
                        <span
                            className={`transition-all ease-in duration-400 inline-block ${
                                isInView
                                    ? 'opacity-100'
                                    : '-translate-y-10 sm:translate-x-10 sm:-translate-y-0 opacity-0'
                            }`}>
                            .
                        </span>
                    </h1>
                    <h2
                        className={`text-3xl text-white m-2 px-4 transition-all ease-in duration-400 delay-[125ms] md:text-2xl md:text-center sm:text-xl ${
                            isInView
                                ? 'opacity-100'
                                : 'translate-x-10 opacity-0'
                        }`}>
                        I&apos;m a{' '}
                        <span className="font-bold">front-end developer</span>{' '}
                        based in{' '}
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-white to-red-600">
                            France
                        </span>
                        .
                    </h2>
                </div>
                <Navigation />
                <Divider
                    className={`my-4 transition-all ease-in duration-400 delay-[250ms] ${
                        isInView
                            ? 'w-[100%] sm:w-[80%] opacity-100'
                            : 'w-0 opacity-0'
                    }`}
                />
                <Socials />
            </div>
        </section>
    );
};
