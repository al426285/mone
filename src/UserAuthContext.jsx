import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const UserAuthContext = createContext();//Crea un contexto de React, login, signup, logout, googleSignIn...

//documentacion en https://medium.com/@Rushabh_/implementing-user-login-and-signup-with-reactjs-and-firebase-a-comprehensive-guide-7300bd33cb01

//se puede usar asi const { user, logIn, logOut } = useUserAuth();
export function useUserAuth() {
    return useContext(UserAuthContext);
}

//duracion de las sesiones
//import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
//setPersistence(auth, browserLocalPersistence);


//Definimos que datos y funciones estaran disponibles en el contexto, lo decidimos nosotros
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    //funciones del contexto
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        return signInWithPopup(auth, googleProvider);
    }

    //con esto se mantiene la sesion
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </UserAuthContext.Provider>
    );
}


