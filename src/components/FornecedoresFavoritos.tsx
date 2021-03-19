import React from "react";
import { GoLocation, GoMail, GoSync } from "react-icons/go";
import CardOpcaoFornecedoresConvidados from "./CardOpcaoFornecedoresConvidados";
import CardOpcaoFornecedoresFavoritos from "./CardOpcaoFornecedoresFavoritos";
import CardOpcaoFornecedoresSugeridos from "./CardOpcaoFornecedoresSugeridos";

const FornecedoresFavoritos: React.FC = () => {
  return (
    <div className="bg-red m-4 shadow-sm">
      <div className="constructionTextContainer">
        <div className="constructionFirstLine">
          <GoLocation />
          <div className="ml-2 constructionTitle">
            Construção da quadra poliesportiva do Cabo de Sto Agostinho
          </div>
        </div>
        <div className="mt-1 d-flex flex-row">
          <GoSync />{" "}
          <a className="ml-2" href="www.google.com.br">
            Trocar de obra
          </a>
        </div>
        <div className="mt-1 d-flex flex-row">
          <GoMail />{" "}
          <a className="ml-2" href="www.google.com.br">
            Convidar fornecedores
          </a>
        </div>
      </div>
      <div className="cardsContainer">
        <CardOpcaoFornecedoresFavoritos />
        <CardOpcaoFornecedoresConvidados />
        <CardOpcaoFornecedoresSugeridos />
      </div>
    </div>
  );
};

export default FornecedoresFavoritos;
