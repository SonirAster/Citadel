import React from 'react';
import styles from './ContactForm.module.css';
import shield from '../../assets/weapon/shield2.png';

const ContactForm = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Contact Citadel
            </h1>
            <p className={styles.descr}>
                You are welcome here. Ask any  question you want.
                {/* You are welcome to ask any questions. */}
            </p>
            <div style={{ display: 'flex' }}>
                <img src={shield} className={styles.shield} />
                <form action="#">
                    <div className={styles.formName}>
                        <label htmlFor="name">Name</label>
                        <input name='name' type="text" />
                    </div>

                    <div className={styles.formMail}>
                        <label htmlFor="mail">Your E<i className={styles.dash}>-</i>mail</label>
                        <input name='mail' type="text" />
                    </div>

                    <div className={styles.formTextarea}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" rows="6">
                        </textarea>
                    </div>
                    <button className={styles.button} type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;