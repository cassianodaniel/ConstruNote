import React from 'react';

import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';
import {
  Button,
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';

const PagamentoFrete: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Fretes Disponíveis'} />

      <div className="w-100 p-5 h-100 margin-top-60 shadow-sm">
        <div className="titles d-flex align-items-center justify-content-between margin-top-60">
          <h2>Selecione as opções disponíveis de frete</h2>

          <h3>Distância até a obra: 10Km</h3>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center margin-top-60">
          <div className="firstLine-cards d-flex align-items-center justify-content-between w-100">
            <div className="card-FOB" style={{ width: '500px' }}>
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
                    FOB (Comprador arca com a entrega)
                  </InputGroupText>
                </InputGroup>

                <div className="preco">
                  <CardText className="mt-4">Preço:</CardText>

                  <FormGroup className="mt-4">
                    <Input
                      type="text"
                      name="price-input"
                      id="price-input"
                      placeholder="R$ 0,00"
                    />
                  </FormGroup>
                </div>

                <div className="prazo">
                  <CardText className="mt-4">Prazo:</CardText>

                  <FormGroup className="mt-4 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="15"
                    />
                    <p className="ml-2 mt-3">dias</p>
                  </FormGroup>
                </div>

                <div className="ate">
                  <CardText className="mt-4">Até:</CardText>

                  <FormGroup className="mt-4 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="ate-input"
                      id="ate-input"
                      placeholder="15"
                    />
                    <p className="ml-2 mt-3">Km</p>
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-4">
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

            <div className="card-CIF" style={{ width: '500px' }}>
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
                    CIF (Fornecedor arca com a entrega)
                  </InputGroupText>
                </InputGroup>

                <div className="preco-minimo">
                  <CardText className="mt-4">Preço mínimo:</CardText>

                  <FormGroup className="mt-4">
                    <Input
                      type="text"
                      name="price-input"
                      id="price-input"
                      placeholder="R$ 0,00"
                    />
                  </FormGroup>
                </div>

                <div className="prazo">
                  <CardText className="mt-4">Prazo:</CardText>

                  <FormGroup className="mt-4 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="15"
                    />
                    <p className="ml-2 mt-3">dias</p>
                  </FormGroup>
                </div>

                <div className="ate">
                  <CardText className="mt-4">Até:</CardText>

                  <FormGroup className="mt-4 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="ate-input"
                      id="ate-input"
                      placeholder="15"
                    />
                    <p className="ml-2 mt-3">Km</p>
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-4">
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

          <div className="secondLine-cards d-flex align-items-center justify-content-center w-100">
            <div className="retirar-no-forcedor" style={{ width: '500px' }}>
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
                    Retirar no fornecedor
                  </InputGroupText>
                </InputGroup>

                <div className="prazo">
                  <CardText className="mt-4">Prazo:</CardText>

                  <FormGroup className="mt-4 d-flex align-items-center">
                    <Input
                      type="number"
                      min={0}
                      name="prazo-input"
                      id="prazo-input"
                      placeholder="15"
                    />
                    <p className="ml-2 mt-3">dias</p>
                  </FormGroup>
                </div>

                <div className="carga-descarga">
                  <FormGroup className="mt-4">
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
              </Card>
            </div>
          </div>
        </div>

        <div className="criterios-fornecimento margin-top-60">
          <h2>Critérios de Fornecimento</h2>

          <Card
            body
            style={{
              border: '1px solid var(--secondary)',
            }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="validade-proposta">
                <CardText className="mt-4">Validade da proposta:</CardText>

                <FormGroup className="mt-4 d-flex align-items-center">
                  <Input
                    type="number"
                    min={0}
                    name="validadeProposta-input"
                    id="validadeProposta-input"
                    placeholder="15"
                  />
                  <p className="ml-2 mt-3">dias</p>
                </FormGroup>
              </div>

              <div className="criterios-gerais">
                <CardText className="mt-4">Critérios Gerais:</CardText>

                <FormGroup>
                  <Input
                    type="textarea"
                    name="criteriosGeraisText"
                    id="criteriosGeraisText"
                  />
                </FormGroup>
              </div>
            </div>

            <div className="buttons d-flex align-items-center">
              <Button outline color="primary">
                Voltar
              </Button>

              <Button color="primary ml-2">Enviar Resposta</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PagamentoFrete;
