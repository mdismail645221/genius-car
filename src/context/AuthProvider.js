import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // updateProfile
    const upProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    // signIn 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // onstateChange 
    useEffect(()=>{
        const unSubcribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return()=>{
            unSubcribed()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        upProfile,
        logIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;