import React, { useState } from "react";
import "../signIn/signin.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:3002/signup", { name, email, password, confirmPassword })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid m-0 p-0" style={{backgroundColor:"#f2e7bc"}}>
      <div className="row   m-0 p-0">
        <div
          className="col-md-7 m-0 p-0"
          style={{ width: "60%", height: "100vh" }}
        >
          <div className="container p-0 m-0">
            <img
              src="/media/image/image.webp"
              alt="Padhai"
              className="animateBg"
              style={{ backgroundSize: "cover", width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <div
          className="col-md-5 p-5"
          style={{  width: "40%", height: "100vh" }}
        >
          <h2 className="mt-5">Welcome back!</h2>
          <h3 className="mb-3">Register to your account</h3>
          <p className="">It's nice to see you</p>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name"> </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label htmlFor="email"> </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label htmlFor="confirmPassword"></label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                style={{ width: "100%" }}
              >
                Register
              </button>
            </div>
          </form>

          <br></br>

          <button type="submit" className="mt-3" style={{ width: "100%" }}>
            Continue with Google
          </button>
          <br></br>
          <div
            className="justify-content-center mt-4"
            style={{ textAlign: "center" }}
          >
            <p>
              Login with your Account?
              <Link to="/signin" style={{ color: "blue" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;