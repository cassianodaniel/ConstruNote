import React from 'react';

import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';
import {
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';

const PagamentoAVista: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Pagamentos à vista'} />

      <div className="w-100 p-5 h-100 margin-top-60 shadow-sm">
        <h2 className="margin-top-60">
          Selecione as opções aceitas para pagamento à vista
        </h2>

        <div className="d-flex flex-column align-items-center justify-content-center margin-top-60">
          <div className="firstLine-cards d-flex align-items-center justify-content-between w-100">
            <div
              className="card-dinheiro-transferencia"
              style={{ width: '500px' }}
            >
              <Card
                body
                style={{
                  border: '1px solid var(--secondary)',
                }}
              >
                <InputGroup>
                  <InputGroupText className="bg-white border-secondary">
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
            </div>

            <div className="card-boleto" style={{ width: '500px' }}>
              <Card
                body
                outline
                style={{
                  border: '1px solid var(--secondary)',
                }}
              >
                <InputGroup>
                  <InputGroupText className="bg-white border-secondary">
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
            </div>
          </div>

          <div className="secondLine-cards d-flex align-items-center justify-content-between w-100">
            <div className="card-cheque" style={{ width: '425px' }}>
              <Card
                body
                outline
                style={{
                  border: '1px solid var(--secondary)',
                }}
              >
                <InputGroup>
                  <InputGroupText className="bg-white border-secondary">
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
            </div>

            <div className="card-debito" style={{ width: '425px' }}>
              <Card
                body
                outline
                style={{
                  border: '1px solid var(--secondary)',
                }}
              >
                <InputGroup>
                  <InputGroupText className="bg-white border-secondary">
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
            </div>

            <div className="card-credito-1x" style={{ width: '425px' }}>
              <Card
                body
                outline
                style={{
                  border: '1px solid var(--secondary)',
                }}
              >
                <InputGroup>
                  <InputGroupText className="bg-white border-secondary">
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
        </div>
      </div>
    </>
  );
};

export default PagamentoAVista;
