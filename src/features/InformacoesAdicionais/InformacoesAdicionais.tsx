import React from "react";
import "./styles.scss";
import NavVertical from "../../components/NavVertical/NavVertical";
import NavHorizontal from "../../components/NavHorizontal/NavHorizontal";
import ScreenType from "../../enums/ScreenType";

import { ImLocation } from "react-icons/im";
import { FcHome } from "react-icons/fc";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import {
  Input,
  CardBody,
  CardTitle,
  Card,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

const InformacoesAdicionais: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Informações Adicionais"} />

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
                  {""}
                  Campina Grande
                </div>

                <div className="mt-1 changeConstruction">
                  <a href={ScreenType.INFORMACOESADICIONAIS}>
                    <HiOutlineSwitchHorizontal className="mb-1 mr-1" />
                    {""}
                    Trocar de obra
                  </a>
                </div>
              </div>
            </div>

            <div className="additionalInformation margin-top-60 w-50 mx-auto">
              <Card color="white">
                <CardBody>
                  <CardTitle color="secondary" className="mb-3 text-body">
                    <h3>
                      Verifique os seguintes campos antes de publicar sua
                      cotação:
                    </h3>
                  </CardTitle>

                  <div className="formsContainer d-flex flex-column">
                    <div className="formLine-radio mt-4 d-flex align-items-center">
                      <h5>Objetivo da cotação:</h5>

                      <FormGroup check>
                        <div className="radios ml-5 mb-1 d-flex">
                          <Label check>
                            <Input type="radio" name="radio1" /> Compra
                          </Label>

                          <div className="ml-5">
                            <Label check>
                              <Input type="radio" name="radio1" /> Estudo
                            </Label>
                          </div>
                        </div>
                      </FormGroup>
                    </div>

                    <div className="formLine-select mt-4 d-flex align-items-center">
                      <h5>Centro de custo:</h5>

                      <div className="ml-3 mt-3 w-75">
                        <FormGroup>
                          <Input type="select" name="select" id="exampleSelect">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </div>
                    </div>

                    <div className="formLine-input mt-4 d-flex align-items-center">
                      <h5>Telefone para dúvidas:</h5>

                      <div className="ml-3 mt-3 w-50">
                        <FormGroup>
                          <Input
                            type="text"
                            name="cellphone"
                            id="exampleCellphone"
                            placeholder="Digite o telefone"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <Button color="primary" className="mt-4">
                      Publicar Cotação
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformacoesAdicionais;
