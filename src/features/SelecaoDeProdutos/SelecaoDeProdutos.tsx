import React from "react";
import NavHorizontal from "../../components/NavHorizontal/NavHorizontal";
import NavVertical from "../../components/NavVertical/NavVertical";
import ScreenType from "../../enums/ScreenType";
import CardOpcaoProdutos from "../../components/CardOpcaoProdutos/CardOpcaoProdutos";
import { ImLocation } from "react-icons/im";
import { FcHome } from "react-icons/fc";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import Line from "../../components/Line/Line";

const SelecaoDeProdutos: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Seleção de produtos"} />
      <div className="pre-defined-formatted-page">
        <div className="pageContainer p-4 shadow-sm">
          <div className="constructionContainer d-flex flex-column">
            <div className="constructionFirstLine justify-content-start">
              <ImLocation className="mt-1" />
              <div className="ml-1 constructionTitle justify-content-start">
                Construção da quadra poliesportiva do Cabo de Sto Agostinho
              </div>
            </div>

            <div className="constructionSecondLine mt-2 d-flex flex-column justify-content-start align-items-start">
              <div className="constructionSubtitle">
                <FcHome className="mb-1 mr-1" />
                {""}
                Campina Grande
              </div>

              <div className="mt-2 changeConstruction mb-3">
                <a href={ScreenType.FORNECEDORESFAVORITOS}>
                  <HiOutlineSwitchHorizontal className="mb-1 mr-1" />
                  {""}
                  Trocar de obra
                </a>
              </div>

              <Line />
            </div>
          </div>
          <div className="productSelectionContainer">
            <CardOpcaoProdutos />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelecaoDeProdutos;
