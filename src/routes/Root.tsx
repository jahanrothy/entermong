import AuthBase from "@/pages/auth/Base.tsx";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login.tsx";
import ResetPassword from "@/pages/auth/ResetPassword";
import DashboardBase from "@/pages/dashboard/Base.tsx";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import InquiryManagemetBase from "@/pages/dashboard/inquiry-management/Base";
import { InquiryManagementList } from "@/pages/dashboard/inquiry-management/InquiryList";
import NoticeManagemetBase from "@/pages/dashboard/notice-management/Base";
import { NoticeManagementList } from "@/pages/dashboard/notice-management/NoticeList";
import OthersManagemetBase from "@/pages/dashboard/others-management/Base";
import { OthersManagementList } from "@/pages/dashboard/others-management/OthersList";
import ParentUserManagemetBase from "@/pages/dashboard/parent-user-management/Base";
import { ParentUserManagementList } from "@/pages/dashboard/parent-user-management/ParentList";
import ServiceManagemetBase from "@/pages/dashboard/service-management/Base";
import { ServiceManagementList } from "@/pages/dashboard/service-management/ServiceList";
import TeacherUserManagemetBase from "@/pages/dashboard/teacher-user-mahagement/Base";
import { TeacherUserManagementList } from "@/pages/dashboard/teacher-user-mahagement/TeacherList";
import WithdrawlManagemetBase from "@/pages/dashboard/withdrawl-management/Base";
import { WithdrawlManagementList } from "@/pages/dashboard/withdrawl-management/WithdrawlList";
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
            <Route
                path="parent-user-management"
                element={<ParentUserManagemetBase />}
              >
                <Route index element={<ParentUserManagementList />} />
            </Route>

            <Route
                path="teacher-user-management"
                element={<TeacherUserManagemetBase />}
              >
                <Route index element={<TeacherUserManagementList />} />
            </Route>

            <Route
                path="service-management"
                element={<ServiceManagemetBase />}
              >
                <Route index element={<ServiceManagementList/>} />
            </Route>

            <Route
                path="withdrawl-management"
                element={<WithdrawlManagemetBase />}
              >
                <Route index element={<WithdrawlManagementList/>} />
            </Route>

            <Route
                path="notice-management"
                element={<NoticeManagemetBase />}
              >
                <Route index element={<NoticeManagementList/>} />
            </Route>

            <Route
                path="inquiry-management"
                element={<InquiryManagemetBase />}
              >
                <Route index element={<InquiryManagementList/>} />
            </Route>

            <Route
                path="others-management"
                element={<OthersManagemetBase />}
              >
                <Route index element={<OthersManagementList/>} />
            </Route>
            
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Root;
