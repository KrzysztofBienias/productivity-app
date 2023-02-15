import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <AuthProvider>{children}</AuthProvider>
        </BrowserRouter>
    );
};

export default AppProvider;
