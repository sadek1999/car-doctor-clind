import { createContext, useState } from "react";
import getAuth, { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)

const Authprobider = ({ Children }) => {

    const provider =new GoogleAuthProvider();
    const [user, setuser] = useState(null);
    const [loding, setloding] = useState(true);

    const singin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    const googlelogin=()=>{
        return signInWithPopup(auth,provider)
    }


    const info = {
        user,
        loding,
        singin,
        login,
        logout,
        googlelogin
        
    }
    return (
        <AuthContext.Provider value={info}>
            {Children}

        </AuthContext.Provider>
    );
};

export default Authprobider;