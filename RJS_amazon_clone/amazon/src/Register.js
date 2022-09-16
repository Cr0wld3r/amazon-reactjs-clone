import React, { useState } from "react";
import "./Register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerHandle = (e) => {
    e.preventDefault();
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, email, password).then(
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
    <div className="register-page">
      <img
        className="register_logo"
        src="https://thietkelogo.vn/wp-content/uploads/2017/10/amazon_logo_RGB.jpg"
      />

      <div className="register-container">
        <h1>Create account</h1>
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

          <button
            type="submit"
            onClick={registerHandle}
            className="register-button"
          >
            Continue
          </button>
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
