import React from 'react';
import Demo from './Demo';

const DemoContainer = (props) => {


    return (
        <Demo 
            portfolio={props.portfolio} 
            title={props.title} 
            demoRef={props.demoRef} 

        />
    )
}

export default DemoContainer;