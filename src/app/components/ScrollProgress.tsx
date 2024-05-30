'use client';

import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
    const [scrollYProgress, setScrollYProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            setScrollYProgress(scrollPosition / totalHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="z-50 h-1 fixed top-0 left-0 right-0 transition-all duration-200 ease-out bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
            style={{ transform: `scaleX(${scrollYProgress})` }}
        />
    );
};
