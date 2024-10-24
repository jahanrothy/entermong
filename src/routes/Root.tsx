import AuthBase from "@/pages/auth/Base.tsx";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login.tsx";
import ResetPassword from "@/pages/auth/ResetPassword";
import DashboardBase from "@/pages/dashboard/Base.tsx";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import NotFound from "@/pages/NotFound.tsx";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthBase />}>
          <Route index element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Route>
        <Route path="/admin" element={<DashboardBase />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Root;
