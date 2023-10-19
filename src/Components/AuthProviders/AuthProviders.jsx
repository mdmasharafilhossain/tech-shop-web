import { createContext } from "react";
import { getAuth } from "firebase/auth";

import app from "../FireBase/FireBase";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthInfo ={
    
}
const AuthProviders = ({children}) => {
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;