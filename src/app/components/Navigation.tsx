'use client';

import { Chip } from '@nextui-org/react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type NavItem = {
    id: string;
    label: string;
    animation: string;
    delay: string;
};

export const Navigation = () => {
    const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const navItems: NavItem[] = [
        {
            id: 'about',
            label: '> about',
            animation: 'translate-y-5',
            delay: 'delay-200',
        },
        {
            id: 'projects',
            label: '> projects',
            animation: '-translate-y-5',
            delay: 'delay-[250ms]',
        },
        {
            id: 'contact',
            label: '> contact',
            animation: 'translate-y-5',
            delay: 'delay-200',
        },
    ];

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        if (isInView) {
            setAnimationPlayed(true);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="flex gap-4 p-2 m-2 md:gap-2">
            {navItems.map((item) => (
                <Chip
                    key={item.id}
                    color="primary"
                    className={`
                        hover:scale-110 duration-200 cursor-pointer 
                        transition-all ease-in md:text-xs
                        ${
                            isInView
                                ? 'opacity-100'
                                : `${item.animation} opacity-0`
                        }
                        ${animationPlayed ? '' : item.delay}
                    `}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                    }}>
                    {item.label}
                </Chip>
            ))}
        </div>
    );
};
