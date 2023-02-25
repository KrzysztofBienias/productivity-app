import { useCallback, createContext, useContext, useState } from 'react';

type Message = string | null;

interface IErrorContext {
    error: Message;
    dispatchError: (message: string) => void;
}

interface IErrorProvider {
    children: React.ReactNode;
}

const initialState = {
    error: '',
    dispatchError: () => {},
};

const ErrorContext = createContext<IErrorContext>(initialState);

export const ErrorProvider: React.FC<IErrorProvider> = ({ children }) => {
    const [error, setError] = useState<string>('');

    const dispatchError = useCallback((message: string) => {
        setError(message);
        setTimeout(() => {
            setError('');
        }, 7000);
    }, []);

    return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

const useError = () => {
    return useContext(ErrorContext);
};

export default useError;
