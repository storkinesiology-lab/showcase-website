import { createContext, useContext, useState, ReactNode } from 'react';

export enum Location {
    About = 'about',
    ByLaws = 'bylaws',
    Contact = 'contact',
    Home = 'home',
    Membership = 'membership',
    Missions = 'missions',
    SiteMap = 'sitemap',
}

interface LocationContextType {
    location: Location;
    setLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
    const [location, setLocation] = useState<Location>(Location.Home);

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
}

export function useLocation() {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
}