import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import { ErrorProvider } from '../hooks/useError';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <ErrorProvider>
                <AuthProvider>{children}</AuthProvider>
            </ErrorProvider>
        </BrowserRouter>
    );
};

export default AppProvider;
