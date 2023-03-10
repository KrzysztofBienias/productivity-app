import { useState, useEffect, useContext, createContext } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    User,
    onAuthStateChanged,
    signOut as logOut,
} from 'firebase/auth';
import { auth } from '../firebase';

interface IAuthContext {
    currentUser: User | null;
    signIn: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    signOut: () => Promise<void> | void;
}

interface IAuthProvider {
    children: React.ReactNode;
}

const initialState = {
    currentUser: null,
    signIn: () => {},
    signUp: () => {},
    signOut: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        });
    }, []);

    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            })
            .catch((error) => {
                console.warn(error.code, error.message);
            });
    };

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            })
            .catch((error) => {
                console.warn(error.code, error.message);
            });
    };

    const signOut = () => logOut(auth);

    return <AuthContext.Provider value={{ currentUser, signIn, signUp, signOut }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
