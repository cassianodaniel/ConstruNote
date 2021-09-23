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

const FOBCard: React.FC = () => {
  return (
    <div className="container-FOB w-50">
      <div
        style={{
          fontWeight: 300,
          textDecoration: "underline",
          textUnderlinePosition: "under",
        }}
        className="mb-1 d-flex flex-row"
      >
        Distância até a obra: <label className="ml-1">10Km</label>
      </div>
      <Card body>
        <InputGroup>
          <InputGroupText className="bg-white">
            <Input
              addon
              type="checkbox"
              className="mr-2"
              aria-label="Checkbox"
            />
            FOB (Retirar no fornecedor)
          </InputGroupText>
        </InputGroup>

        <div className="disponivelEm mt-3">
          <CardText>Disponível em:</CardText>
          <FormGroup className="mt-2 d-flex align-items-center">
            <Input
              type="number"
              min={0}
              name="prazo-input"
              id="prazo-input"
              placeholder="dia(s)"
              className="w-25"
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
              <option>Carga do fornecedor e descarga do comprador</option>
              <option>Carga e descarga do fornecedor</option>
            </Input>
          </FormGroup>
        </div>
      </Card>
    </div>
  );
};

export default FOBCard;
