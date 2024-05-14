// React
import { useState, useEffect } from 'react';

export const useHeader = () => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        setIsActive(window.scrollY >= 8);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        isActive,
    };
};
