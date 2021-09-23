import React from "react";
import {
  Card,
  CardText,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import "./styles.scss";

const CIFCard: React.FC = () => {
  return (
    <div className="container-CIF w-50">
      <h4>Selecione as opções disponíveis de frete:</h4>
      <Card body>
        <InputGroup>
          <InputGroupText className="bg-white">
            <Input
              addon
              type="checkbox"
              className="mr-2"
              aria-label="Checkbox"
            />
            CIF (Posto obra)
          </InputGroupText>
        </InputGroup>

        <div className="carga-descarga mt-4">
          <FormGroup>
            <Input
              type="select"
              name="selectQuantidadeParcelamento"
              id="quantidadeParcelamento"
            >
              <option>Carga e descarga do fornecedor no térreo</option>
              <option>Carga do fornecedor e descarga do comprador</option>
            </Input>
          </FormGroup>
        </div>
        <div className="d-flex flex-row w-100 justify-content-between align-items-center mt-2">
          <div className="preco-minimo">
            <CardText>Preço:</CardText>
            <FormGroup>
              <Input
                type="text"
                name="price-input"
                id="price-input"
                placeholder="R$ 0,00"
              />
            </FormGroup>
          </div>

          <div className="prazo">
            <CardText>Prazo:</CardText>
            <FormGroup className="mt-2 d-flex align-items-center">
              <Input
                type="number"
                min={0}
                name="prazo-input"
                id="prazo-input"
                placeholder="dia(s)"
              />
            </FormGroup>
          </div>
        </div>
        <label className="text-weight-bold font-size-14 text-danger">
          *Grátis para pedidos acima de R$ 1.500,00
        </label>
      </Card>
    </div>
  );
};

export default CIFCard;
