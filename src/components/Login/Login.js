import React,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import logo from "../images/log1.png";
import { FaUser,FaLock } from "react-icons/fa";
import MainBack from '../MainBack.js';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate= useNavigate();
    
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    const loggedIn=(e)=>{
        e.preventDefault();
        console.log("NIdhi");
        let data={username,password}
        fetch('http://127.0.0.1:8000/api/login/',{
            method:'POST',
            headers:{
                // 'Accept':'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify(data)

        })
        .then((result)=>result.json())
      
        .then((resp)=>{
           if(resp!=null){
            navigate('/add_student')
           }
            });
        }

    return(
        <MainBack>
                <div className='col-lg-6 col-12 img_col'>
                <img src={logo} alt="logo" className='img-fluid login_img'/>
                    </div>
                <div className='col-lg-6 col-12 login_col'>
                    <h2 className='header'>Login</h2>
                <form className='login_form'>
                        <div className='form-group'>
                        <div className='input-container'>
                            <FaUser className="f-icon"/>
                            <label>Username</label>
                            </div>
                            <input type="text" className='form-control' name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' required/>
                           
                        </div>
                        <div className='form-group'>
                        <div className='input-container'>
                            <FaLock className="f-icon"/>
                            <label>Password</label>
                            </div>
                            <input type="password" className='form-control' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" placeholder="Enter Password" required/>
                        
                        </div>
                        <div className='login_btn'>
                            
                        <button type="submit" onClick={loggedIn} className='btn btn-primary form-control'>Log In</button>
                        </div>
                    </form>
                </div>
         
        {/* <div className='container'>
            <div className='myCard'>
                <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 img_col'>
                    <img src={logo} alt="logo" className='img_logo'/>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12  login_col'>
                    <h3 className='mt-3'>Login</h3>
                    <form className='login_form'>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type="text" className='form-control' placeholder='Enter Username'/>
                        </div>
                        <div className='form-group'>
                            <label>Paswword</label>
                            <input type="password" className='form-control' placeholder="Enter Password"/>

                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div> */}
    </MainBack>
    );
}
export default Login;