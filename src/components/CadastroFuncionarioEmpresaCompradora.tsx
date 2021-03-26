import React, { FormEvent, useState } from "react";
import { Redirect } from "react-router";
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
import ScreenType from "../enuns/ScreenType";

const CadastroFuncionarioEmpresaCompradora: React.FC = () => {
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
        <div className="card card-login mr-lg-5">
          <div className="card-body m-3 m-lg-5 has-shown-squad">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 title">
                Cadastro de funcionário empresa compradora
              </div>
              <div className="mb-4 sub-title">
                Digite os seus dados para cadastrar:
              </div>
            </div>
            <Form onSubmit={onSubmit}>
              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
                    type="email"
                    placeholder="Nome completo"
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
                    type="email"
                    placeholder="CPF"
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
                      Função principal
                    </option>
                    <option>Dono / Administrador</option>
                    <option>Gerente</option>
                    <option>Vendedor</option>
                    <option>Representante</option>
                    <option>Estoque/Almoxarifado</option>
                    <option>Outro</option>
                  </Input>
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
                        <span>Não tenho empresa</span>
                      </Label>
                    </FormGroup>
                  </div>
                </div>
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
                  className="buttom-login"
                  style={{
                    height: "54px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => (
                    <Redirect
                      to={ScreenType.CADASTROFUNCIONARIOEMPRESACOMPRADORA}
                    />
                  )}
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

export default CadastroFuncionarioEmpresaCompradora;
