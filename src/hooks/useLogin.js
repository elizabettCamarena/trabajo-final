import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/Auth";
import { Auth } from "firebase/Auth";

export const useLogin = () => {
    const [user, setUser] = useState(null);
    const [loadingSession, setLoadingSession] = useState(true);
    const [loadingSignIn, setLoadingSignIn] = useState(false);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoadingSession(false);
        });

        return () => unsubscribe();
    }, [])
  


    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(Auth, email, password)
            return {
                email: res.user.email
            }
        } catch (err) {
            let e = null;
            if(err.code === "Auth/invalid-login-credentials") {
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
        await signOut(Auth);

        
    };

    return {login,logout,user,loadingSession,loadingSignIn};

};