import React from 'react';
import { GoLocation, GoMail, GoSync } from 'react-icons/go';
import ScreenType from '../enums/ScreenType';
import CardOpcaoFornecedoresConvidados from './CardOpcaoFornecedoresConvidados/CardOpcaoFornecedoresConvidados';
import CardOpcaoFornecedoresFavoritos from './CardOpcaoFornecedoresFavoritos/CardOpcaoFornecedoresFavoritos';
import CardOpcaoFornecedoresSugeridos from './CardOpcaoFornecedoresSugeridos/CardOpcaoFornecedoresSugeridos';
import NavHorizontal from './NavHorizontal';
import NavVertical from './NavVertical';

const FornecedoresFavoritos: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Fornecedores favoritos'} />
      <div className="margin-top-60">
        <div className="bg-red m-4 shadow-sm">
          <div className="constructionTextContainer">
            <div className="constructionFirstLine">
              <GoLocation />
              <div className="ml-2 constructionTitle">
                Construção da quadra poliesportiva do Cabo de Sto Agostinho
              </div>
            </div>
            <div className="mt-1 d-flex flex-row">
              <GoSync />{' '}
              <a className="ml-2" href={ScreenType.FORNECEDORESFAVORITOS}>
                Trocar de obra
              </a>
            </div>
            <div className="mt-1 d-flex flex-row">
              <GoMail />{' '}
              <a className="ml-2" href={ScreenType.FORNECEDORESFAVORITOS}>
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
      </div>
    </>
  );
};

export default FornecedoresFavoritos;
