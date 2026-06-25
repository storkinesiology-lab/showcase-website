import { Button } from "../../ui/button";
import { Navigation } from "./navigation";
import { Location, useLocation } from "../../../app/providers/locationProvider";
import { useNavigate } from "react-router-dom";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";
import { useOverlay } from "../../../app/providers/overlayProvider";
import styles from './index.module.scss';

import menuIcon from '../../../assets/icons/menu.svg';
import closeIcon from '../../../assets/icons/close.svg';

export const Header = () => {
    const { location } = useLocation();
    const { overlayIsOpen, setOverlayIsOpen } = useOverlay();

    const navigate = useNavigate();

    const isMobile = useIsMobileWidth();
    
    return (
        <header className={styles.header}>
            <button className={styles.logo}
                    onClick={() => {
                        navigate('/');
                        setOverlayIsOpen(false); 
                    }}
            >
                STORK
            </button>
            {isMobile ?
                <div className={styles.mobileNavigation}>
                    <Button
                            color="black"
                            size={1}
                            onClick={() => setOverlayIsOpen(!overlayIsOpen)}
                    >
                        {overlayIsOpen ?
                            <img src={closeIcon} alt="Close Icon" />
                        :
                            <img src={menuIcon} alt="Menu Icon" />
                        }
                    </Button>
                </div> 
            : 
                <nav className={styles.navigation}>
                    <Navigation
                        selected={location === Location.Missions}
                        onClick={() => navigate('/missions')}
                    >
                        Missions
                    </Navigation>
                    <Navigation
                        selected={location === Location.About}
                        onClick={() => navigate('/about-us')}
                    >
                        About us
                    </Navigation>
                    <Button
                            selected={location === Location.Membership}
                            color="black"
                            size={1}
                            onClick={() => navigate('/membership')}
                    >
                        Join us
                    </Button>
                </nav>
            }
        </header>
    );
}

export const MenuOverlay = () => {
    const { location } = useLocation();
    const { setOverlayIsOpen } = useOverlay();

    const navigate = useNavigate();


    return (
        <div className={styles.menuOverlay}>
            <div className={styles.contentOverlay}>
                <Navigation
                    selected={location === Location.Missions}
                    onClick={() => {
                        navigate('/missions');
                        setOverlayIsOpen(false);
                    }}
                >
                    Missions
                </Navigation>
                <Navigation
                    selected={location === Location.About}
                    onClick={() => {
                        navigate('/about-us');
                        setOverlayIsOpen(false);
                    }}
                >
                    About us
                </Navigation>
            </div>
            <Button
                    color="green"
                    selected={true}
                    size={1}
                    onClick={() => {
                        navigate('/membership');
                        setOverlayIsOpen(false);
                    }}
            >
                Join us
            </Button>
        </div>
    );
}