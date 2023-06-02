import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
const[id,idChange]=useState("");
const[name,nameChange]=useState("");
const[password,passwordChange]=useState("");
const[email,emailChange]=useState("");
const[phone,phoneChange]=useState("");
const[country,countryChange]=useState("");
const[address,addressChange]=useState("");
const[gender,genderChange]=useState("");
const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        let regobj={id,name,password,email,phone,country,address,gender};
       // console.log(regobj);


       fetch("http://localhost:8080/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(regobj)
        
       }).then((res)=>{
        res.json()
        toast.success('Registered successfuly.')
       }).catch((err)=>{
        toast.error('failed : '+err.message)
       });
       console.log(regobj)
       window.localStorage.setItem('st',JSON.stringify(regobj))
       navigate('/')
    }
    
    return (
        <div>

            <div className="offset-lg-3 col-lg-6">
                <form className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1 className='text-danger'> User  Register</h1>
                        </div>

                        <div className='card-body'>
                            <div className='row'>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>User Name <span className="errmsg">*</span></lable>
                                        <input required value={id} onChange={e=>idChange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Password <span className="errmsg">*</span></lable>
                                        <input   value={password} onChange={e=>passwordChange(e.target.value)} type="password" className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Full Name <span className="errmsg">*</span></lable>
                                        <input   value={name} onChange={e=>nameChange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Email <span className="errmsg">*</span></lable>
                                        <input  value={email} onChange={e=>emailChange(e.target.value)} type="mail" className ='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Phone No <span className="errmsg">*</span></lable>
                                        <input    value={phone} onChange={e=>phoneChange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Country <span className="errmsg">*</span></lable>
                                        <select   value={country} onChange={e=>countryChange(e.target.value)} className='form-control'>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="japan">Japan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <lable>Address </lable>
                                        <textarea   value={address} onChange={e=>addressChange(e.target.value)} className='form-control'></textarea>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <lable>Gender</lable>
                                        <br /><br />
                                        <input type="radio" checked={gender==="male"}  onChange={e=>genderChange(e.target.value)} name="gender " value="male" className='app-check'></input>
                                        <lable>Male</lable>
                                        <input type="radio"    checked={gender==="female"}  onChange={e=>genderChange(e.target.value)} name="gender" value="female" className='app-check'></input>
                                        <lable>Female</lable>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type="button" onClick={handlesubmit}  className='btn btn-primary'>Register</button> |    
                            <a className='btn btn-danger'>Back</a>
                        </div>
                    </div>
                </form>
            </div>



        </div>
    );
};




export default Register;