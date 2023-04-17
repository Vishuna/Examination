import React from 'react';
import './MainBack.css';

const MainBack=({children})=>{
    return(
        <section className='mainback_section'>
            <div className='container'>
                <div className='row'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default MainBack;