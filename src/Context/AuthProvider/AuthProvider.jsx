import React, { useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../config/firebase.config';

// sosical provider
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    //  create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    // signOutUser
    const logOutUser = () => {
        return signOut(auth)
    }
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //  observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe()
    }, [])
    //google signinpopup
    const signInwithGoogle = () => signInWithPopup(auth, googleProvider)
    const authData = {
        user,
        loading,
        createUser,
        verifyEmail,
        signInwithGoogle,
        profileUpdate,
        logOutUser,


    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
}
