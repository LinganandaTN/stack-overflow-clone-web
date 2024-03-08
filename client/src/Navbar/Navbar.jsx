import React from 'react';
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import {Link} from 'react-router-dom';
import './Navbar.css'
import Avatar from '../components/Avatar'
import Button from '../components/Button/Button'

const User= null;


const Navbar = () => {



    return (
      <nav className='main-nav'>
            <div className='navbar'>
                <Link to = '/' className='nav-item nav-logo' ><img src={logo} height='30px'alt="logo"/></Link>
                <Link to = '/About' className='nav-item nav-btn' >About</Link> 
                <Link to = '/Products' className='nav-item nav-btn'>Produts</Link> 
                <Link to = '/ForTeams' className='nav-item nav-btn'>For Teams</Link> 
            <form>
                <input type ="text" placeholder ="Search..."/> <img src={search} className='search-icon' alt ="search" />
            </form>
                {User === null ?
                  <Link to= '/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Link to ='/' className=''><Avatar>M</Avatar></Link>
                        <button className='nav-item nav-links'>Log out</button>
                    </>
                }
             </div>
        </nav>
           )
        }
        
export default Navbar;