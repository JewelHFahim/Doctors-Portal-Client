import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) =>{
        return updateProfile(user, profile)
    }

    const logOut = () =>{
        setLoading(true);
       return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    } ,[])

const authoInfo = {user, createUser, logIn, updateUser, logOut, loading}

    return (
        <AuthContext.Provider value={authoInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;