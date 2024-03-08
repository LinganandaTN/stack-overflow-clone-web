
import React from 'react';
import './RightSidebar.css';
import message from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.png'


const Widget =() =>{
    return(
      <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Observability is key to the future of software</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="pen" width='18'/>
                <p>Podcost 374: How valueble is your screen name?</p>
            </div>
        </div>
        
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="pen" width='18'/>
                <p>Review queue workflows - Final release ...  </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="pen" width='18'/>
                <p>Observability is key to the future overflow</p>
            </div>
        </div>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Observability is key to the future overflow</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Observability is key to the future overflow</p>
            </div>
        </div>
      </div>
    )
}

export default Widget;