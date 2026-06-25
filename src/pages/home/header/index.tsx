import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

type HomeHeaderProps = {
    isMobile: boolean;
}

export const HomeHeader = (props: HomeHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.header} ${props.isMobile ? styles.mobile : ''}`} >
            <p className={`${styles.title} ${props.isMobile ? styles.mobile : ''}`}><span className={styles.acronym}>S</span>ociety for<br/><span className={styles.acronym}>T</span>ransparency,<br/><span className={styles.acronym}>O</span>penness, and<br/><span className={styles.acronym}>R</span>eplication in<br/><span className={styles.acronym}>K</span>inesiology</p>
            <div className={`${styles.content} ${props.isMobile ? styles.mobile : ''}`}>
                <div className={styles.textContent}>
                    <p>STORK unites students, professionals, and scientists who aim to elevate research methods across all domains related to movement sciences, including sports, exercise, physical activity, physiology, biomechanics, neuroscience, rehabilitation sciences, nutrition.<br/><br/>
                    STORK is also open to all who share our passion for improvement: educators, coaches, practitioners, athletes, and science enthusiasts.<br/><br/>
                    As a non-profit, we focus solely on enhancing research quality.</p>
                </div>
                <Button
                    color="green"
                    selected={true}
                    onClick={() => navigate('/missions')}
                >
                    Find out more
                </Button>
            </div>
        </div>
    );
}