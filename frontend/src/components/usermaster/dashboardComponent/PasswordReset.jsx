import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordReset =()=>{
const [email,setEmail] =useState('');
const [message,setMessage]=useState("");

// const setVal=(e)=>{
//     setEmail=(e.target.value)
// }

const sendLink = async(e)=>{
e.preventDefault();

const res= await fetch("/sendpasswordlink",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({email})
});
const data=await res.json();
if(data.status == 201){
    setEmail("");
    setMessage(true)
}
else{
    toast.error("Invalid")
}
}
    return(

<div className="container">
      <h1>Enter Your Email</h1>
{message ? <p style={{color:"green",fontWeight:"bold"}}> password reset link send successfully in your email</p>:""}
      <form>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" id="email" placeholder="Email" required />
        <br />
        <button className='btn' onClick={sendLink}>Send</button>
      </form>
    </div>
    );
}

export default PasswordReset;