import { Location, useLocation } from "../../app/providers/locationProvider";
import styles from "./index.module.scss";

const siteMapLinks = [
    { label: "Home", path: "/" },
    { label: "Missions", path: "/missions" },
    { label: "About us", path: "/about-us" },
    { label: "Membership", path: "/membership" },
    { label: "By Laws", path: "/by-laws" },
    { label: "Site Map", path: "/site-map" },
];

const externalLinks = [
    { label: "SportRxiv", url: "https://sportrxiv.org/index.php/server" },
    { label: "Communication in Kinesiology", url: "https://storkjournals.org/index.php/cik" },
    { label: "Kinesiology Books", url: "https://kinesiologybooks.org/index.php/stork/index" },
];

export const SiteMap = () => {
    const { setLocation } = useLocation();
    setLocation(Location.SiteMap);

    return (
        <div className={styles.sitemap}>
            <h1 className={styles.title}>Site Map</h1>
            <div className={styles.section}>
                <h2>Main Pages</h2>
                <ul className={styles.linksList}>
                    {siteMapLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.path}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.section}>
                <h2>External Links</h2>
                <ul className={styles.linksList}>
                    {externalLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
