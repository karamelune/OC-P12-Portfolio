'use client';

import { Chip } from '@nextui-org/react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const Navigation = () => {
    const [animationPlayed, setAnimationPlayed] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            setAnimationPlayed(true);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="flex gap-4 p-2 m-2 md:gap-2">
            <Chip
                color="primary"
                className={`hover:scale-110 duration-200 cursor-pointer transition-all ease-in md:text-xs ${
                    isInView ? 'opacity-100' : 'translate-y-5 opacity-0'
                } ${animationPlayed ? '' : 'delay-200'}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                }}>
                &gt; about
            </Chip>

            <Chip
                color="primary"
                className={`hover:scale-110 duration-200 cursor-pointer transition-all ease-in md:text-xs ${
                    isInView ? 'opacity-100' : '-translate-y-5 opacity-0'
                } ${animationPlayed ? '' : 'delay-[250ms]'}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                }}>
                &gt; projects
            </Chip>

            <Chip
                color="primary"
                className={`hover:scale-110 duration-200 cursor-pointer transition-all ease-in md:text-xs ${
                    isInView ? 'opacity-100' : 'translate-y-5 opacity-0'
                } ${animationPlayed ? '' : 'delay-200'}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                }}>
                &gt; contact
            </Chip>
        </div>
    );
};
