import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Spinner,
} from "reactstrap";
import ScreenType from "../enums/ScreenType";

const CadastrosJuridica: React.FC = () => {
  const [login] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };
  const history = useHistory();
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="form">
        <div className="card card-login">
          <div className="card-body m-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 title">Cadastro de empresa fornecedora</div>
              <div className="mb-4 sub-title">
                Digite os dados da sua empresa para cadastrar:
              </div>
            </div>
            <Form onSubmit={onSubmit}>
              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Nome da empresa"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="CNPJ"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="E-mail"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Senha"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Confirmar senha"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="CEP"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text"></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-4">
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option selected disabled>
                      Tipo de empresa
                    </option>
                    <option>Loja/varejista</option>
                    <option>Distribuidor/atacadista</option>
                    <option>Fabricante</option>
                    <option>Representação comercial</option>
                    <option>Locação de máquina e equipamentos</option>
                  </Input>
                  <div style={{ color: "red", margin: 10 }}>
                    Pode-se selecionar mais de uma opção
                  </div>
                  <div style={{ fontWeight: "bold", margin: 10 }}>
                    Loja/varejista; Distribuidor/atacadista; Fabricante
                  </div>
                </FormGroup>
              </div>

              <div className="input-options">
                <div className="row mb-3">
                  <div className="col">
                    <FormGroup check>
                      <Label check>
                        <div className="form-check-input-box">
                          <Input type="checkbox" />{" "}
                        </div>
                        Declaro que posso cotar preços e comprar em nome desta
                        empresa
                      </Label>
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  block
                  className="bg-primary buttom-login d-flex flex-row justify-content-center align-items-center"
                  onClick={() =>
                    history.push(
                      ScreenType.CADASTROFUNCIONARIOEMPRESAFORNECEDORA
                    )
                  }
                >
                  {!loading ? "Cadastrar" : <Spinner size="md"></Spinner>}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastrosJuridica;
