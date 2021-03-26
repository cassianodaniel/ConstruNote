import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import ScreenType from "../enuns/ScreenType";

const PrimeiraSessaoCadastro: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div>
        <NavLink
          className="nav-link"
          to={ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR}
          exact
        >
          <Button className="ml-4" type="button" color="primary">
            Sou comprador
          </Button>
        </NavLink>
        <NavLink
          className="nav-link"
          to={ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR}
          exact
        >
          <Button className="ml-4" type="button" color="primary">
            Sou fornecedor
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default PrimeiraSessaoCadastro;
