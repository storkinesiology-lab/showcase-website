import { useState } from 'react';
import style from './index.module.scss';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router';

enum Items {
    Sportrxiv = 'Sportrxiv',
    CommunicationInKinesiology = 'CommunicationInKinesiology',
    KinesiologyBooks = 'KinesiologyBooks',
    Webinars = 'Webinars',
    Workshops = 'Workshops',
}

const itemsData: Record<Items, { title: string; description: string }> = {
    [Items.Sportrxiv]: {
        title: 'SportRxiv',
        description: 'It is the first community-led open-access repository dedicated to kinesiology and health research.<br/><br/>It is a platform that allows researchers to share their work and collaborate with others.',
    },
    [Items.CommunicationInKinesiology]: {
        title: 'Communications in Kinesiology (CiK)',
        description: 'Communications in Kinesiology is the official journal of STORK.<br/><br/>It champions rigorous, transparent research practices to enhance reproducibility and integrity across all domains related to movement sciences, including sports, exercise, physical activity, physiology, biomechanics, neuroscience, rehabilitation sciences, nutrition.<br/>It welcomes empirical work that prioritizes methodological soundness over positive results, fostering a new era of trustworthy scholarship.<br/><br/>It is free for both authors and readers. No fees, no paywalls. Just research, shared openly. Run by researchers, for researchers. We are lucky to have support from the University of Ottawa Library and the Free Journal Network to keep it free and growing.',
    },
    [Items.KinesiologyBooks]: {
        title: 'Kinesiology Books (K-Books)',
        description: 'Kinesiology Books offers comprehensive resources that support learning, research, and teaching in the movement sciences.<br/><br/>These open-access books promote transparency and reproducibility by making high-quality information freely available to students, educators, and researchers worldwide.',
    },
    [Items.Webinars]: {
        title: 'Webinars',
        description: 'Webinars are a powerful tool for sharing knowledge and building community.<br/><br/>They allow researchers to connect with others in the field, share their work, and learn from each other in real-time.',
    },
    [Items.Workshops]: {
        title: 'Workshops',
        description: 'Workshops provide an interactive environment for researchers and practitioners to learn new skills, share techniques, and collaborate on projects in our fields.',
    },
};

type HomeOfferProps = {
    isMobile: boolean;
}

export const HomeOffer = (props : HomeOfferProps) => {
    const navigate = useNavigate();
    const [item, setItem] = useState<Items>(Items.Sportrxiv);
    
    return (
        <div className={style.offer}>
            <h1 className={style.title}>What we offer</h1>

            {props.isMobile ?
                (
                    <div className={style.mobileContent}>
                        <div className={style.mobileMenu}>
                            <div className={style.mobileMenuItems}>
                                {Object.entries(itemsData).map(([key, value]) => (
                                    <button
                                        key={key}
                                        className={`${style.mobileMenuItem} ${item === key ? style.active : ''}`}
                                        onClick={() => setItem(key as Items)}
                                    >
                                        {value.title}
                                        {item === key ? <span className={`${style.mobileRectangle} ${style.selected}`} /> : <span className={`${style.mobileRectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.horizontalSeparator} />
                        </div>
                        <div className={style.mobileExplanation}>
                            <h2 className={style.mobileExplanationTitle}>{itemsData[item].title}</h2>
                            <p className={style.mobileExplanationDescription} dangerouslySetInnerHTML={{ __html: itemsData[item].description }} />
                            <Button color="green" selected={true} onClick={() => navigate('/missions')}>
                                {`Learn more about ${itemsData[item].title}`}
                            </Button>
                        </div>
                    </div>
                )
            :
                (
                    <div className={style.content}>
                        <div className={style.menu}>
                            <div className={style.menuItems}>
                                {Object.entries(itemsData).map(([key, value]) => (
                                    <button
                                        key={key}
                                        className={`${style.menuItem} ${item === key ? style.active : ''}`}
                                        onClick={() => setItem(key as Items)}
                                    >
                                        {value.title}
                                        {item === key ? <span className={`${style.rectangle} ${style.selected}`} /> : <span className={`${style.rectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.verticalSeparator} />
                        </div>
                        <div className={style.explanation}>
                            <h2 className={style.explanationTitle}>{itemsData[item].title}</h2>
                            <p className={style.explanationDescription} dangerouslySetInnerHTML={{ __html: itemsData[item].description }} />
                            <Button color="green" selected={true} onClick={() => navigate('/missions')}>
                                {`Learn more about ${itemsData[item].title}`}
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
