import React, { createContext } from 'react';
import {getAuth,  signInWithEmailAndPassword,signInWithPopup, onAuthStateChanged,signOut, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const ProviderLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside auth state change',currentUser)
            setUser(currentUser)
        });

        return () => unsubscrib();
    },[])

    const authInfo = {user,ProviderLogin,logOut,createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;