import React, { useState } from "react";
import "../assets/signUp.css";
import Footer from "../components/Footer";
import SignUpContent from "../components/SignUpContent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../config/Firebase";

const SignUp = () => {
  const [userAcc, setUserAcc] = useState('');

  // useEffect(() => {
    
  
  //   return
  // }, [])
  
    
  return (
    <div className="containerrr">
      <div className="headerrr">
        <h1 className="text-danger">NETOOY</h1>
      </div>
      <div className="signUpContent">
        <SignUpContent/>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;
