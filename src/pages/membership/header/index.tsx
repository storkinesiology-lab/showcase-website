import styles from './index.module.scss';

type MembershipHeaderProps = {
    isMobile: boolean;
};

export const MembershipHeader = (props: MembershipHeaderProps) => {
    return (
        <div className={`${styles.header} ${props.isMobile ? styles.mobile : ""}`}>
            <h1>Join the Movement</h1>
            <div className={styles.description}>
                <p>Empower kinesiology research through transparency and collaboration.<br />Become a member today and shape the future of open science.</p>
            </div>
        </div>
    )
};