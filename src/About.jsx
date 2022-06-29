import React from "react";
import Common from "./Common";
import web from './images/ui.png'

const About = () =>{
    return(
       <>
        <Common 
        name='welcome to about page' 
        imgsrc={web} 
        visit='/contact'
        btname='contact now' />
       </>
    )
}

export default About;