import React from "react";

import NavVertical from "../../../components/NavVertical/NavVertical";
import NavHorizontal from "../../../components/NavHorizontal/NavHorizontal";
import {
  Button,
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const PagamentoAVista: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal
        title={"Selecione as opções aceitas para pagamento à vista"}
      />

      <div className="pre-defined-formatted-page p-4 shadow-sm">
        <div className="d-flex flex-row mt-3">
          <div className="firstLine-cards d-flex flex-row">
            <Card body outline className="mr-4">
              <InputGroup>
                <InputGroupText className="bg-white">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Dinheiro / Tranferência
                </InputGroupText>
              </InputGroup>
              <CardText className="mt-4">Desconto (%):</CardText>
              <FormGroup>
                <Input
                  placeholder="0%"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>

            <Card body outline className="mr-4">
              <InputGroup>
                <InputGroupText className="bg-white">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Boleto (à vista)
                </InputGroupText>
              </InputGroup>

              <CardText className="mt-4">Desconto (%):</CardText>

              <FormGroup>
                <Input
                  placeholder="0%"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>
            <Card body outline className="mr-4">
              <InputGroup>
                <InputGroupText className="bg-white">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Cheque (à vista)
                </InputGroupText>
              </InputGroup>

              <CardText className="mt-4">Desconto (%):</CardText>

              <FormGroup>
                <Input
                  placeholder="0%"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>

            <Card body outline className="mr-4">
              <InputGroup>
                <InputGroupText className="bg-white">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Cartão de Débito
                </InputGroupText>
              </InputGroup>

              <CardText className="mt-4">Desconto (%):</CardText>

              <FormGroup>
                <Input
                  placeholder="0%"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
            </Card>

            <Card body outline className="mr-4">
              <InputGroup>
                <InputGroupText className="bg-white">
                  <Input
                    addon
                    type="checkbox"
                    className="mr-2"
                    aria-label="Checkbox"
                  />
                  Cartão de Crédito (1x)
                </InputGroupText>
              </InputGroup>

              <CardText className="mt-4">Desconto (%):</CardText>

              <FormGroup>
                <Input
                  placeholder="0%"
                  type="number"
                  name="number"
                  id="percentNumber"
                />
              </FormGroup>
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
