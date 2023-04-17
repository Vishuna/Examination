import React from 'react';
import './AddStudent.css';
import CommonBack from '../CommonBack/CommonBack.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStudent=()=>{
    return(
       <CommonBack>
        <div>
            <h3>Add Student</h3>
             <form className='add_student_form'>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type="text" className='form-control' id="first_name" placeholder='Enter First Name'></input>
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type="text" className='form-control' id="first_name" placeholder='Enter Last Name'></input>
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <input type="text" className='form-control' id="first_name" placeholder='Enter Address'></input>
                </div>
                <div className='form-group'>
                    <label>Contact</label>
                    <input type="text" className='form-control' id="first_name" placeholder='Enter Contact'></input>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <input type="text" className='form-control' id="first_name" placeholder='Select Gender'></input>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
       </CommonBack>
    )
}

export default AddStudent;