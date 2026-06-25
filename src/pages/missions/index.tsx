import { useNavigate } from "react-router-dom";
import { Location, useLocation } from "../../app/providers/locationProvider";
import { Button } from "../../components/ui/button";
import { useIsMobileWidth } from "../../hooks/useIsMobileWidth";
import styles from './index.module.scss';


export const Missions = () => {
    const { setLocation } = useLocation();
    const navigate = useNavigate();

    setLocation(Location.Missions);

    const isMobile = useIsMobileWidth();

    const missionContent = {
        "Prioritize quality over quantity": "We empower researchers to embrace rigorous practices like registered reports, pre-registration, replication, open data and code sharing, and preprints.<br/>Through workshops with universities and funders, we tackle questionable practices and promote practical solutions.",
        "Boost transparency":"We champion open sharing of code, data, materials, and working documents.",
        "Strengthen diamond open access publishing":"We support a healthier publishing ecosystem with community-driven, free-to-readers, free-to-authors publications of preprints, articles, and books.",
        "Connect researchers and practitioners":"We bridge the gap with forums for dialogue, plus global meetings and workshops to share results inclusively and affordably.",
        "Advance metascience":"We foster critical evaluations of research practices in our field.<br/>True self-correction in science demands scrutiny of methods, guiding future progress.",
    }
    
    return (
        <div className={`${styles.goals} ${isMobile ? styles.mobile : ''}`}>
            <h1>Our Missions</h1>
            <div className={styles.content}>
                {Object.entries(missionContent).map(([key, description]) => (
                    <div key={key} className={`${styles.item} ${isMobile ? styles.mobile : ''}`}>
                        <h3>{key}</h3>
                        <p dangerouslySetInnerHTML={{ __html: description }}/>
                    </div>
                ))}
            </div>
            <Button
                color="green"
                selected={true}
                onClick={() => navigate('/membership')}
            >
                Join us
            </Button>
        </div>
    );
}
