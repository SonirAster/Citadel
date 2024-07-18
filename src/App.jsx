import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Proficiency from './components/Proficiency/Proficiency';
import Services from './components/Services/Services';
import Advantages from './components/Advantages/Advantages';
import ContactFormContainer from './components/ContactForm/ContactFormContainer';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo/Demo';
import { useRef } from 'react';

const App = () => {
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
        <div id='head'>
            <HeaderContainer 
                handleAboutClick={() => {scrollToSection(about)}}
                handleContactClick={() => {scrollToSection(contact)}}
                handleAdvantagesClick={() => {scrollToSection(advantages)}}
                handleShowcaseClick={() => {scrollToSection(demo)}}
            />
            <Hero 
                handleClick={() => {scrollToSection(services)}} 
                showAbout={() => {scrollToSection(about)}}
            />
            <About aboutRef={about} />
            <Advantages advantagesRef={advantages} />
            <Proficiency /> 
            <Services handleClick={() => {scrollToSection(demo)}} servicesRef={services} />
            <Demo demoRef={demo} />
            <Footer
                contact={contact}
                handleAboutClick={() => { scrollToSection(about) }}
                handleAdvantagesClick={() => { scrollToSection(advantages) }}
                handleServicesClick={() => { scrollToSection(services) }}
            /> 
            {/* <ContactFormContainer /> */}
        </div>
    )
}

export default App;