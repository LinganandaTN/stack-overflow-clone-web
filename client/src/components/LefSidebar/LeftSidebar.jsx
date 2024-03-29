import React from 'react';
import './LeftSidebar.css';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import Globe from '../../assets/Globe.png'


const LeftSidebar =() =>{
    return(

        <div className='left-sidebar'>
        <nav className='side-nav'>

           <NavLink to='/' className='side-nav-links' activeClassName='active'  style={{paddingLeft:'40px'}} >
                 <p>Home</p>
             </NavLink>
             <div className='side-nav-div' >
             <div style={{paddingLeft:'40px'}}> <p>Public</p></div>
             <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                 <img src={Globe} height='15px' alt="Globe" />
                <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                <p>Tags</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                <p>Users</p>
            </NavLink>
           </div>
        </nav>
        </div>

    )
}

export default LeftSidebar;