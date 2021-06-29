import React from "react";

import NavVertical from "../NavVertical/NavVertical";
import NavHorizontal from "../NavHorizontal/NavHorizontal";
import {
  Button,
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import Line from "../Line/Line";

const PagamentoAVista: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal
        title={"Selecione as opções aceitas para pagamento à vista"}
      />
      <div className="pre-defined-formatted-page w-100 p-4 shadow-sm">
        <div className="d-flex flex-row justify-content-center mt-3">
          <div className="firstLine-cards d-flex flex-row justify-content-center">
            <Card body outline className="ml-4">
              <InputGroup>
                <InputGroupText className="bg-white ">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Boleto
                </InputGroupText>
              </InputGroup>

              <FormGroup className="mt-4">
                <Input
                  type="select"
                  name="selectQuantidadeParcelamento"
                  id="quantidadeParcelamento"
                >
                  <option disabled>Até 3x sem juros</option>
                  <option>1x sem juros</option>
                  <option>2x sem juros</option>
                  <option>3x sem juros</option>
                </Input>
              </FormGroup>

              <div className="mt-4 mb-3">
                <Line />
              </div>
              <CardText className="mt-4">Primeira parcela em dias:</CardText>

              <FormGroup>
                <Input
                  placeholder="15"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>

            <Card body outline className="ml-4">
              <InputGroup>
                <InputGroupText className="bg-white ">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Cheque predatado
                </InputGroupText>
              </InputGroup>

              <FormGroup className="mt-4">
                <Input
                  type="select"
                  name="selectQuantidadeParcelamento"
                  id="quantidadeParcelamento"
                >
                  <option disabled>Até 3x sem juros</option>
                  <option>1x sem juros</option>
                  <option>2x sem juros</option>
                  <option>3x sem juros</option>
                </Input>
              </FormGroup>
              <div className="mt-4 mb-3">
                <Line />
              </div>
              <CardText className="mt-4">Primeira parcela em dias:</CardText>

              <FormGroup>
                <Input
                  placeholder="15"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>

            <Card body outline className="ml-4">
              <InputGroup>
                <InputGroupText className="bg-white ">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Sinal (%)
                </InputGroupText>
              </InputGroup>
              <CardText className="mt-4">
                <FormGroup>
                  <Input
                    placeholder="15"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />{" "}
                </FormGroup>
              </CardText>
              <div className="mt-2 mb-3">
                <Line />
              </div>
              <InputGroup>
                <CardText className="mt-4">Primeira parcela em dias:</CardText>

                <FormGroup>
                  <Input
                    placeholder="15"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />
                </FormGroup>
              </InputGroup>
            </Card>
            <Card body outline className="ml-4">
              <InputGroup>
                <InputGroupText className="bg-white ">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Cartão de crédito
                </InputGroupText>
              </InputGroup>

              <FormGroup className="mt-4">
                <Input
                  type="select"
                  name="selectQuantidadeParcelamento"
                  id="quantidadeParcelamento"
                >
                  <option disabled>Até 3x sem juros</option>
                  <option>1x sem juros</option>
                  <option>2x sem juros</option>
                  <option>3x sem juros</option>
                </Input>
              </FormGroup>
              <div className="mt-2 mb-3">
                <Line />
              </div>
            </Card>
            <Card body outline className="ml-4">
              <InputGroup>
                <InputGroupText className="bg-white ">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  ConstruCard
                </InputGroupText>
              </InputGroup>

              <FormGroup className="mt-4">
                <Input
                  type="select"
                  name="selectQuantidadeParcelamento"
                  id="quantidadeParcelamento"
                >
                  <option disabled>Até 3x sem juros</option>
                  <option>1x sem juros</option>
                  <option>2x sem juros</option>
                  <option>3x sem juros</option>
                </Input>
              </FormGroup>
              <div className="mt-2 mb-3">
                <Line />
              </div>
            </Card>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center align-self-center mt-3">
          <Button className="bg-primary w-25">Confirmar opções</Button>
        </div>
      </div>
    </>
  );
};

export default PagamentoAVista;
