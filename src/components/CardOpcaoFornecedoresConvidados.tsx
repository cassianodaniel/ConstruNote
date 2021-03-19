import React from "react";
import { Input } from "reactstrap";
import ContainerFornecedoresFavoritos from "./ContainerFornecedoresFavoritos";
import Line from "./Line";

const CardOpcaoFornecedoresConvidados = () => {
  return (
    <div className="mainContainerFavoritos shadow m-4">
      <div className="headerContainer">
        <div className="font-size-18">Opcionalmente convide fornecedores</div>
        <div className="font-size-16 text-muted">
          Convide fornecedores para que você possa receber benefícios por fazer
          suas cotações para estes aqui em nossa plataforma.
        </div>
        <div className="searchFavorite">
          <Input placeholder="Busque aqui o seu fornecedor favorito" />
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores convidados
        </div>
        <Line />
        <ContainerFornecedoresFavoritos />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresConvidados;