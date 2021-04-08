import React from "react";
import { Input } from "reactstrap";
import CharTickets from "./CharTickets";
import Line from "./Line";

const CardOpcaoFornecedoresSugeridos = () => {
  return (
    <div className="mainContainerFavoritos shadow m-4">
      <div className="headerContainer">
        <div className="font-size-18">
          Opcionalmente adicione fornecedores sugeridos
        </div>
        <div className="font-size-16 text-muted">
          De acordo com a classificação de fornecedor, nós separamos alguns
          deles para te sugerir a favor de suas novas cotações.
        </div>
        <div className="searchFavorite">
          <Input placeholder="Busque aqui o seu fornecedor sugerido" />
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores sugeridos
        </div>
        <Line />
        <CharTickets />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresSugeridos;
