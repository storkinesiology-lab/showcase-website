import { useState } from 'react';
import style from './index.module.scss';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router';

enum Items {
    Students = 'Students',
    Emerging = 'Emerging Professionals',
    Senior = 'Senior Professionals',
    Donation = 'Make a donation',
}

const itemsData: Record<Items, number | undefined> = {
    [Items.Students]: 18,
    [Items.Emerging]: 30,
    [Items.Senior]: 48,
    [Items.Donation]: undefined,
};

type MembershipPricesProps = {
    isMobile: boolean;
}

export const MembershipPrices = (props : MembershipPricesProps) => {
    const navigate = useNavigate();
    const [item, setItem] = useState<Items>(Items.Students);
    
    return (
        <div className={style.offer}>
            <h1 className={style.title}>Support us</h1>

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
                                        {key}
                                        {item === key ? <span className={`${style.mobileRectangle} ${style.selected}`} /> : <span className={`${style.mobileRectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.horizontalSeparator} />
                        </div>


                        {itemsData[item] !== undefined ?
                            <div className={style.mobileExplanation}>
                                <div>
                                    <h2 className={style.mobileExplanationTitle}>
                                        CAD $${itemsData[item]} per year
                                    </h2>
                                    <p>
                                        Membership fee for ${item.toString().toLowerCase()}
                                    </p>
                                </div>
                                <Button color="green" selected={true} onClick={() => navigate('/missions')}>
                                    {`Join as a ${item.toString().toLowerCase()}`}
                                </Button>
                            </div>
                            :
                             <div className={style.mobileExplanation}>
                                <h2 className={style.mobileExplanationTitle}>
                                    Make a donation of any amount you wish
                                </h2>
                                <Button color="green" selected={true} onClick={() => alert('Redirecting to Stripe API...')}>
                                    Donate to STORK
                                </Button>
                            </div>
                        }
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
                                        {key}
                                        {item === key ? <span className={`${style.rectangle} ${style.selected}`} /> : <span className={`${style.rectangle} ${style.unselected}`} />}
                                    </button>
                                ))}
                            </div>
                            <span className={style.verticalSeparator} />
                        </div>
                        {itemsData[item] !== undefined ?
                            <div className={style.explanation}>
                                <div>
                                    <h2 className={style.explanationTitle}>
                                        CAD ${itemsData[item]} per year
                                    </h2>
                                    <p className={style.explanationDescription}>
                                        Membership fee for {item.toString().toLowerCase()}
                                    </p>
                                </div>
                                <Button color="green" selected={true} onClick={() => alert('Redirecting to Stripe API...')}>
                                    {`Join as a ${item.toString().toLowerCase()}`}
                                </Button>
                            </div>
                            :
                             <div className={style.explanation}>
                                <h2 className={style.explanationTitle}>
                                    Make a donation of any amount you wish
                                </h2>
                                <Button color="green" selected={true} onClick={() => alert('Redirecting to Stripe API...')}>
                                    Donate to STORK
                                </Button>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    )
}
