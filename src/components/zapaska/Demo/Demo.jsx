import React, { useState } from 'react';
import styles from './Demo.module.css';
import banners from '../../works';
import DemoItem from './DemoItem';

const Demo = (props) => {
    const [file, setFile] = useState(null);
    const [currentPack, setCurrentPack] = useState(null);

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

    return (
        <div className={styles.main} ref={props.demoRef}>
            <h2 className={styles.title}>Our showcase</h2>
            <p className={styles.description}>
                You will see here few of our works where it will be easy to notice golden ratio principle and 
                harmony of color and shape beautifully expressed in code.
            </p>
            <div className={styles.worksList}>
                {banners.map((item,index) => {
                    return <DemoItem 
                        photo={item[0]} 
                        handleClick={() => {
                            setFile(item[0]);
                            setCurrentPack(item);
                            document.body.style.overflowY = "hidden";
                        }}
                    />
                })}
            </div>
            {file? 
                <div className={styles.demoScreen}>
                    <button onClick={() => {
                            setFile(null);
                            document.body.style.overflowY = "scroll";
                        }} className={styles.demoScreenBtn}>
                    +</button>
                    <button
                        className={styles.arrPrev}
                        onClick={handlePrevClick}
                    >{'<'}</button>

                    <img src={file}/>
                    <button 
                        className={styles.arrNext}
                        onClick={handleNextClick}
                    >{'>'}</button>
                </div>  
                : <></>
            }
        </div>
    )
}

export default Demo;