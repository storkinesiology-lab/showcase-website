import styles from './index.module.scss';

const LinksMapping : Record<string, string> = {
    "By Laws": "/by-laws",
    "Site Map": "/site-map",
    "SportRxiv": "https://sportrxiv.org/index.php/server",
    "Communication in Kinesiology": "https://storkjournals.org/index.php/cik",
    "Kinesiology Books": "https://kinesiologybooks.org/index.php/stork/index",
}

type LinksProps = {
    isMobile: boolean;
}

export const Links = (props: LinksProps) => {

    const { isMobile } = props;

    return (
        <div className={`${styles.links} ${isMobile ? styles.mobile : ''}`}>
            {Object.keys(LinksMapping).map((key, idx, arr) => {
                return (
                    <>
                        <div key={key} className={styles.linkContainer}>
                            <a
                                href={LinksMapping[key]}
                                target={LinksMapping[key][0] === '/' ? '_self' : '_blank'}
                                rel={LinksMapping[key][0] === '/' ? undefined : 'noreferrer'}
                                className={styles.link}
                            >
                                {key}
                            </a>
                        </div>
                        {!isMobile && idx !== arr.length - 1 && (
                            <span className={styles.verticalSeparator} />
                        )}
                    </>
                );
            })}
        </div>
    );
}