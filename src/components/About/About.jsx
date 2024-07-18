import React from 'react';
import styles from './About.module.css';

const About = (props) => {
    return (
        <div className={styles.main} ref={props.aboutRef}>
            <div className={styles.text}>
                <h1 className={styles.title}>Who we are?</h1>
                <p className={styles.description}>
                    Citadel was founded as a circle of warriors with different talents, ideals and traditions following the same goal: <span>Create</span>, <span>Support</span>, <span>Improve</span>. 
                    Citadel warrior's circle is the best 
                    way to find the most effective approach to your business that will help you to rise up on higher level.
                    <i> We will go further where others could not.</i>
                </p>
                <i className={styles.marker}></i>
            </div>
        </div>
    )
}

export default About;