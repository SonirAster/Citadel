import React from 'react';
import styles from './Footer.module.css';
import Upwork from '../../assets/icons/UpworkIcon';
import Insta from '../../assets/icons/Instagram';
import Youtube from '../../assets/icons/Youtube';
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className={styles.footer} ref={props.contactRef}>
            <div className={styles.border}><span></span><span></span><span></span></div>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <p className={styles.descr}>
                        <span><i>W</i>e are not modern, </span>
                        <span><i>W</i>e are progressive.</span>
                    </p>
                    <div className={styles.contacts}>
                        <a href='mailto:ordoacris@gmail.com?subject=Letter to Citadel' className={styles.mail}><i>{'<'}</i>OrdoA<span>c</span>ris@gmail.com</a>
                        <a href='#' className={styles.phone}></a>
                        <a target='_blank' className={styles.instagram} href="https://www.instagram.com/knights_of_citadel/"><Insta /></a>
                        <a target='_blank' className={styles.youtube} href="https://www.youtube.com/channel/UC7xl5URHqEjpFrUHpJ4PlOQ"><Youtube /></a>
                        <a target='_blank' className={styles.upwork} href="https://www.upwork.com/freelancers/~01ad2adb9e9e08a61f"><Upwork /></a>
                    </div>
                </div>
                <ul className={styles.navigation}>
                    <li><NavLink to='/'><button className={styles.logo} onClick={() => {window.scrollTo(0, 0)}}>Citadel</button></NavLink></li>
                    <li><button onClick={() => {props.handleClick(props.services)}}>Services</button></li>
                    <li><button onClick={() => {props.handleClick(props.about)}}>About</button></li>
                    <li><button onClick={() => {props.handleClick(props.advantages)}}>Our Advantages</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;