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
import ScreenType from "../enuns/ScreenType";

const CadastrosJuridica: React.FC = () => {
  const [login, setLogin] = useState("");
  /* const { setLoginUser, loading } = useLogin(); */
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* setLoginUser({ login, password }); */
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };
  const history = useHistory();
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
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
                  className="buttom-login"
                  style={{
                    height: "54px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
