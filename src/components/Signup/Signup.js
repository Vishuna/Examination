import { React, useState } from 'react';
import MainBack from './MainBack.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";
import logo from "../images/log1.png";
import './Signup.css';
const Signup=() =>{
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const saveUser=()=>{
        let data={username,email,password}
        fetch("http://127.0.0.1:8000/api/register/",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
            console.warn("resp",resp);
        })

    })
    }
    return(
        <section className='signup_section'>
            <MainBack>
            <div className='col-lg-6 col-12 img_col'>
                <img src={logo} alt="logo" className='img-fluid login_img'/>
            </div>
            <div className='col-lg-6 col-12 login_col'>
                    <h2 className='header'>Signup</h2>
                <form className='login_form'>
                    <div className='form-group'>
                        <div className='input-container'>
                        <FaUser className="f-icon"/>
                        <label>Username</label>
                        </div>
                        <input type="text" className='form-control' value={username} onChange={(e)=>{setUsername(e.target.value)}} name="username" placeholder='Enter Username' required/>
                    </div>
                    <div className='form-group'>
                            <div className='input-container'>
                            <FaEnvelope className='f-icon'/>
                            <label>Email</label>
                            </div>
                            <input type='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder='Enter Email' required/>
                    </div>
                    <div className='form-group'>
                        <div className='input-container'>
                            <FaLock className="f-icon"/>
                            <label>Password</label>
                            </div>
                            <input type="password" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" placeholder="Enter Password" required/>
                        
                    </div>
                    <div className='form-group'>
                            <div className='input-container'>
                                <FaLock className='f-icon'/>
                                <label>Confirm Password</label>
                            </div>
                            <input type="password" className='form-control' name="confirm_passsword" placeholder='Enter Confirm Password' required/>
                    </div>
                        <div className='login_btn'>
                        <button type="submit"  onClick={saveUser} className='btn btn-primary form-control'>Log In</button>
                        </div>
                    </form>
                </div>
            </MainBack>
        </section>
       
       
    )

}

export default Signup;