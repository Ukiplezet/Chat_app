import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signinImage from "../assets/cover1.jpg";

const cookies = new Cookies();
const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassowrd: "",
  phoneNumber: "",
  avatarURL: "",
};
const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, phoneNumber, avatarURL } = form;

    const URL = " https://instant-message-slash.herokuapp.com/auth";
    try {
      const {
        data: { token, userId, hashedPassword, fullName },
      } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
        fullName: form.fullName,
        username,
        password,
        phoneNumber,
        avatarURL,
      });
      cookies.set("token", token);
      cookies.set("username", username);
      cookies.set("fullName", fullName);
      cookies.set("userId", userId);
      if (isSignup) {
        cookies.set("hashedPassword", hashedPassword);
        cookies.set("phoneNumber", phoneNumber);
        cookies.set("avatarURL", avatarURL);
      }
      window.location.reload();
    } catch (error) {
      return alert(error.response.data);
    }
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            <div className="auth__form-container_fields-content_input__name__username">
              {isSignup && (
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    className=""
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}{" "}
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="username">username</label>
                <input
                  className=""
                  name="username"
                  type="text"
                  placeholder="User Name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className=""
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}{" "}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  className=""
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                />
              </div>
            )}{" "}
            <div className="auth__form-container_fields-content_input__password">
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="password">Password</label>
                <input
                  className=""
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
              {isSignup && (
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className=""
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </div>
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>{" "}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" size={60} />
      </div>
    </div>
  );
};

export default Auth;
