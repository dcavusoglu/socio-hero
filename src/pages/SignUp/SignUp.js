import React, {useState} from "react";
import './SignUp.css';
import axios from 'axios';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "../../Firebase";

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
    <div>
      <form onSubmit={signUp}>
      <div className='flex flex-col items-center w-1/2'>
        <h2 className='text-pri-bg'>Sign Up</h2>
        <input type="email" id="email" name="email" value={email} placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" id="password" name="password" value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <button className='text-white'>Sign Up</button>
      </div>
    </form>
    </div>
  )
}

export default SignUp
