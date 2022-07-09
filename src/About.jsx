import React from "react";
import Card2 from "./Card2";
import Pdata from "./Pdata";

const Service = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center" style={{color:'white'}}> My Projects 👍</h1>
            </div>
            
            <div className="container-fluid mb-5">
            <div className="row">
            <div className="col-10 mx-auto">
               <div className="row gy-4" style={{color:'white'}}>
              
              {
                Pdata.map((val,ind)=>{
                     return(
                        <Card2
                            key={ind}
                            imgsrc={val.Pimg}
                            title={val.name}
                            p={val.features}
                            Link={val.Link}
                        />
                     )
                })
              }

               </div>
            </div>

            </div>

            </div>
        </>
    )
}

export default Service;