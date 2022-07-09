import React from "react";
import { FaLink } from 'react-icons/fa';



const Card2 = (props) =>{
    return(
        <>

<div className="card2">
         <div className="col-md-4 col-10 mx-auto">
                       <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt='imgsrc'/>
  <div className="card-body">
    <h4 className="card-title ml-10">{props.title} <a href={props.Link} target='_blank' rel="noreferrer">
        <FaLink className="arrow" />
     </a></h4>
    <hr/>
    <p className="card-text">{props.p}  </p>
  </div>
  </div>
  </div>
  </div>

        </>
    )
}

export default Card2;