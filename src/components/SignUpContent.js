import { async } from "@firebase/util";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/signIn.css";
// import { AuthProvider, useAuth } from "../AuthContext";
import app from "../config/Firebase";

// import FIREBASE from "../config/Firebase";

const SignUpContent = () => {
  const [isClick, setIsClick] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState("");
  console.log("err:", error);

  // const { signup } = useAuth();
  // console.log('signup: ', signup);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hai");
    console.log("password:", password);
    console.log("passwordConf:", passwordConfirm);

    if (!(email && password && passwordConfirm)) {
      return setError("Please Fill the Form");
    }

    if (password !== passwordConfirm) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await app.auth().createUserWithEmailAndPassword(email, password);
      setPath("/home");

      console.log("Success");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
    console.log("loading", loading);
  }

  return (
    <div className="d-flex">
      <div className="card bg-dark bg-gradient p-5" style={{ width: "420px" }}>
        <div className="card-body">
          <h2 className="card-title text-white">Sign Up</h2>
          {error && (
            <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
            <strong>{error}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(value) => setEmail(value.target.value)}
              />
              <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="name@example.com"
                value={password}
                onChange={(value) => setPassword(value.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPasswordConfirm"
                placeholder="Password"
                value={passwordConfirm}
                onChange={(value) => setPasswordConfirm(value.target.value)}
              />
              <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
            </div>
            <button
              className="btn btn-danger btn-lg fw-bold mt-4 w-100"
              type="submit"
              disabled={loading}
              to={path}
            >
              Sign Up
            </button>
          </form>
        </div>
        <form className="text-center">
          <span className="text-white-50 ">
            Already have account?{" "}
            <Link className="text-decoration-underline text-white" to={"/"}>
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUpContent;
