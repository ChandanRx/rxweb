import React, { useState } from "react";

const Contact = () => {
   
  const [Data, setData] = useState({
    fullname : '',
    phone : '',
    email : '',
    msg : ''
  })

  const inputEvent = (event) =>{
        const {name , value} = event.target;
        setData((preVal)=>{
              return{
                ...preVal, [name] : value ,
              }
        })
  }

const formSubmit = (e) =>{
    e.preventDefault();
    alert(`my name is ${Data.fullname} , my phone number is ${Data.phone} , my email id is ${Data.email} and here what i want is ${Data.msg}`)
}

  return (
    <>
           <div className="my-5">
                  <h1 className="text-center"> Contact ME </h1>
           </div>
           <div className="container contact div">
           <div className="row">
            <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  
  <input type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
  name='fullname'
  value={Data.fullname}
  onChange={inputEvent} 
  placeholder="Type your Name"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number"
   class="form-control" 
   id="exampleFormControlInput1"
   name='phone'
   value={Data.phone}
   onChange={inputEvent} 
   placeholder="Type your mobile no."/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1"
  name='email'
  value={Data.email}
  onChange={inputEvent} 
  placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Message </label>
  <textarea class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  name='msg'
  onChange={inputEvent}
  value={Data.msg}
  >

  </textarea>
</div>
 <div class="col-12">
    <button className="btnS" type="submit">Submit form</button>
  </div>
            </form>

            </div>
           </div>

           </div>
    </>
  )
}

export default Contact;