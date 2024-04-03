import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({username, password}) 
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
    <div className="wrapper-login">
      <div className="login">
      <br/>


        <div className="login-signin-text">Sign in to X</div>
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

        <span>Password</span>
        <input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>

        <button
          onClick={() => loginUser()}
        >
          Login
        </button>
        <br/>

        <span style={{color: "blue", cursor: 'pointer'}} onClick={() => navigate('/register')}>Create user</span>

        <br/>
      </div>
    </div>
  );
}

export default Login;