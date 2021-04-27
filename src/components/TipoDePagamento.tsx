import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import ScreenType from '../enums/ScreenType';
import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';

const TipoDePagamento: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Escolha o tipo de Pagamento'} />

      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <div>
          <Button
            type="button"
            color="primary"
            onClick={() => history.push(ScreenType.PAGAMENTOBOLETO)}
          >
            Pagamento à vista
          </Button>

          <Button
            className="ml-5"
            type="button"
            color="primary"
            onClick={() => history.push(ScreenType.PAGAMENTOCARTAO)}
          >
            Pagamento à prazo
          </Button>
        </div>
      </div>
    </>
  );
};

export default TipoDePagamento;
