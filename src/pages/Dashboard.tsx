import React from "react";
import LeftSidebarMenu from "./../components/LeftSidebarMenu";

const Dashboard: React.FC = ({ children }) => {
  return (
    <div className="layout-wrapper d-lg-flex">
      <LeftSidebarMenu />
      {children}
    </div>
  );
};

export default Dashboard;
