import React from "react";
import NavManager from "../components/NavManager";

const Dashboard: React.FC = ({ children }) => {
  return (
    <div className="layout-wrapper d-lg-flex">
      <NavManager />
      {children}
    </div>
  );
};

export default Dashboard;
