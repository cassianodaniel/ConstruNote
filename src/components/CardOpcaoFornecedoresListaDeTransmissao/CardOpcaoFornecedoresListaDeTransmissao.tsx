import React from "react";
import { Input } from "reactstrap";
import ContainerFornecedoresListaTransmissao from "../ContainerFornecedoresListaTransmissao/ContainerFornecedoresListaTransmissao";
import Line from "../Line/Line";
import "./styles.scss";

const CardOpcaoFornecedoresListaDeTransmissao = () => {
  return (
    <div className="mainContainerFavoritos transmissao shadow m-4">
      <div className="headerContainer">
        <div className="searchFavorite">
          <Input placeholder="Busque aqui o seu fornecedor favorito" />
        </div>
        <div className="font-size-18 font-responsive">
          Inclua até 20 fornecedores na lista de transmissão da sua cotação. Use
          a barra de busca para encontrar fornecedores que já são membros da
          nossa comunidade.
        </div>
        <div className="font-size-15 font-weight-bold mt-3">
          Fornecedores convidados
        </div>
        <Line />
        <ContainerFornecedoresListaTransmissao />
      </div>
    </div>
  );
};

export default CardOpcaoFornecedoresListaDeTransmissao;
