import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../modules/Login/Signup";
import Login from "../modules/Login/Login";
import CreatePassword from "../modules/Login/CreatePassword";
import { useAuth } from "../Helper/AuthProvider";
import MainLayout from "../layout/MainLayout";
import NotFound from "../modules/Errors/NotFound";

const RoutesRoot = () => {
  const auth = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        {auth.user && (
          <Route path="/home" element={<MainLayout />}>
            <Route
              path="dashboard"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Hello layout</p>
                </main>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesRoot;
