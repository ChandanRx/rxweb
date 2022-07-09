import React from "react";
import Contact from "./Contact";
import About from "./About";
import {Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Service from "./Service";
import Home from "./Home";
import Navbar from "./Navbar";
import Resume from "./Resume";



const App = () =>{


     return(
        <>
        <div>
        <Navbar/>
        <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/projects" element={<About/>}/>
                <Route exact path="/resume" element={<Resume/>}/>
                <Route exact path="/skills" element={<Service/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                

        </Routes>
        </div>    
        </>
     )
}

export default App;