import { Location, useLocation } from "../../app/providers/locationProvider";
import styles from "./index.module.scss";

export const ByLaws = () => {
    const { setLocation } = useLocation();
    setLocation(Location.ByLaws);

    return (
        <div className={styles.bylaws}>
            <h1 className={styles.title}>Bylaws</h1>
            <section className={styles.section}>
                <h2>Article I: Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi urna at sapien.</p>
            </section>
            <section className={styles.section}>
                <h2>Article II: Purpose</h2>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </section>
            <section className={styles.section}>
                <h2>Article III: Membership</h2>
                <p>Morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.</p>
            </section>
            <section className={styles.section}>
                <h2>Article IV: Meetings</h2>
                <p>Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.</p>
            </section>
            <section className={styles.section}>
                <h2>Article V: Officers</h2>
                <p>Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
            </section>
            <section className={styles.section}>
                <h2>Article VI: Amendments</h2>
                <p>Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum.</p>
            </section>
        </div>
    );
}
