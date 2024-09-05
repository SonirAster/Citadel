import React from 'react';
import styles from './Services.module.css';
import Arrow from '../../assets/arrow';

const ServiceCard = (props) => {
    return (
        <li className={styles.servicesListCard}>
            <h3 className={styles.cardTitle}><i>{'<'}</i> {props.title}</h3>
            <p className={styles.cardDescription}>
                {props.description}
            </p>
        </li>
    )
}

const Services = (props) => {   
    function renderServices (servicesRow) {
        let row = servicesRow.map(service => {
            return (<ServiceCard 
                title={service.title} 
                description={service.description} 
            />)
            })
        return row;
    }

    let firstRowNumber = 5;
    let firstRow = renderServices(props.servicesList.slice(0, firstRowNumber));
    let secondRow = renderServices(props.servicesList.slice(firstRowNumber));

    // state.services.forEach(i => {
    //     state.routes.push(`/${i.title}`)
    // })

    return (
        <div className={styles.wrapper} ref={props.servicesRef}> 
            <h2 className={styles.title}>Our Services</h2>
            <ul className={styles.servicesList}>
                {firstRow}
                <li className={styles.servicesListCardButton}>
                    <h3>See the Demo</h3>
                    <button onClick={props.handleClick} className={styles.arrowWrapper}>
                        <Arrow color='var(--gold)' />
                    </button>
                    <span>Take a look at our works</span>
                </li>
                {secondRow}
            </ul>
        </div>
    )
}

export default Services;