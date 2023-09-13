import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebaseConfig";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const existUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser,profile);
  };
  const logout = () => {
    setLoading(true)
    localStorage.removeItem("accessToken")
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  const authInfo = {
    existUser,
    createUser,
    user,
    googleLogin,
    setLoading,
    loading,
    updateUserProfile,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
