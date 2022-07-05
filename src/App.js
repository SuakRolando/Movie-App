import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import MovieDetails from "./components/MovieDetails";

import "./assets/item.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpContent from "./components/SignUpContent";
// import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    // <AuthProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signupcontent" element={<SignUpContent />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
    // </AuthProvider>
  );
};

export default App;
