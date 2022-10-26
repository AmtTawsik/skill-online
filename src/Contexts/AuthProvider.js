import React, { createContext } from 'react';
import {getAuth, updateProfile ,signInWithEmailAndPassword,signInWithPopup, onAuthStateChanged,signOut, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const ProviderLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside auth state change',currentUser)
            setUser(currentUser)
            setLoading(false)
        });

        return () => unsubscrib();
    },[])

    const authInfo = {user,loading,updateUserProfile,ProviderLogin,logOut,createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;