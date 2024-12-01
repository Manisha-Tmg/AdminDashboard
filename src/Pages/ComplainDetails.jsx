import React from "react";
import "../Scss/ComplainDetails.scss";
import SideBar from "../Component/SideBar";

const ComplainDetails = ({ complains }) => {
  const sampleDetail = {
    id: 1,
    GrievanceType: " Flood",
    DisasterType: "Natural Disaster",
    Province: 3,
    District: "Kathmandu",
    Tole: 6,
    WardNo: 6,
    Location: "Naxal",
    Description: "Huge flood gone",
  };

  const data = complains || sampleDetail;
  return (
    <div>
      <SideBar />
      <div className="complaint-list">
        <h3>Complaint Details</h3>
        <div className="complaint-card">
          <p>Grievance Type: {data.GrievanceType}</p>
          <p>Disaster Type:{data.DisasterType}</p>
          <p>Province:{data.Province}</p>
          <p>District:{data.District}</p>
          <p>Tole:{data.tole}</p>
          <p>Ward No:{data.WardNo}</p>
          <p>Location:{data.Location}</p>
          <p>Description: {data.Description}</p>
          <div>
            <strong>Image:</strong>
            {data.image ? (
              <img
                src={data.image}
                alt="Complaint"
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ComplainDetails;
