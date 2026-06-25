import { useIsMobileWidth } from '../../../../hooks/useIsMobileWidth';
import styles from './index.module.scss';

type NavigationProps = {
    children: React.ReactNode;
    selected : boolean;
    onClick: () => void;
}

export const Navigation = (props : NavigationProps) => {
    const isMobile = useIsMobileWidth();
    const className = `${styles.navigation} ${props.selected ? styles.selected : ''} ${isMobile ? styles.mobile : ''}`;


    return (
        <button className={className} onClick={props.onClick}>
            {!isMobile && props.selected ?
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#121212"/>
                </svg> : <></>
            }
            {props.children}
        </button>
    );
}