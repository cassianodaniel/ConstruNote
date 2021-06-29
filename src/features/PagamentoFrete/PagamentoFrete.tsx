import React from "react";

import NavVertical from "../NavVertical";
import NavHorizontal from "../NavHorizontal";
import {
  Button,
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const PagamentoFrete: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Fretes disponíveis"} />

      <div className="pre-defined-formatted-page p-5 shadow-sm">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="firstLine-cards d-flex align-items-center justify-content-center w-100">
            <div className="card-CIF w-50 mr-4">
              <Card body>
                <h4 className="mb-4">
                  Selecione as opções disponíveis de frete:
                </h4>

                <InputGroup>
                  <InputGroupText className="bg-white">
                    <Input
                      addon
                      type="checkbox"
                      className="mr-2"
                      aria-label="Checkbox"
                    />
                    FOB (Comprador arca com a entrega)
                  </InputGroupText>
                </InputGroup>

                <div className="preco">
                  <CardText className="mt-4">Preço:</CardText>

                  <FormGroup className="mt-2">
                    <Input
                      type="text"
                      name="price-input"
                      id="price-input"
                      placeholder="R$ 0,00"
                    />
                  </FormGroup>
                </div>

                <div className="prazo">
                  <CardText className="mt-2">Prazo em dias:</CardText>
                  <FormGroup className="mt-2 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="Dias"
                    />
                  </FormGroup>
                </div>

                <div className="ate">
                  <CardText className="mt-2">Até:</CardText>

                  <FormGroup className="mt-2 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="ate-input"
                      id="ate-input"
                      placeholder="Km"
                    />
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-2">
                    <Input
                      type="select"
                      name="selectQuantidadeParcelamento"
                      id="quantidadeParcelamento"
                    >
                      <option>Carga e descarga do fornecedor</option>
                      <option>
                        Carga do fornecedor e descarga do comprador
                      </option>
                    </Input>
                  </FormGroup>
                </div>
              </Card>
            </div>
            <div className="card-CIF w-50">
              <Card style={{ height: "517px" }} body>
                <h4 className="mb-4">Distância até a obra: 10Km</h4>
                <InputGroup>
                  <InputGroupText className="bg-white">
                    <Input
                      addon
                      type="checkbox"
                      className="mr-2"
                      aria-label="Checkbox"
                    />
                    CIF (Fornecedor arca com a entrega)
                  </InputGroupText>
                </InputGroup>

                <div className="preco-minimo">
                  <CardText className="mt-4">Preço mínimo:</CardText>
                  <FormGroup className="mt-2">
                    <Input
                      type="text"
                      name="price-input"
                      id="price-input"
                      placeholder="R$ 0,00"
                    />
                  </FormGroup>
                </div>

                <div className="prazo">
                  <CardText className="mt-2">Prazo:</CardText>
                  <FormGroup className="mt-2 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="Dias"
                    />
                  </FormGroup>
                </div>

                <div className="ate">
                  <CardText className="mt-2">Até:</CardText>
                  <FormGroup className="mt-2 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="ate-input"
                      id="ate-input"
                      placeholder="Km"
                    />
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-2">
                    <Input
                      type="select"
                      name="selectQuantidadeParcelamento"
                      id="quantidadeParcelamento"
                    >
                      <option>Carga e descarga do fornecedor</option>
                      <option>
                        Carga do fornecedor e descarga do comprador
                      </option>
                    </Input>
                  </FormGroup>
                </div>
              </Card>
            </div>
          </div>

          <div className="secondLine-cards d-flex align-items-center justify-content-center w-50 ">
            <div className="retirar-no-forcedor d-flex flex-row align-items-center justify-content-center w-100">
              <Card style={{ height: "290px" }} body>
                <div className="prazo">
                  <CardText className="">Prazo da proposta em dias:</CardText>

                  <FormGroup className="mt-1 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="Dias"
                    />
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-1">
                    <Input
                      type="select"
                      name="selectQuantidadeParcelamento"
                      id="quantidadeParcelamento"
                    >
                      <option>
                        Carga do fornecedor e descarga do comprador
                      </option>
                      <option>Carga e descarga do fornecedor</option>
                    </Input>
                  </FormGroup>
                </div>

                <InputGroup className="mt-">
                  <InputGroupText className="bg-white">
                    <Input
                      addon
                      type="checkbox"
                      className="mr-2"
                      aria-label="Checkbox"
                    />
                    Retirar no fornecedor
                  </InputGroupText>
                </InputGroup>
              </Card>

              <Card style={{ height: "290px" }} body>
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <div className="d-flex flex-column">
                    <div className="validade-proposta">
                      <CardText className="">
                        Validade da proposta em dias:
                      </CardText>

                      <FormGroup className="mt-4 d-flex align-items-center">
                        <Input
                          type="number"
                          min={0}
                          name="validadeProposta-input"
                          id="validadeProposta-input"
                          placeholder="Validade da proposta"
                        />
                        <p className="ml-2 mt-3"></p>
                      </FormGroup>
                    </div>

                    <div className="criterios-gerais">
                      <CardText className="mt-4">
                        Critérios gerais para fornecimento:
                      </CardText>

                      <FormGroup>
                        <Input
                          type="textarea"
                          name="criteriosGeraisText"
                          id="criteriosGeraisText"
                          placeholder="Critérios gerais para fornecimento"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="buttons d-flex align-items-center mr-5">
            <Button color="primary ml-2">Enviar Resposta</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagamentoFrete;
