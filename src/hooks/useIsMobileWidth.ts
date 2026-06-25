import { useState, useEffect } from 'react';
import { useOverlay } from '../app/providers/overlayProvider';

const BREAKPOINT = 960;

export const useIsMobileWidth = (): boolean => {
    const { setOverlayIsOpen } = useOverlay();

    const [isMobile, setIsMobile] = useState(() => window.innerWidth < BREAKPOINT);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < BREAKPOINT);
            setOverlayIsOpen(false); // Close the overlay when resizing to ensure it doesn't remain open on mobile
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return isMobile;
};