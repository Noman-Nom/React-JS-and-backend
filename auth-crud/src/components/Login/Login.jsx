import React, { useContext } from 'react'
import { useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config/Firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const Login = () => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        dispatch({type : "LOGIN", payload:user})
        console.log(user)

        navigate("/")

      })
      .catch((error) => {
    setError(true)
        console.log(error)
      });

  }
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && <span>wrong email or password</span>}
      </form>
    </div>
  )
}

export default Login