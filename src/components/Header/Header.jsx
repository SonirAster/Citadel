import React, { useRef } from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    const menu = useRef(null);

    function openMenu () {
        document.body.style.overflow = 'hidden';
        menu.current.style.transform = 'translateY(0)';
    }

    function closeMenu () {
        document.body.style.overflowY = 'scroll';
        document.body.style.overflowX = 'hidden';
        menu.current.style.transform = 'translateY(-100%)';
    }

    return (
        <div className={styles.header}>
            <NavLink to='/' className={styles.logo}>Citadel</NavLink>
            <div className={styles.menuWrapper}>
                <button onClick={ openMenu } className={styles.menuIcon}>Menu</button>
                <ul ref={menu} className={styles.menu}>
                    <button className={styles.closeIcon} onClick={ closeMenu }>+</button>
                    {props.navMenuList.map(item => (
                        <li className={styles.menuItem}>
                            <button onClick={() => {
                                closeMenu();
                                props.handleRef(item.ref);
                            }}><i>{'<'}</i> {item.title}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default Header;