import React from "react";
import Navbar from "../components/Navbar";
const Dashboard = ({ children }) => {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto">
      <Navbar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Dashboard;
