import React from 'react';
import styles from './Proficiency.module.css';

const Proficiency = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                <p>Your business <br /> idea - our performers</p>
            </h1>
            <p className={styles.description}>
                Strength, Willpower, Intelligence <i>-</i> Citadel can handle a task of any difficulty. 
                We <span>never stop.</span> We always create something new. In the name of Citadel and humanity.
            </p>
            {/* <button className={styles.button}>Explore the best specialists in different spheres.</button>
            <button className={styles.button}>Already have a website? - visit our support&development block. </button> */}
        </div>
    )
}

export default Proficiency;