import React from 'react';
import '../../App.css';
import LeftSidebar from '../../components/LefSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
// import  {BrowserRouter as Router} from 'react-router-dom'

const Questions =() =>{
    return(
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default Questions;