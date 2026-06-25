import styles from './index.module.scss';
import linkedinIcon from '../../../../assets/icons/linkedin.svg';
import youtubeIcon from '../../../../assets/icons/youtube.svg';

type SocialProps = {
    isMobile: boolean;
}

export const Social = (props: SocialProps) => {
    const { isMobile } = props;

    return (
        <div className={`${styles.social} ${isMobile ? styles.mobile : ''}`}>
            <h1 className={styles.title}>STORK</h1>
            <div className={`${styles.contentContainer} ${isMobile ? styles.mobile : ''}`}>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>A question ?</h2>
                    <a className={styles.button} href="mailto:info@storkinesiology.org">info@storkinesiology.org</a>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>Follow us</h2>
                    <div className={styles.iconsContainer}>
                        <a href="https://www.linkedin.com/company/sportrxivcik/posts/?feedView=all" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCXiH8u6WQhE3CL9vGJpKuHg" target="_blank" rel="noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}