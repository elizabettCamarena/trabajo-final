import { useEffect, useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../main";

export const useLogin = () => {
    const [user, setUser] = useState(null);
    const [loadingSession, setLoadingSession] = useState(true);
    const [loadingSignIn, setLoadingSignIn] = useState(false);


 
  


    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            return {
                email: res.user.email
            }
        } catch (err) {
            let e = null;
            if(err.code === "auth/invalid-login-credentials") {
                e = new Error("credenciales inválidas");
                e.code = "invalid-credentials";
                throw e;
            }
            else {
                throw new Error("Error desconocido al iniciar sesión");
            };
        };
        
    };

    const logout = async () => {
        await signOut(auth);

        
    };

    return {login,logout,user,loadingSession,loadingSignIn};

};