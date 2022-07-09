import React from "react";
import web from './images/ui.png';
import Common from "./Common";

const Home = () =>{
    return(
        <>
       <Common 
        name=' Hello , I am ' 
        imgsrc={web} 
        visit='/resume'
        btname='Resume' />
        </>
    )
}

export default Home;