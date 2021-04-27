import React from 'react';

import NavHorizontal from './NavHorizontal';
import NavVertical from './NavVertical';
import ScreenType from '../enums/ScreenType';
import ListaCotacoes from './ListaCotacoes';

import { ImLocation } from 'react-icons/im';
import { FcHome } from 'react-icons/fc';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

const SelecaoDeProdutosLista: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Seleção de produtos > Lista'} />

      <div className="w-100 h-100 margin-top-60">
        <div className="pageContainer p-4 shadow-sm">
          <div className="constructionContainer d-flex flex-column">
            <div className="linesConstructionContainer">
              <div className="constructionFirstLine justify-content-end">
                <ImLocation className="mt-1" />
                <div className="ml-1 constructionTitle justify-content-end">
                  Construção da quadra poliesportiva do Cabo de Sto Agostinho
                </div>
              </div>

              <div className="constructionSecondLine mt-2 d-flex flex-column justify-content-end align-items-end">
                <div className="constructionSubtitle">
                  <FcHome className="mb-1 mr-1" />
                  {''}
                  Campina Grande
                </div>

                <div className="mt-1 changeConstruction">
                  <a href={ScreenType.SELECAODEPRODUTOSLISTA}>
                    <HiOutlineSwitchHorizontal className="mb-1 mr-1" />
                    {''}
                    Trocar de obra
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="productSelectionContainer margin-top-60">
            <ListaCotacoes />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelecaoDeProdutosLista;
