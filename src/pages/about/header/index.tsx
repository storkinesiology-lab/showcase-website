import styles from './index.module.scss';

interface AboutHeaderProps {
    isMobile: boolean;
}

export const AboutHeader = ({ isMobile }: AboutHeaderProps) => {
    return (
        <div className={`${styles.header} ${isMobile ? styles.mobile : ''}`}>
            <h1>Meet the steering committee</h1>
            <div className={styles.description}>
                <p>Discover the experts steering STORK toward open science excellence to elevate research standards in our fields.</p>
            </div>
        </div>
    )
};