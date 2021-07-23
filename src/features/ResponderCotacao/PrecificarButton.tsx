import React from "react";
import { Button } from "reactstrap";

const PrecificarButton: React.FC = () => {
  return (
    <div className="buttonColumn ml-5 mb-4 mr-4 ">
      <Button outline color="primary" className="mt-2">
        Precificar
      </Button>
    </div>
  );
};
export default PrecificarButton;
