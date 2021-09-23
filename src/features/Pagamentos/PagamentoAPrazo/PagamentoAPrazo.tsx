import React, { useEffect } from "react";
import "./styles.scss";
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
import Line from "../../../components/Line/Line";
import PassosDePagamento from "../../../components/PassosDePagamento/PassosDePagamento";
import { useLayout } from "../../../contexts/LayoutContext";
import { useHistory } from "react-router";
import ScreenType from "../../../enums/ScreenType";

const PagamentoAVista: React.FC = () => {
  const { passos, setPassos } = useLayout();
  const history = useHistory();
  const handleConfirmOptions = () => {
    if (passos === 1 || passos === 2) {
      setPassos(passos + 1);
    }
    history.push(ScreenType.PAGAMENTOBOLETO);
  };
  useEffect(() => {
    setPassos(1);
  }, []);
  return (
    <>
      <NavVertical />
      <NavHorizontal
        title={"Selecione as opções aceitas para pagamento à prazo  "}
      />
      <div className="pre-defined-formatted-page w-100 p-0 shadow-sm">
        <PassosDePagamento />
        <div className="d-flex flex-row justify-content-center">
          <div className="firstLine-cards-prazo d-flex flex-row justify-content-center w-100">
            <Card body outline>
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
              <CardText className="mt-4">Primeira parcela em:</CardText>

              <FormGroup>
                <Input
                  placeholder="dia(s)"
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
                  Cheque
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
              <CardText className="mt-4">Primeira parcela em:</CardText>

              <FormGroup>
                <Input
                  placeholder="dia(s)"
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
                <CardText className="mt-4">Primeira parcela em:</CardText>

                <FormGroup>
                  <Input
                    placeholder="dia(s)"
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
                  Cartão (crédito)
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
          <Button onClick={handleConfirmOptions} className="bg-primary w-25">
            Confirmar opções
          </Button>
        </div>
      </div>
    </>
  );
};

export default PagamentoAVista;
