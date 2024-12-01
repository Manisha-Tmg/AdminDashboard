import React from "react";
import "../Scss/AdminDashboard.scss";
import SideBar from "../Component/SideBar";

const AdminDashboard = ({ sample }) => {
  const sampledash = {
    totalcomplain: 15,
    complainresolved: 5,
    complaininprocessed: 10,
  };
  const total = sample || sampledash;
  return (
    <div>
      <SideBar />
      <div className="admin-dashboard">
        <main className="content">
          <header className="header"></header>
          <section className="stats-cards">
            <div className="card">
              <div className="card-title">Total Complaints</div>
              <p>{total.totalcomplain}</p>
            </div>
            <div className="card">
              <div className="card-title">Complaints Resolved</div>
              <p>{total.complainresolved}</p>
            </div>
            <div className="card">
              <div className="card-title">Complaints Being Processed</div>
              <p>{total.complaininprocessed}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
