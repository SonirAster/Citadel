import React from 'react';
import styles from './Advantages.module.css';

const Advantages = (props) => {
    return (
        <div className={styles.main} ref={props.advantagesRef}>
            <h2 className={styles.title}>
                Finding the <span>right</span> solution for your business.
            </h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.listItemDescription}>
                        <p>The shortest possible time</p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.listItemDescription}>
                        <p>Individual approach</p>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.listItemDescription}>
                        <p>Protection of your advantages</p>
                    </div>
                </li>
            </ul>
            {/* <p className={styles.mainDescr}>
                Finding the <span>right</span> solution for your business.
            </p> */}
        </div>
    )
}

export default Advantages;