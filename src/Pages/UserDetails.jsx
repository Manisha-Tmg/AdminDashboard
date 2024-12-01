import React from "react";
import "../Scss/UserDetils.scss";
import SideBar from "../Component/SideBar";

const UserDetails = ({ user }) => {
  const sampleUser = {
    name: "Mansa",
    contact: 9813245634,
    province: "Bagmati",
    tole: 5,
    wardNo: 8,
    location: "naxal",
    email: "mansa@gmail.com",
  };
  const userData = user || sampleUser;
  return (
    <div>
      <SideBar />
      <div className="user-details">
        <h3>User Details</h3>
        <div className="user-detail-card">
          <p>Name: {userData.name}</p>
          <p>Contact: {userData.contact}</p>
          <p>Province: {userData.province}</p>
          <p>Tole: {userData.tole}</p>
          <p>Ward No: {userData.wardNo}</p>
          <p>Location: {userData.location}</p>
          <p>Email: {userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
