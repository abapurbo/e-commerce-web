import React, { useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// sosical provider
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // signOutUser
    const logOutUser = () => {
        return signOut(auth)
    }
    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //google signinpopup
    const signInwithGoogle = () => signInWithPopup(auth, googleProvider)
    const authData = {
        user,
        loading,
        createUser,
        signInwithGoogle,
        profileUpdate,
        logOutUser,


    }

    return (
        <AuthContext value={''}>
            {children}
        </AuthContext>
    )
}
