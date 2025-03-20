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
    axios
      .post("http://127.0.0.1:3002/signup", { name, email, password, confirmPassword })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row m-0 p-0">
        {/* Left Side Image */}
        <div className="col-md-7 m-0 p-0" style={{ backgroundColor: "black", height: "100vh" }}>
          <img
            src="/media/image/image.webp"
            alt="Padhai"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#f2e7bc", height: "100vh" }}>
          <div className="w-75">
            <h2 className="mt-3 text-center">Welcome back!</h2>
            <h3 className="mb-3 text-center">Register to your account</h3>
            <p className="text-center">It's nice to see you</p>

            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter New Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Register
                </button>
              </div>
            </form>

            <button className="btn btn-light w-100 mt-3">
              Continue with Google
            </button>

            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/signin" style={{ color: "blue" }}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
