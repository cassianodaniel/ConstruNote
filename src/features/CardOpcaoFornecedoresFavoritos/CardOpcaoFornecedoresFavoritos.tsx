import React from "react";
import { Input } from "reactstrap";
import ContainerFornecedoresFavoritos from "../ContainerFornecedoresFavoritos";
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
        <div className="searchFavorite">
          <Input placeholder="Busque aqui o seu fornecedor favorito" />
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores favoritos
        </div>
        <Line />
        <ContainerFornecedoresFavoritos />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresFavoritos;
