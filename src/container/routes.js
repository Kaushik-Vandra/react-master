import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/auth";

const Layout = lazy(() => import("../components/layout"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const MyAccount = lazy(() => import("../pages/MyAccount"));
const DetailForm = lazy(() => import("../pages/DetailForm"));
const Table = lazy(() => import("../pages/Table"));
const TableItemDetail = lazy(() => import("../components/formTable/TableItemDetail"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/form" element={<DetailForm />} />
        <Route path="/table" element={<Table />} />
        <Route path="/table/:id" element={<TableItemDetail />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
