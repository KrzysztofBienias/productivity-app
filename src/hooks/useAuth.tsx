import { useState, useEffect, useContext, createContext } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    User,
    onAuthStateChanged,
    signOut as logOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import useError from './useError';

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
    const { dispatchError } = useError();

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
            .catch(() => {
                dispatchError('Invalid email or password');
            });
    };

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            })
            .catch((error: Error) => {
                dispatchError(error.message);
            });
    };

    const signOut = () => logOut(auth);

    return <AuthContext.Provider value={{ currentUser, signIn, signUp, signOut }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
