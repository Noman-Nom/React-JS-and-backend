import React from 'react'
import { useState } from 'react'
import './Login.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config/Firebase';

const Login = () => {
 
    const [error, setError] = useState(false)

    const handleLogin = (e)=>{
      e.preventDefault()

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button type='submit'>Login</button>
        {error && <span>wrong email or password</span>}
      </form>
    </div>
  )
}

export default Login