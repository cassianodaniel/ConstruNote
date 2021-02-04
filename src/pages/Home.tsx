import React from "react";
import AppRightSidebar from "../components/AppRightSidebar";
import AppLeftSidebar from "./../components/AppLeftSidebar";

const Home: React.FC = () => {
  return (
    <>
      <AppLeftSidebar />
      <AppRightSidebar />
    </>
  );
};

export default Home;
