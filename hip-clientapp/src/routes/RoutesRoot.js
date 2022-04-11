import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../modules/Login/Signup";
import Login from "../modules/Login/Login";
import CreatePassword from "../modules/Login/CreatePassword";
import { useAuth } from "../Helper/AuthProvider";
import MainLayout from "../layout/MainLayout";

const RoutesRoot = () => {
  const auth = useAuth();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        {/* {auth.user && ( */}
        {/* <MainLayout> */}
        <Route
          path="/home"
          element={
            <>
              <h2>Hello user</h2>
            </>
          }
        />
        {/* </MainLayout> */}
        {/* )} */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default RoutesRoot;
