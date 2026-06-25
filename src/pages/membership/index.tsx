import { Location, useLocation } from "../../app/providers/locationProvider";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";
import { MembershipHeader } from "./header";
import { MembershipPrices } from "./prices";

export const Membership = () => {
    const { setLocation } = useLocation();
    setLocation(Location.Membership);

    const isMobile = useIsMobileWidth();

    return (
        <div>
            <MembershipHeader isMobile={isMobile} />
            <MembershipPrices isMobile={isMobile} />
        </div>
    );
}
