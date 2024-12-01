import React from "react";
import { Link } from "react-router-dom";
import "../Scss/SideBar.scss";

const SideBar = ({ roles }) => {
  const role = {
    userRole: "Admin",
  };
  const data = roles || role;
  return (
    <div>
      <nav className="sidebar">
        <h2>{data.userRole}</h2>
        <ul>
          <li className="nav-item">
            <Link to="/admin/ ">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/UserManagement">User Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/ComplainManagement">Complaint Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
