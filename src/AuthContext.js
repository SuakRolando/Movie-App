import React, { useContext, useEffect, useState } from "react";
import app, { auth } from "./config/Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider ({ children })  {
  const [currentUser, setCurrentUser] = useState();


  function signup (email, password) {
    return  app.auth().createUserWithEmailAndPassword(email, password)
    
  };

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

