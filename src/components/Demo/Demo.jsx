import React, { useState } from 'react';
import styles from './Demo.module.css';
import DemoItem from './DemoItem';
import Arrow from '../../assets/arrow';

const Demo = (props) => {
    const [file, setFile] = useState(null);
    const [currentPack, setCurrentPack] = useState(null);
    const [descr, setDescr] = useState(null);
    const [link, setLink] = useState(null);

    function handlePrevClick () {
        let currentBannerIndex = currentPack.indexOf(file);
        let lastPackItemIndex = currentPack.length - 1;

        if (currentBannerIndex == 0) {
            setFile(currentPack[lastPackItemIndex])
        } else {
            setFile(currentPack[(currentBannerIndex - 1)])
        }
    }

    function handleNextClick () {
        let currentBannerIndex = currentPack.indexOf(file);
        let lastPackItemIndex = currentPack.length - 1;

        if (currentBannerIndex == lastPackItemIndex) {
            setFile(currentPack[0])
        } else {
            setFile(currentPack[(currentBannerIndex + 1)])
        }
    }

    let cases = props.portfolio.map(item => {
        return <DemoItem
            photo={item.images[0]}
            title={item.title}
            handleClick={() => {
                setFile(item.images[0]);
                setDescr(item.description);
                setLink(item.link ? item.link : null);
                setCurrentPack(item.images);
                document.body.style.overflowY = "hidden";
            }}
        />
    })

    return (
        <div className={styles.main} ref={props.demoRef}>
            <h2 className={styles.title}>Our showcase</h2>
            <p className={styles.description}>
                You will see here few of our works where it will be easy to notice golden ratio principle and 
                harmony of color and shape beautifully expressed in code.
            </p>
            <div className={styles.worksList}>{cases}</div>
            {file? 
                <div className={styles.demoScreen}>
                    <button onClick={() => {
                            setFile(null);
                            document.body.style.overflowY = "scroll";
                        }} className={styles.demoScreenBtn}>
                    +</button>
                    <button className={styles.arrPrev} onClick={handlePrevClick}>{'<'}</button>
                    <img src={file}/>
                    <div className={styles.demoScreenDescription}>
                        <div className={styles.demoScreenDescriptionInner}>
                            <span><Arrow/></span>
                            <p>{descr}</p>
                            {link?<a href={link}>Visit project</a>:<></>}
                        </div>
                    </div>
                    <button className={styles.arrNext} onClick={handleNextClick}>{'>'}</button>
                </div>  
                : <></>
            }
        </div>
    )
}

export default Demo;

