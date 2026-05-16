import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const url = isLogin
    ? "http://localhost:5000/api/auth/login"
    : "http://localhost:5000/api/auth/register";

  const response = await fetch(url, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(formData)

  });


  const data = await response.json();

  setMessage(data.message);

  setMessageType(
  data.success ? "success" : "error"
  );

  setTimeout(() => {

  setMessage("");

  }, 3000);

  // console.log(data);

  // alert(data.message);

  if (data.success && isLogin) {

  localStorage.setItem(
    "token",
    data.token
  );

  localStorage.setItem(

  "isAdmin",

  data.isAdmin

);

setIsLoggedIn(true);

navigate("/");

}

  };

  return (

  <div className="auth-page">
  <div>

    {
      message && (

        <div
          className={
            messageType === "success"
              ? "message success-message"
              : "message error-message"
          }
        >
          {message}
        </div>

      )
    }

    <div className="auth-card">

      <h1 className="auth-title">
        {isLogin ? "Login" : "Create Account"}
      </h1>

      <form onSubmit={handleSubmit}>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="auth-input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          onChange={handleChange}
        />

        <button className="auth-btn">
          {isLogin ? "Login" : "Register"}
        </button>

      </form>

      <p
        className="switch-text"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "New user? Register"
          : "Already have an account? Login"}
      </p>
      
      <p>

        <Link 
        to="/forgot-password" 
        >

          Forgot Password?

        </Link>

      </p>

    </div>

  </div>
  
</div>
);
}

export default Auth;

