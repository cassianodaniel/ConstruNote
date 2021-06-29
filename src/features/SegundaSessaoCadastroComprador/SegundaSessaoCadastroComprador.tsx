import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";
import ScreenType from "../../enums/ScreenType";

const SegundaSessaoCadastroComprador: React.FC = () => {
  const history = useHistory();
  return (
    <div className="d-flex flex-row align-items-center justify-content-center vh-100 vw-100">
      <div>
        <Button
          className="ml-4"
          type="button"
          color="primary"
          onClick={() => history.push(ScreenType.CADASTROSJURIDICA)}
        >
          Sou pessoa jurídica
        </Button>
        <Button
          className="ml-4"
          type="button"
          color="primary"
          onClick={() => history.push(ScreenType.CADASTROSFISICA)}
        >
          Sou pessoa física
        </Button>
      </div>
    </div>
  );
};
export default SegundaSessaoCadastroComprador;
