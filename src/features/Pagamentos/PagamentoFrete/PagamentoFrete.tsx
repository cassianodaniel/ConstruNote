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
import PassosDePagamento from "../../../components/PassosDePagamento/PassosDePagamento";
import { useLayout } from "../../../contexts/LayoutContext";
import FOBCard from "../../../components/FOBCard/FOBCard";
import CIFCard from "../../../components/CIFCard/CIFCard";

const PagamentoFrete: React.FC = () => {
  const { setPassos } = useLayout();
  useEffect(() => {
    setPassos(3);
  }, []);
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Fretes disponíveis"} />
      <div className="pre-defined-formatted-page p-0 shadow-sm">
        <PassosDePagamento />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="firstLine-cards d-flex justify-content-center w-100">
            <CIFCard />
            <FOBCard />
          </div>

          <Button className="mt-4 mb-4 w-75" type="button" color="primary">
            Configurar opções de frete CIF (posto obra)
          </Button>
          <div className="secondLine-cards d-flex align-items-center justify-content-center w-75 ">
            <div className="retirar-no-forcedor d-flex flex-row align-items-center justify-content-center w-100">
              <Card body>
                <div className="prazo">
                  <h3>Critérios gerais</h3>
                </div>
                <div>
                  <div className="validade-proposta">
                    <FormGroup className="mt-4 d-flex align-items-center">
                      <InputGroupText>Validade da proposta:</InputGroupText>
                      <Input
                        className="w-25"
                        type="number"
                        min={0}
                        name="validadeProposta-input"
                        id="validadeProposta-input"
                        placeholder="dias"
                      />
                      <p className="ml-2 mt-3"></p>
                    </FormGroup>
                  </div>

                  <div className="d-flex flex-column justify-content-start align-items-start w-100">
                    <div className="d-flex flex-column  w-100">
                      <div className="criterios-gerais">
                        <CardText className="mt-4">
                          Critérios de fornecimento comuns a todas as cotações:
                        </CardText>

                        <FormGroup>
                          <Input
                            type="textarea"
                            name="criteriosGeraisText"
                            id="criteriosGeraisText"
                            className="w-50"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buttons d-flex align-items-center mt-3">
                  <Button color="success ml-2">Enviar resposta</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagamentoFrete;
