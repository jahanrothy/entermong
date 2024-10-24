import LoginForm from "@/components/forms/auth/Login.tsx";
import { resetLoginState } from "@/redux/features/auth/loginSlice.ts";
import { AppDispatch, RootState } from "@/redux/store.ts";
import { loginService } from "@/services/httpServices/authHttpServices.ts";
import { AuthCredential, LoginState } from "@/types/auth/auth";
import { history } from "@/utils/utils.ts";
import Logo from "@images/logo-auth.png";
// import Lo from "@images/login-bg.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const [loginState, setLoginState] = useState<boolean>(false);
  const { success, error, loading } = useSelector<RootState, LoginState>(
    (state) => state.login
  );
  const dispatch = useDispatch<AppDispatch>();

  const submitForm = (data: AuthCredential) => {
    dispatch(loginService(data));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetLoginState());
      setLoginState(true);
    }
  }, [success, dispatch]);

  if (loginState) {
    return <Navigate to="/admin" state={{ from: history }} replace />;
  }

  return (
    <div className="h-full w-full">
      {/* <div className={`relative bg-[url('${LoginBg}')] h-full w-full `}> */}
      <div
        className={`relative bg-[url('/src/assets/login-bg.png')] h-full w-full bg-cover bg-no-repeat bg-center object-cover`}
      >
        {/* <img
          className="absolute w-full h-full inset-0 object-cover"
          // src={LoginBg as string}
          alt=""
        /> */}
        <div className="absolute flex items-center justify-center h-full left-[12%]">
          <div className="w-full max-w-sm lg:w-96  p-7 rounded-xl">
            <div className="text-center relative">
              <img
                src={Logo as string}
                alt="Potential Logo"
                className="max-w-[100px] inline-block"
              />
              <h2 className="mb-4 pb-5 text-xl font-medium leading-7 tracking-tight text-[#FF6183]  border-b border-pink-200">
                EnterMong
              </h2>
            </div>
            <div className="mt-5">
              {error && (
                <div className="mb-2 text-center text-red-500">
                  <p className="text-[14px]">{error}</p>
                </div>
              )}
              {loading && (
                <div className="mb-2 text-center text-gray-500">
                  <p className="text-[14px]">
                    Please wait! Credentials Checking...
                  </p>
                </div>
              )}
              <LoginForm submitForm={submitForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
