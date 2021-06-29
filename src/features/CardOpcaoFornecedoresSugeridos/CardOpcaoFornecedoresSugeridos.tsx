import React from "react";
import ContainerFornecedoresListaSugeridos from "../ContainerFornecedoresListaSugeridos/ContainerFornecedoresListaSugeridos";
import Line from "../Line/Line";

const CardOpcaoFornecedoresSugeridos = () => {
  return (
    <div className="mainContainerFavoritos shadow m-4">
      <div className="headerContainer">
        <div className="font-size-18">
          Opcionalmente adicione fornecedores sugeridos
        </div>
        <div className="font-size-16 text-muted">
          De acordo com a classificação de fornecedor, nós separamos alguns
          deles para te sugerir.
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores sugeridos
        </div>
        <Line />
        <ContainerFornecedoresListaSugeridos />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresSugeridos;
