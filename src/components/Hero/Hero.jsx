import React from 'react';
import styles from './Hero.module.css';
import photo from '../../assets/characters/warrior/warrior1.png';
import Arrow from '../../assets/arrow';

const Hero = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.frame}>
                    <img src={photo} alt="Citadel Knight" />
                    <p> 
                        <span>"We are not modern,</span>
                        <span>we are progressive."</span> 
                        <span><i>-</i> Citadel</span>
                    </p>
                </div>
                <div className={styles.description}>
                    <h1 className={styles.title}>Need a professional? Citadel is coming.</h1>
                    <button onClick={props.handleClick} className={styles.button}><i>{'<'}</i> View Services</button>
                    <button onClick={props.showAbout} className={styles.scrollDown}>
                        <Arrow />
                    </button>
                </div>
            </div>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
        </div>
    )
}

export default Hero;