'use client';

import { useEffect, useState, useCallback } from 'react';

export const ScrollProgress = () => {
    const [scrollYProgress, setScrollYProgress] = useState<number>(0);

    const handleScroll = useCallback(() => {
        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progress = totalHeight > 0 ? scrollPosition / totalHeight : 0;

        setScrollYProgress(progress);
    }, []);

    useEffect(() => {
        // Initialize on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div
            className="z-50 h-1 fixed top-0 left-0 right-0 transition-all duration-200 ease-out bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
            style={{ transform: `scaleX(${scrollYProgress})` }}
        />
    );
};
