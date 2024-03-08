import React from "react";
import Home from '././Pages/Auth/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
const AllRoutes = () => {
    return (<Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path ='/Auth' element={<Auth />}></Route>
        <Route path='/Questions' element={<Questions />}></Route>
        <Route path='/AskQuestion' element={<AskQuestion />}></Route>
        <Route path='/Questions/:_id' element={<DisplayQuestion />}></Route> 
   </Routes>)
}

export default AllRoutes;