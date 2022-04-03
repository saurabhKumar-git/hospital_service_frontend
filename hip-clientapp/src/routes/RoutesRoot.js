import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../modules/Login/Signup";
import Login from "../modules/Login/Login";
import CreatePassword from "../modules/Login/CreatePassword";

function RoutesRoot() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPassword" element={<CreatePassword />} />
      </Routes>
      {/* {false && (
        <MainLayout>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="expenses" element={<Expenses />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="dashboard" element={<Invoices />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </MainLayout>
      )} */}
    </>
  );
}

export default RoutesRoot;
