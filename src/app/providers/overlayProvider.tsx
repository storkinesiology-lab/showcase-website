import { createContext, useContext, useState, ReactNode } from 'react';

interface OverlayContextType {
    overlayIsOpen: boolean;
    setOverlayIsOpen: (isOpen: boolean) => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export function OverlayProvider({ children }: { children: ReactNode }) {
    const [overlayIsOpen, setOverlayIsOpen] = useState<boolean>(false);

    return (
        <OverlayContext.Provider value={{ overlayIsOpen, setOverlayIsOpen }}>
            {children}
        </OverlayContext.Provider>
    );
}

export function useOverlay() {
    const context = useContext(OverlayContext);
    if (context === undefined) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }
    return context;
}