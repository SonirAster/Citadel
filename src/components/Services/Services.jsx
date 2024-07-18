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
    const servicesFirstRow = [
        {'title': 'Logo',  'description': 'Recognisable exclusive logo to pass through the centuries.'}, 
        {'title': 'Branding',  'description': 'No templates for you. Only your unique, recognizable style.'},
        {'title': 'Design',  'description': 'We will create unforgettable impression that will remain in the memory of your clients.'},
        {'title': 'Localization',  'description': 'Do not limit your opportunities. Order this service from us and extend zone of your influence.'},
        {'title': 'Outstaffing',  'description': 'Hire our warriors for saving time and money. We are always ready to give a hand.'},
    ];

    const servicesSecondRow = [
        {'title': 'Copywriting',  'description': 'Words and texts, either created by us or neated by us will find your audithory.'}, 
        {'title': 'Concept Idea',  'description': 'The universe was started with an Idea. We will develop for you optimal concept idea, different to others.'}, 
        {'title': 'WebSite',  'description': 'We create simple and complex websites for any business and audithory.'}, 
    ];

    return (
        <div className={styles.wrapper} ref={props.servicesRef}> 
            <h2 className={styles.title}>
                Our Services
            </h2>
            <ul className={styles.servicesList}>
                {servicesFirstRow.map(service => {
                    return (<ServiceCard title={service.title} description={service.description} />)
                })}
                <li className={styles.servicesListCardButton}>
                    <h3>See the Demo</h3>
                    <button onClick={props.handleClick} className={styles.arrowWrapper}>
                        <Arrow color='var(--gold)' />
                    </button>
                    <span>Take a look at our works</span>
                </li>
                {servicesSecondRow.map(service => {
                    return (<ServiceCard title={service.title} description={service.description} />)
                })}
            </ul>

                {/* 
                        Creating unforgettable design for your product
                        will remain in the memory of everyone who wiil see your product made by us. */}
                        {/* of everyone that saw your product from us. */}
            
                {/* <li className={styles.servicesListCard}>
                    <h3 className={styles.cardTitle}>CRM-SYSTEM</h3>
                    <p className={styles.cardDescription}>
                        We develop individual and implement ready-made CRM systems of our design in the 
                        businesses of clients of various subjects: from trade to construction.

                        We design and create modern, powerful online tools for business. 
                    </p>
                </li>
                                <li className={styles.servicesListCard}>
                    <h3 className={styles.cardTitle}>ONLINE STORES</h3>
                    <p className={styles.cardDescription}>
                        We create high-quality, simple and complex, selling online stores. 
                        We pay special attention to marketing and future store promotion in the search.
                    </p>
                </li>

                <li className={styles.servicesListCard}>
                    <h3 className={styles.cardTitle}>Advanced functionality</h3>
                    <p className={styles.cardDescription}>
                        service description
                    </p>
                </li>
                <li className={styles.servicesListCard}>
                    <h3 className={styles.cardTitle}>IT OUTSOURCING</h3>
                    <p className={styles.cardDescription}>
                        Who now is the remote team.
                    </p>
                </li>
                <li className={styles.servicesListCard}>
                    <h3 className={styles.cardTitle}>SPA APPLICATION</h3>
                    <p className={styles.cardDescription}>
                
                    Creating SPA applications allows you to design a multi-page portal or digital business solution in the form of a fast and stable web service, the interface of which resembles not a website, but an application program.
                    </p>
                </li> */}
        </div>
    )
}

export default Services;