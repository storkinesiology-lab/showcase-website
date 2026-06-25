import { Links } from "./links";
import { Social } from "./social";
import styles from "./index.module.scss";
import { useIsMobileWidth } from "../../../hooks/useIsMobileWidth";

export const Footer = () => {
    const isMobile = useIsMobileWidth();
        
    return (
        <div className={styles.footer}>
            <Social isMobile={isMobile} />
            <Links isMobile={isMobile} />
        </div>
    )
}