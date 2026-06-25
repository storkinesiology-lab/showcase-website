import { Location, useLocation } from "../../app/providers/locationProvider";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";
import { HomeHeader } from "./header";
import { HomeSupport } from "./support";
import { HomeOffer } from "./offer";

export const Home = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Home);

    const isMobile = useIsMobileWidth();

    return <div>
        <HomeHeader isMobile={isMobile} />
        <HomeOffer isMobile={isMobile} />
        <HomeSupport />
    </div>;
}
