import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  const signInHandle = async (e) => {
    e.preventDefault();
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <div className="login-page">
      <img
        className="login_logo"
        src="https://thietkelogo.vn/wp-content/uploads/2017/10/amazon_logo_RGB.jpg"
      />

      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            type="submit"
            onClick={signInHandle}
            className="login-signin-button"
          >
            Continue
          </button>

          <button onClick={navigateToRegister} className="login-create-button">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
