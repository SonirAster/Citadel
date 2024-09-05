import React from 'react';
import styles from './Demo.module.css';

const DemoItem = (props) => {
    return (
        <div className={styles.work}>
            <img className={styles.itemPhoto} src={props.photo} />
            <button onClick={props.handleClick} className={styles.itemButton}><i>{'<'}</i> Learn more</button>
        </div>
    )
}

export default DemoItem;