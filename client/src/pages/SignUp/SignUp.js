import React, {useState} from "react";
import './SignUp.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { createUserWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "../../Firebase";
import glass from '../../assets/glass.png';



const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-form-wrapper">
      <span className="glass-img-cont">
        <img src={glass} alt='coctail' className="glass-img"/>
      </span>
      <form onSubmit={signUp} className="auth-form">
      <div className='flex flex-col items-center w-1/2'>
        <h2 className="text-purple-500 font-semibold text-xl">Sign Up</h2>
        <input type="email" id="email" name="email" value={email} placeholder='email' required onChange={(e)=>setEmail(e.target.value)} className='border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64'/>
        <input type="password" id="password" name="password" value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)} className='border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64'/>
        <Link to="/dashboard"><button className='text-white  bg-indigo-500 py-1 px-4 rounded-lg my-2'>Sign Up</button></Link>
      </div>
    </form>
    </div>
  )
}

export default SignUp
