import React from "react";
import { NavLink } from "react-router-dom";
import img from './images/5698.png'


const Resume = () =>{
    return(
        <>
            <img src={img} alt='img' className="resume"/>
            <div className="text-center mt-2">
            <NavLink to='/skills' className='btn-get-started'> My Skills </NavLink>
            </div>
        </>
    )
}

export default Resume;
