import React from "react";
import CharTicket from "./CharTicket/CharTicket";

const ContainerFornecedoresFavoritos = () => {
  return (
    <div>
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Ouro"}
        score={4.9}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Prata"}
        score={4.2}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Bronze"}
        score={3.7}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Bronze"}
        score={3.3}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Bronze"}
        score={3.1}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Bronze"}
        score={3.1}
      />
      <CharTicket
        name={"Daniel Chaves"}
        classification={"Fornecedor Bronze"}
        score={2.5}
      />
    </div>
  );
};

export default ContainerFornecedoresFavoritos;
