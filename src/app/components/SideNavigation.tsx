'use client';

import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export const SideNavigation = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <div className="fixed z-50 flex flex-col gap-2 bottom-4 right-4">
                <Button
                    aria-label="Return to top of page"
                    isIconOnly
                    className="p-2 duration-200 rounded-full shadow-md cursor-pointer bg-default-900 bg-opacity-10 hover:scale-110 sm:bottom-2 sm:right-2"
                    onPress={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary-400/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4V20M12 4L8 8M12 4L16 8"
                        />
                    </svg>
                </Button>
            </div>
        )
    );
};
