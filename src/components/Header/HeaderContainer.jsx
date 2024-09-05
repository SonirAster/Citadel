import React from 'react';
import Header from './Header';

const HeaderContainer = (props) => {
    let navMenuList = [
        {title: 'About', ref: props.about}, 
        {title: 'Our Advantages', ref: props.advantages}, 
        {title: 'Showcase', ref: props.demo},
        {title: 'Contact Us', ref: props.contact},
    ];

    return <Header 
        navMenuList={navMenuList}
        handleRef={props.handleRef}
    />;
}

export default HeaderContainer;