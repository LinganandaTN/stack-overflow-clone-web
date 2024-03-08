import React from 'react';
import './Auth.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/stack-overflow.ico'
import {useState} from 'react'
import AboutAuth from './AboutAuth'

function Auth(){
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignup(!isSignup);
    }
    return(
        <section class='auth-section'>
            {isSignup && <AboutAuth/>}
            <div class="auth-container-2">
                { !isSignup && <><img src = {logo} class="login-logo" alt='stack_overflow'/><br/></>}
                <form>
                {isSignup && (<label htmlFor ='name'>
                <h4>Display Name</h4>
                <input type="text" id ='name' name='name'/>
                </label>)}
                    <label htmlFor="email">
                        <h4 >Email</h4>
                        <input type="email" name= 'email' id ='email'/>
                    </label>
                    <label htmlFor="password">
                       <div style={{display :'flex', justifyContent:'space-between'} }> <h4>Password</h4>
                        {!isSignup && <h4 style={{color: "#007ac6", fontSize:'13px'}}> Forgot Password</h4>}
                        </div> <input type="password" name= 'password' id ='password'/>
                        { isSignup&& <p  style={{color:"#0666767", fontSize:"13px"}}> Password must contain at least eight characters, including atleast 1 number and 1 letter</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id ='check'    style= {{textAlign : 'left', color:'yellow'}}/>
                                <p style={{marginTop:'5px', fontSize :'13px'}}>opt in to recieve occassional ,
                                product updates, user research invitations,
                                company announcements, and digests.
                                </p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn' >{isSignup ? 'Signup' : 'Login'}</button>
                    {
                        isSignup && (
                            <p style={{color:"#0666767", fontSize:"13px"}}>
                                By clicking "Sign up" you agree to out <span style={{color:"#007ac6"}}>terms of <br/>services</span>
                                <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'already have an account?' : " Don't  have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Login" : "Signup"}</button>
                </p>
            </div>
        </section>
 
    );
}

export default Auth;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import icon from '../../assets/stack-overflow.ico'

// import "./Auth.css";
// // import icon from "../../assets/icon.png";
// import AboutAuth from "./AboutAuth";
// import { signup, login } from "../../actions/auth";
// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSwitch = () => {
//     setIsSignup(!isSignup);
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email && !password) {
//       alert("Enter email and password");
//     }
//     if (isSignup) {
//       if (!name) {
//         alert("Enter a name to continue");
//       }
//       dispatch(signup({ name, email, password }, navigate));
//     } else {
//       dispatch(login({ email, password }, navigate));
//     }
//   };

//   return (
//     <section className="auth-section">
//       {isSignup && <AboutAuth />}
//       <div className="auth-container-2">
//         <img src={icon} alt="stack overflow" className="login-logo" />
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <label htmlFor="name">
//               <h4>Display Name</h4>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
//             </label>
//           )}
//           <label htmlFor="email">
//             <h4>Email</h4>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </label>
//           <label htmlFor="password">
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h4>Password</h4>
//               {!isSignup && (
//                 <p style={{ color: "#007ac6", fontSize: "13px" }}>
//                   forgot password?
//                 </p>
//               )}
//             </div>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </label>
//           <button type="submit" className="auth-btn">
//             {isSignup ? "Sign up" : "Log in"}
//           </button>
//         </form>
//         <p>
//           {isSignup ? "Already have an account?" : "Don't have an account?"}
//           <button
//             type="button"
//             className="handle-switch-btn"
//             onClick={handleSwitch}
//           >
//             {isSignup ? "Log in" : "sign up"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Auth;
