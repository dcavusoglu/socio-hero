import React, { useState, useEffect } from 'react';
// import { firebaseAuth } from 'firebase';
import axios from 'axios';
import { firebaseAuth } from "../../Firebase";



import {  signInWithEmailAndPassword } from "firebase/auth";



const SignIn = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

      signInWithEmailAndPassword(firebaseAuth,email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch(err => {
        const { code, message } = err
        console.log(code, message)
      })
    }

  return (
    <div>
      <form className='flex flex-col items-center w-1/2' onClick={handleSubmit}>
        <h2 className='text-pri-bg'>Sign Up</h2>
        <input type="email" id="email" name="email" value={email} placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" id="password" name="password" value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <button className='text-white' >Sign Up</button>
      </form>
    </div>
  )
}

export default SignIn
