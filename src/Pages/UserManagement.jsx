import React from "react";
import "../Scss/Usermanagement.scss";
import SideBar from "../Component/SideBar";

const UserManagement = ({ data }) => {
  const usermanage = {
    id: 1,
    name: "Mansa",
    UniqueTrackingID: 667244,
  };

  const user = data || usermanage;
  return (
    <div>
      <SideBar />
      <div className="user-management">
        <h2>User Management</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>User</th>
              <th>Unique Tracking ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.UniqueTrackingID}</th>
            </tr>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.UniqueTrackingID}</th>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
