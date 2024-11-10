import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./signin.css";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation check
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;

    setEmailError('');
    setPasswordError('');

    // Email validation
    if (!validateEmail(email)) {
      formIsValid = false;
      setEmailError("Please enter a valid email address.");
    }

    // Password validation
    if (!validatePassword(password)) {
      formIsValid = false;
      setPasswordError("Password must be at least 6 characters long.");
    }

    // If the form is valid, check credentials from localStorage
    if (formIsValid) {
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        alert('Sign-in successful!');
        navigate('/dashboard');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 d-none d-lg-block d-flex justify-content-center align-items-end">
            <video autoPlay muted loop className="video-bg left-section">
              <source src="/Images/tradingview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay-text right-pop">
              <h1 className="text-dark display-2 fw-bolder" id="pop">Look first / <br /> Then leap.</h1>
              <p className="fs-4">Alex Honnold<br />TV Athlete</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 form-section">
            <div className="login-form rounded-3">
              <h2 className="text-center mb-0">Sign in with email</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <small className="text-danger" id="signin-email-error">{emailError}</small>
                  <input
                    type="email"
                    className="form-control"
                    id="signinEmail"
                    placeholder="Email or Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="signin-email-error"
                  />
                </div>
                <div className="form-group">
                  <small className="text-danger" id="signin-password-error">{passwordError}</small>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="signinPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="signin-password-error"
                  />
                </div>
                <div className="form-group mx-2">
                  <a href="#" className="forgot-password">I forgot password or can't sign in</a>
                </div>
                <div className="form-group">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="mb-3">Remember me</label>
                </div>
                <button type="submit" className="btn w-100 btn-outline-dark">Sign in</button>
              </form>
              <p className="sign-up-text">Do not have an account? <a href="/signup">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
