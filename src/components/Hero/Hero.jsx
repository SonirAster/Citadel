import React from 'react';
import styles from './Hero.module.css';
import Arrow from '../../assets/arrow';

const Hero = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.frame}>
                    <div className={styles.frameArrow}><Arrow /></div>
                </div>
                <div className={styles.description}>
                    <div className={styles.titleWrapper}>
                        <h1 className={styles.title}>Need a professional? Citadel is coming.</h1>
                        <button onClick={() => {props.handleClick(props.services)}} className={styles.button}><i>{'<'}</i> View Services</button>
                    </div>
                    <p className={styles.quote}> 
                        <span>"We are not modern,</span>
                        <span>we are progressive."</span> 
                        <span><i>- </i>Citadel</span>
                    </p>
                </div>
            </div>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
        </div>
    )
}

export default Hero;