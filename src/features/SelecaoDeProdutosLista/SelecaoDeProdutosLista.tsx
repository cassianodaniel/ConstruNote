import React from "react";

import NavHorizontal from "../NavHorizontal/NavHorizontal";
import NavVertical from "../NavVertical/NavVertical";
import ScreenType from "../../enums/ScreenType";
import ListaCotacoes from "../ListaCotacoes/ListaCotacoes";

import { ImLocation } from "react-icons/im";
import { FcHome } from "react-icons/fc";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const SelecaoDeProdutosLista: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Seleção de produtos / Lista"} />

      <div className="pre-defined-formatted-page">
        <div className="pageContainer p-4 shadow-sm">
          <div className="constructionContainer d-flex flex-column">
            <div className="linesConstructionContainer">
              <div className="constructionFirstLine justify-content-start">
                <ImLocation className="mt-1" />
                <div className="ml-1 mr-1 constructionTitle justify-content-start">
                  Construção da quadra poliesportiva do Cabo de Sto Agostinho
                </div>
              </div>

              <div className="constructionSecondLine mt-2 d-flex flex-column justify-content-start align-items-start">
                <div className="constructionSubtitle">
                  <FcHome className="mb-1 mr-1" /> Campina Grande
                </div>

                <div className="mt-1 changeConstruction">
                  <a href={ScreenType.SELECAODEPRODUTOSLISTA}>
                    <HiOutlineSwitchHorizontal className="mb-1 mr-1" />
                    {""}
                    Trocar de obra
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="productSelectionContainer mt-4">
            <ListaCotacoes />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelecaoDeProdutosLista;
