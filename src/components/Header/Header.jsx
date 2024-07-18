import React from 'react';
import styles from './Header.module.css';
import sword from '../../assets/weapon/sword2.png';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a id='headerLogo' href="#head">Citadel</a>
                <img className={styles.sword} src={sword} alt="" />
            </div>
            <div className={styles.menuWrapper}>
                <div className={styles.menuIcon}>Menu</div>
                <ul className={styles.menu}>
                    <li><button onClick={props.showAbout}><i>{'<'}</i> About</button></li>
                    <li><button onClick={props.showAdvantages}><i>{'<'}</i> Our Advantages</button></li>
                    <li><button onClick={props.showShowcase}><i>{'<'}</i> Showcase</button></li>
                    {/* <li><i>{'<'}</i> Services</li> */}
                    <li><button onClick={props.showContacts}><i>{'<'}</i> Contact Us</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;