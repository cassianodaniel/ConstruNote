import React from "react";
import { Spinner } from "reactstrap";

const Loading: React.FC = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Spinner color="primary" />
    </div>
  );
};

export default Loading;
