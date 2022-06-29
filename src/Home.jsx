import React from "react";
import web from './images/ui.png';
import Common from "./Common";

const Home = () =>{
    return(
        <>
       <Common 
        name='Grow Your Knowledge With' 
        imgsrc={web} 
        visit='/service'
        btname='Get Started' />
        </>
    )
}

export default Home;