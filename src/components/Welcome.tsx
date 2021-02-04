import React from "react";
import logo from "./../assets/images/logo.png";

const Welcome: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={logo} alt="logo" />
        <div className="mt-3 h3">Bem vindo</div>
        <div className="h3">ao ConstruNote!</div>
      </div>
    </div>
  );
};

export default Welcome;
