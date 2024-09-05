import React from 'react';
import Header from './Header';

const HeaderContainer = (props) => {
    return <Header
        showAbout={props.handleAboutClick}
        showContacts={props.handleContactClick}
        showAdvantages={props.handleAdvantagesClick}
        showShowcase={props.handleShowcaseClick}
    />;
}

export default HeaderContainer;