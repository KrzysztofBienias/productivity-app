import React from 'react';

const LoginTemplate = ({ children }: { children: React.ReactNode }) => {
    return <div className="background-gradient w-screen h-screen flex justify-center items-center">{children}</div>;
};

export default LoginTemplate;
