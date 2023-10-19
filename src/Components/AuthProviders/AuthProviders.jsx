import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from "../FireBase/FireBase";


export const AuthContext = createContext(null);
const auth = getAuth(app);






const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =  useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user changed",currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[]);

    const AuthInfo ={
        user,
        createUser,
        LogOut,
        SignIn,
        loading,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;