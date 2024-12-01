import React from "react";
import "../Scss/ComplainManagement.scss";
import SideBar from "../Component/SideBar";

const ComplainManagement = ({ management }) => {
  const managecomplain = {
    UniqueTrackingID: 454545,
    Complaints: "Internet Issue",
  };
  const complain = management || managecomplain;
  return (
    <div>
      <SideBar />
      <div>
        <div className="complaint-management">
          <h2>Complaint Management</h2>
          <table className="complaint-table">
            <thead>
              <tr>
                <th>Unique Tracking ID</th>
                <th>Complaints</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{complain.UniqueTrackingID}</th>
                <th>{complain.Complaints}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplainManagement;
