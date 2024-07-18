import React, { useEffect } from 'react';
import Header from './Header';

const HeaderContainer = (props) => {
    useEffect(() => {
        function splitLetters (title) {
            const letters = title.innerHTML.split('');
            title.innerHTML = '';
            letters.map(letter => {
                let span = document.createElement('span');
                span.classList.add('char');
                span.innerHTML = letter;
                title.appendChild(span);
                return span;
            })
        }
        let logo = document.querySelector('#headerLogo');
        splitLetters(logo);
    }, [])

    return <Header
        showAbout={props.handleAboutClick}
        showContacts={props.handleContactClick}
        showAdvantages={props.handleAdvantagesClick}
        showShowcase={props.handleShowcaseClick}
    />;
}

export default HeaderContainer;