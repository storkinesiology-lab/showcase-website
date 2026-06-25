import style from './index.module.scss';

import uo from '../../../assets/illustrations/uo.png';
import vu from '../../../assets/illustrations/vu.png';

export const HomeSupport = () => {
    return (
        <div className={style.support}>
            <h1 className={style.title}>They support us</h1>
            <div className={style.content}>                
                <img src={uo} alt="University of Ottawa Library" className={style.logo} />
                <img src={vu} alt="Vrije Universiteit Amsterdam" className={style.logo} />
            </div>
        </div>
    );
}