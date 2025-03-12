'use client';

import { useState } from 'react';

export const Footer = () => {
    const [isBeating, setIsBeating] = useState(false);

    const handleHeartClick = () => {
        setIsBeating(true);
        setTimeout(() => setIsBeating(false), 100); // Durée de l'animation
    };

    return (
        <footer className="z-40 flex flex-col items-center justify-center w-full p-4 bg-gradient-to-l from-primary-50 via-default-50 to-primary-50">
            <p className="text-white">
                Made with{' '}
                <span
                    className={`inline-block animate-pulse cursor-pointer transition-transform duration-300 ${
                        isBeating ? 'scale-125' : ''
                    }`}
                    onClick={handleHeartClick}>
                    🩵
                </span>{' '}
                by myself
            </p>
        </footer>
    );
};
