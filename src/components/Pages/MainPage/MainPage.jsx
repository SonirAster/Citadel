import React from 'react';
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import Advantages from '../../Advantages/Advantages';
import Proficiency from '../../Proficiency/Proficiency';
import Services from '../../Services/Services';
import DemoContainer from '../../Demo/DemoContainer';

const MainPage = (props) => {
    return (
        <div>
            <Hero handleClick={props.scrollToSection} services={props.services} about={props.about}/>
            <About aboutRef={props.about} />
            <Advantages advantagesRef={props.advantages} />
            <Proficiency /> 
            <Services 
                servicesList={props.state.services}
                handleClick={() => {props.scrollToSection(props.demo)}} 
                servicesRef={props.services} 
            />
            <DemoContainer portfolio={props.state.portfolio} demoRef={props.demo} />
        </div>
    )
}

export default MainPage;