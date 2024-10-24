import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import React, {useEffect} from "react";
import {AppDispatch, RootState} from "@/redux/store.ts";
import {ProtectedRouteProps} from "@/types/auth/auth";
import {UserState} from "@/types/user";
import {getProfileHttpService} from "@/services/httpServices/profileHttpService.ts";
import {history} from "@/utils/utils.ts";

const PrivateRoute:React.FC<ProtectedRouteProps> = ({ children}) => {
    const { isAuthenticated, success } = useSelector<RootState, UserState>((state) => state.profile);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProfileHttpService())
    },[dispatch])

    if ( !isAuthenticated ){
        return <Navigate to="/" state={{ from:history }} replace/>;
    }

    return <>{success && children}</>;
};

export default PrivateRoute;