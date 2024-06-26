import React from 'react'
import './Register.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {

    if (password === "" || password !== confirmPassword) {
      return
    }
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({username, email, password}) 
    })
    
    const responseData = await response.json();

    if (response.ok) {
      localStorage.setItem('username', username)
      navigate("/")
    } else {
      alert(responseData.message)
    }
  }

  return (
    <div className="wrapper-register">
      <div className="register">
      <br/>
        <div className="register-signin-text">Register</div>
        <br/>
        <span>Username</span>
        <input
          autocomplete="off"
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <span>Email</span>
        <input
          autocomplete="off"
          id="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>

        <span>Password</span>
        <input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>

        <span>Confirm password</span>
        <input
          id="confirm-password"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>

        <button
          onClick={() => registerUser()}
        >
          Register
        </button>
        <br/>

        <span style={{color: "blue", cursor: 'pointer'}} onClick={() => navigate('/login')}>Already have an account?</span>

        <br/>

      </div>
    </div>
  )
}

export default Register