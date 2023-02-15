import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/pages/Root';
import AppProvider from './providers/AppProvider';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppProvider>
            <Root />
        </AppProvider>
    </React.StrictMode>
);
