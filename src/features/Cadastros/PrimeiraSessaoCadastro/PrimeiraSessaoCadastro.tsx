import React from "react";
import "./styles.scss";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import ScreenType from "../../../enums/ScreenType";

const PrimeiraSessaoCadastro: React.FC = () => {
  const history = useHistory();
  return (
    <div className="d-flex flex-row align-items-center justify-content-center vh-100 vw-100">
      <div>
        <Button
          className="ml-4"
          type="button"
          color="primary"
          onClick={() =>
            history.push(ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR)
          }
        >
          Sou comprador
        </Button>
        <Button
          className="ml-4"
          type="button"
          color="primary"
          onClick={() => history.push(ScreenType.CADASTROSFORNECEDOR)}
        >
          Sou fornecedor
        </Button>
      </div>
    </div>
  );
};

export default PrimeiraSessaoCadastro;
