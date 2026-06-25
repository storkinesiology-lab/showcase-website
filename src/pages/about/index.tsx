import { Location, useLocation } from "../../app/providers/locationProvider";
import { AboutHeader } from "./header";
import { AboutTeam } from "./team";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";

export const About = () => {
    const { setLocation } = useLocation();
    setLocation(Location.About);

    const isMobile = useIsMobileWidth();
    
    return (
        <div>
            <AboutHeader isMobile={isMobile} />
            <AboutTeam isMobile={isMobile} />
        </div>
    );
}
