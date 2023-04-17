import {React} from 'react';
import './Sidebar.css';
import sidebar_img from '../components/sidebar_img.jpg';
import { FaPlus } from 'react-icons/fa';

const Sidebar=({children})=>{

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 col-6 sidebar'>
                    <div>
                        <img src={sidebar_img} className="sidebar_img"></img>
                    </div>
                   <ul className='sidebar_menu'>
                    <li className='menu_item'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='menu_item'>
                        <a href="#home" >About</a>
                    </li>
                    <li className='menu_item'>
                        <a href="#home" >Services</a>
                    </li>
                   </ul>
                    
                </div>
                <div className='col-md-9 main-content'>

                </div>
            </div>
            </div>


    );


}

export default Sidebar;