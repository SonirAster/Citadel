import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import PortfolioCasePage from './components/Pages/PortfolioPage/PortfolioPage';

const App = (props) => {
    const services = useRef(null);
    const about = useRef(null);
    const advantages = useRef(null);
    const demo = useRef(null);
    const contact = useRef(null);

    function scrollToSection (itemRef) {
        window.scrollTo({
            top: itemRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <BrowserRouter>
            <HeaderContainer about={about} contact={contact} 
                advantages={advantages} demo={demo} 
                handleRef={scrollToSection}
            />
            <MainPage
                scrollToSection={scrollToSection}
                state={props.state}
                services={services}
                about={about} advantages={advantages}
                demo={demo} contact={contact}
            />

            <Footer contactRef={contact} services={services} 
                about={about} advantages={advantages} 
                handleClick={scrollToSection}
            />
            {/* <ContactFormContainer /> */}
        </BrowserRouter>
    )
}

export default App;