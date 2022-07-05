import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/signIn.css";
import Footer from "../components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  console.log(isEmail);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const onSub = (e) => {
    e.preventDefault();
    setIsEmail(false);
  };
  return (
    <div className="containerr">
      <div className="headerr">
        <h1 className="text-danger fw-bold">NETOOY</h1>
        <div>
          <Link className="btn btn-outline-danger btn-lg" to={"/signup"}>
            Register
          </Link>
        </div>
      </div>
      <div className="boddy">
        <h2 className="text-white">Find Your Favorite Movies With Us!</h2>
        <h6 className="text-light">Ayo Sign In dan temukan film kesukanmu</h6>
        <form className="form-floating" onSubmit={onSub}>
          {isEmail === true ? (
            <>
              <input
                type="email"
                className="form-control"
                placeholder="Masukan email kamu..."
                value={email}
                onChange={handleChange}
              />
              <label for="floatingInput">Email address</label>
              <button className="btn btn-danger fw-bold btn-lg" type="submit">
                Next
              </button>
            </>
          ) : (
            <>
              <input
                type="password"
                className="form-control"
                placeholder="Masukan password kamu..."
                value={password}
                onChange={handleChange}
              />
              <label for="floatingPassword">Password</label>
              <Link className="btn btn-danger fw-bold btn-lg" to={"/home"}>
                Sign In
              </Link>
            </>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
