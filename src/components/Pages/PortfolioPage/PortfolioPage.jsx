import React from 'react';
import styles from './PortfolioCase.module.css';

const PortfolioCasePage = (props) => {
    let restImages = props.portfolioCase.images.splice(3);
    console.log(restImages);
    return (
        <div className={styles.main}>
            {/* <div className={styles.runningPanel}>
                <p>We are not modern, we are progressive.   We are not modern, we are progressive.  We are not modern, we are progressive.</p>
            </div> */}
            <h1 className={styles.title}>{props.portfolioCase.title}</h1>
            <p className={styles.description}>{props.portfolioCase.description}</p>
            <div className={styles.descrWrapper}>
                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src={props.portfolioCase.images[0]} />
                    <img className={styles.galleryItem} src={props.portfolioCase.images[1]} />
                    <img className={styles.galleryItem} src={props.portfolioCase.images[2]}/>
                </div>
            </div>
            {props.portfolioCase.link?
            <div className={styles.link}>
                <a href={props.portfolioCase.link} target='_blank'>Visit the Project</a>
            </div>:<></>}
            <div>
            {/* {restImages.map(item => {
                    return <img src={item}  />
                })} */}
            </div>
        </div>
    )
}

export default PortfolioCasePage;