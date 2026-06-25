import Francois from '../../../assets/comittee/FrancoisJabouille.jpg';
import Job from '../../../assets/comittee/JobFransen.jpg';
import Layan from '../../../assets/comittee/LayanFessler.png';
import Matthieu from '../../../assets/comittee/MatthieuBoisgontier.jpg';
import Sjoerd from '../../../assets/comittee/SjoerdBruijn.jpg';
import Timothee from '../../../assets/comittee/TimotheeDumas.jpg';
import Zack from '../../../assets/comittee/ZackZenko.jpg';
import Aaron from '../../../assets/comittee/AaronCaldwell.jpg';
import LinkedIn from '../../../assets/icons/linkedin.svg';

import styles from './index.module.scss';

enum Members {
    Francois = 'Francois Jabouille',
    Job = 'Job Fransen',
    Layan = 'Layan Fessler',
    Matthieu = 'Matthieu Boisgontier',
    Sjoerd = 'Sjoerd Bruijn',
    Timothee = 'Timothee Dumas',
    Zack = 'Zack Zenko',
    Aaron = 'Aaron Caldwell'
}

export type MemberProps = {
    picture?: string | null;
    name: string;
    academy: string;
    role: string;
    linkedin?: string | null;
    isMobile?: boolean;
}

const membersData: Record<Members, MemberProps> = {
    [Members.Job]: {
        picture: Job,
        name: 'Job Fransen',
        academy: 'PhD',
        role: 'Chair',
        linkedin: 'https://www.linkedin.com/in/jobfran/',
    },
    [Members.Matthieu]: {
        picture: Matthieu,
        name: 'Matthieu Boisgontier',
        academy: 'PhD',
        role: 'Chair of Publications  (CiK, SportRxiv, K-Books)',
        linkedin: 'https://www.linkedin.com/in/matthieuboisgontier/',
    },
    [Members.Sjoerd]: {
        picture: Sjoerd,
        name: 'Sjoerd Bruijn',
        academy: 'PhD',
        role: 'Editor in Chief of Communications in Kinesiology',
        linkedin: 'https://www.linkedin.com/in/sjoerdbruijn/',
    },
    [Members.Layan]: {
        picture: Layan,
        name: 'Layan Fessler',
        academy: 'PhD',
        role: 'Moderator in Chief of SportRxiv',
        linkedin: 'https://www.linkedin.com/in/layan-fessler/',
    },
    [Members.Zack]: {
        picture: Zack,
        name: 'Zack Zenko',
        academy: 'PhD',
        role: 'Editor in Chief of Kinesiology Books (K-Books)',
    },
    [Members.Francois]: {
        picture: Francois,
        name: 'Francois Jabouille',
        academy: 'PhD Candidate',
        role: 'Treasurer',
        linkedin: 'https://www.linkedin.com/in/fran%C3%A7ois-jabouille/',
    },
    [Members.Aaron]: {
        picture: Aaron,
        name: 'Aaron Caldwell',
        academy: 'PhD',
        role: 'Production Editor (CiK)',
        linkedin: 'https://www.linkedin.com/in/acaldwe7/',
    },
    [Members.Timothee]: {
        picture: Timothee,
        name: 'Timothée Dumas',
        academy: 'PhD Candidate',
        role: 'Webpage Manager',
        linkedin: 'https://www.linkedin.com/in/timoth%C3%A9e-dumas-702a151a1/?locale=en',
    }
};

type AboutTeamProps = {
    isMobile: boolean;
}

export const AboutTeam = ({ isMobile }: AboutTeamProps) => {
    return (
        <div className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
            {Object.entries(membersData).map(([member, props]) => (
                <Member key={member} {...props} isMobile={isMobile} />
            ))}
        </div>
    );
}

const Member = (props: MemberProps) => {
    return (
        <div key={props.name} className={`${styles.member} ${props.isMobile ? styles.mobile : ''}`}>
            {props.picture ? (
                <img key={props.name} src={props.picture} alt={props.name} className={styles.picture}/>
            ) : (
                <div className={styles.picture} />
            )}
            <div className={`${styles.info} ${props.isMobile ? styles.mobile : ''}`}>
                <div className={`${styles.title}`}>
                    <h3>{props.name}</h3>
                    <p>{props.academy}</p>
                </div>
                <p>{props.role}</p>
                {props.linkedin && (
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt={`${props.name} LinkedIn`} />
                    </a>
                )}
            </div>
        </div>
    );
}