import React from 'react';

import NavHorizontal from './NavHorizontal';
import NavVertical from './NavVertical';
import {
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';

const PagamentoAPrazo: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Pagamentos à prazo'} />

      <div className="w-100 p-5 h-100 margin-top-60 shadow-sm">
        <h2 className="margin-top-60">
          Selecione as opções aceitas para pagamento à prazo
        </h2>

        <div className="d-flex flex-column align-items-center justify-content-center margin-top-60">
          <div className="firstLine-cards d-flex align-items-center justify-content-around w-100">
            <div className="card-cartao-credito" style={{ width: '500px' }}>
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
                    Cartão de crédito
                  </InputGroupText>
                </InputGroup>

                <CardText className="mt-4">Condição:</CardText>

                <FormGroup className="mt-4">
                  <Input
                    type="select"
                    name="selectQuantidadeParcelamento"
                    id="quantidadeParcelamento"
                  >
                    <option>Dividimos em até 3x sem Juros</option>
                    <option>1x sem Juros</option>
                    <option>2x sem Juros</option>
                    <option>3x sem Juros</option>
                  </Input>
                </FormGroup>
              </Card>
            </div>

            <div className="card-construcard ml-4" style={{ width: '500px' }}>
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
                    ConstruCard
                  </InputGroupText>
                </InputGroup>

                <CardText className="mt-4">Condição:</CardText>

                <FormGroup className="mt-4">
                  <Input
                    type="select"
                    name="selectQuantidadeParcelamento"
                    id="quantidadeParcelamento"
                  >
                    <option>Dividimos em até 3x sem Juros</option>
                    <option>1x sem Juros</option>
                    <option>2x sem Juros</option>
                    <option>3x sem Juros</option>
                  </Input>
                </FormGroup>
              </Card>
            </div>
          </div>

          <div className="secondLine-cards d-flex d-flex align-items-center justify-content-around w-100">
            <div className="card-sinal-saldo ml-4" style={{ width: '425px' }}>
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
                    Sinal e Saldo
                  </InputGroupText>
                </InputGroup>

                <CardText className="mt-4">Sinal (%):</CardText>

                <FormGroup>
                  <Input
                    placeholder="0%"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />
                </FormGroup>

                <CardText className="mt-4">Saldo para:</CardText>

                <FormGroup>
                  <Input
                    placeholder="15"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />{' '}
                  dias
                </FormGroup>
              </Card>
            </div>

            <div
              className="card-cheque-predatado ml-4"
              style={{ width: '425px' }}
            >
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
                    Cheque predatado
                  </InputGroupText>
                </InputGroup>

                <CardText className="mt-4">Condição:</CardText>

                <FormGroup className="mt-4">
                  <Input
                    type="select"
                    name="selectQuantidadeParcelamento"
                    id="quantidadeParcelamento"
                  >
                    <option>Dividimos em até 3x sem Juros</option>
                    <option>1x sem Juros</option>
                    <option>2x sem Juros</option>
                    <option>3x sem Juros</option>
                  </Input>
                </FormGroup>

                <CardText className="mt-4">Primeira para:</CardText>

                <FormGroup>
                  <Input
                    placeholder="15"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />
                  dias
                </FormGroup>
              </Card>
            </div>

            <div className="card-boleto ml-4" style={{ width: '400px' }}>
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
                    Boleto
                  </InputGroupText>
                </InputGroup>

                <CardText className="mt-4">Condição:</CardText>

                <FormGroup className="mt-4">
                  <Input
                    type="select"
                    name="selectQuantidadeParcelamento"
                    id="quantidadeParcelamento"
                  >
                    <option>Dividimos em até 3x sem Juros</option>
                    <option>1x sem Juros</option>
                    <option>2x sem Juros</option>
                    <option>3x sem Juros</option>
                  </Input>
                </FormGroup>

                <CardText className="mt-4">Primeira para:</CardText>

                <FormGroup>
                  <Input
                    placeholder="15"
                    type="number"
                    name="number"
                    id="percentNumber"
                  />
                  dias
                </FormGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagamentoAPrazo;
