import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./Pages/UserManagement.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ComplainManagement from "./Pages/ComplainManagement.jsx";
import Login from "./Pages/Login.jsx";
import ComplainDetails from "./Pages/ComplainDetails.jsx";
import UserDetails from "./Pages/UserDetails.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin/" element={<AdminDashboard />}></Route>
          <Route
            path="/admin/UserManagement"
            element={<UserManagement />}
          ></Route>
          <Route path="/admin/login" element={<Login />}></Route>
          <Route path="/admin/userDetails" element={<UserDetails />}></Route>
          <Route
            path="/admin/complainDetails"
            element={<ComplainDetails />}
          ></Route>
          <Route
            path="/admin/ComplainManagement"
            element={<ComplainManagement />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
