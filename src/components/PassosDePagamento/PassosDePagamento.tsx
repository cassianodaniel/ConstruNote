import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { useLayout } from "../../contexts/LayoutContext";
import ScreenType from "../../enums/ScreenType";
import "./styles.scss";

const PassosDePagamento: React.FC = () => {
  const history = useHistory();
  const { passos, setPassos } = useLayout();
  const handlePassoAnterior = () => {
    if (passos === 2) {
      setPassos(passos - 1);
      history.push(ScreenType.PAGAMENTOCARTAO);
    } else if (passos === 3) {
      setPassos(passos - 1);
      history.push(ScreenType.PAGAMENTOBOLETO);
    }
  };
  return (
    <header className="passos-pagto-container">
      <div className="passos">
        <div className={`passo ${passos === 1 && "selected"}`}>Passo 1</div>
        <div className={`passo ${passos === 2 && "selected"}`}>Passo 2</div>
        <div className={`passo ${passos === 3 && "selected"}`}>Passo 3</div>
      </div>
      {passos !== 1 && (
        <div className="d-flex flex-row">
          <div className="passos-back" onClick={handlePassoAnterior}>
            <div>
              <RiArrowLeftLine />
            </div>
            <div>{"Voltar ao passo anterior"}</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PassosDePagamento;
