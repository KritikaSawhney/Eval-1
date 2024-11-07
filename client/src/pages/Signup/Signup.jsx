import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id.replace('signup-', '')]: value
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', username: '', email: '', password: '' };

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
      isValid = false;
    }

    if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('userName', formData.name);
      localStorage.setItem('userUsername', formData.username);
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userPassword', formData.password);

      alert('Sign-up successful! Data saved locally.');
      navigate('/signin');
    }
  };

  return (
    <main>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-12 form-section">
            <div className="login-form rounded-3">
              <h2 className="mb-3 text-center">Sign up</h2>
              <form id="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <small className="text-danger" id="name-error">{errors.name}</small>
                  <input 
                    type="text" 
                    id="signup-name" 
                    className="form-control mb-3" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <small className="text-danger" id="username-error">{errors.username}</small>
                  <input 
                    type="text" 
                    id="signup-username" 
                    className="form-control mb-3" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <small className="text-danger" id="email-error">{errors.email}</small>
                  <input 
                    type="email" 
                    id="signup-email" 
                    className="form-control mb-3" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <small className="text-danger" id="password-error">{errors.password}</small>
                  <input 
                    type="password" 
                    id="signup-password" 
                    className="form-control mb-3" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn w-100 btn-outline-dark">Sign up</button>
              </form>
              <p className="sign-up-text">Already have an account? <a href="/signin">Sign in</a></p>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block d-flex justify-content-center align-items-end">
            <video autoPlay muted loop className="video-bg left-section">
              <source src="Images/alex-climbing-short.avc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay-text">
              <h1 className="text-dark display-2 fw-bolder">Look first / <br /> Then leap.</h1>
              <p className="fs-4">Alex Honnold<br />TV Athlete</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
