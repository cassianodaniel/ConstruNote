import React from 'react';
import { Input } from 'reactstrap';
import ContainerFornecedoresListaTransmissao from '../ContainerFornecedoresListaTransmissao/ContainerFornecedoresListaTransmissao';
import Line from '../Line/Line';

const CardOpcaoFornecedoresListaDeTransmissao = () => {
  return (
    <div className="mainContainerFavoritos transmissao shadow m-4">
      <div className="headerContainer">
        <div className="searchFavorite">
          <Input placeholder="Busque aqui o seu fornecedor favorito" />
        </div>
<<<<<<< HEAD:src/components/CardOpcaoFornecedoresListaDeTransmissao/CardOpcaoFornecedoresListaDeTransmissao.tsx
        <div className="font-size-18">
=======
        <div className="font-size-18 font-responsive">
>>>>>>> 7ffe6d14e3674308cb289385666df4775e5b47d8:src/features/CardOpcaoFornecedoresListaDeTransmissao/CardOpcaoFornecedoresListaDeTransmissao.tsx
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
