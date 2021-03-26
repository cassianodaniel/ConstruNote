import React from "react";

const Dashboard: React.FC = ({ children }) => {
  return <div className="layout-wrapper d-lg-flex">{children}</div>;
};

export default Dashboard;
