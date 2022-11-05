import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // updateProfile
    const upProfile = (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // signIn 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout 
    const logOut = () => {
        setLoading(true);
        return (
            signOut(auth)
            .then(()=>{})
            .catch(e=> console.log(e))
        )
    }



    // onstateChange 
    useEffect(()=>{
        const unSubcribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log('onAuthStateChange',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubcribed()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        upProfile,
        logIn,
        logOut,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;