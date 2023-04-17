import React from 'react';
import './CommonBack.css';
import logo from '../images/log1.png';

const CommonBack=({children})=>{
    return(
      <div className='container-fluid main_container'>
        <div className='row main_row'>
        <div style={{backgroundColor:'#f0f0f0'}} className='col-2 sidebar_col'>
          <img src={logo} alt="Examination" className='img-fluid'/>
          <div className='main_menu'>
            <div className='menu_item'>
              Dashboard
            </div>
            <div className='menu_item'>
              Add Student
            </div>
            <div className='menu_item'>
              Add Class
            </div>
            <div className='menu_item'>
              Add Attendance
            </div>
            <div className='menu_item'>
              Logout
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'#ffffff'}} className='col-10 main_content_col'>
          {children}
        </div>
      </div>
      </div>
    )
}
export default CommonBack;