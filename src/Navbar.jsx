import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="navfar"> 

     

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink activeClassName='menu_active' className="navbar-brand" to='/'> <h1> <span style={{color:'silver'}}>Chandan</span> Pargi </h1> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to='/'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to='/Resume'>Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to='/skills'>Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to='/projects'>Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to='/contact'>Contact</NavLink>
        </li>
      
      
      </ul>

    </div>
  </div>
</nav>

</div>

</div>

</div>


        </>
    )
}

export default Navbar;