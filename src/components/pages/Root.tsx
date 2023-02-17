import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Login from './Login';
import Todo from './Todo';
import Register from './Register';
import useAuth from '../../hooks/useAuth';

const routes = [
    {
        path: '/register',
        element: <Navigate to="/todo" replace />,
    },
    {
        path: '/login',
        element: <Navigate to="/todo" replace />,
    },
    {
        path: '/todo',
        element: <Todo />,
    },
];

const AuthenticatedApp = () => (
    <MainTemplate>
        <Routes>
            {routes.map(({ path, element }, index) => (
                <Route path={path} element={element} key={index} />
            ))}
        </Routes>
    </MainTemplate>
);

const UnauthenticatedApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </div>
    );
};

const Root = () => {
    const { currentUser } = useAuth();

    return currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
