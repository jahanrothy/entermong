import React from 'react';
import {Navigate} from 'react-router-dom';
import useTokenExpiration from '@/hooks/useTokenExpiration';
import {ProtectedRouteProps} from "@/types/auth/auth";
import {history} from "@/utils/utils.ts";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isTokenExpired = useTokenExpiration('access');

    if (isTokenExpired){
        return <Navigate to="/" state={{ from:history }} replace/>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
