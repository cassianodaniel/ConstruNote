import React from "react";
import ContainerFornecedoresListaTransmissao from "../ContainerFornecedoresListaTransmissao/ContainerFornecedoresListaTransmissao";
import ContainerFornecedoresFavoritos from "../ContainerFornecedoresListaTransmissao/ContainerFornecedoresListaTransmissao";
import Line from "../Line/Line";

const CardOpcaoFornecedoresFavoritos = () => {
  return (
    <div className="mainContainerFavoritos shadow m-4">
      <div className="headerContainer">
        <div className="font-size-18">
          Opcionalmente indique fornecedores favoritos
        </div>
        <div className="font-size-16 text-muted">
          Use a barra de busca abaixo para encontrar seus fornecedores
          favoritos. Nos empenharemos em trazer suas propostas.
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores favoritos
        </div>
        <Line />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresFavoritos;
