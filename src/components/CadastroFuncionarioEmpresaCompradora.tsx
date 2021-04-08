import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Spinner,
} from "reactstrap";
import Swal from "sweetalert2";
import ScreenType from "../enums/ScreenType";

const CadastroFuncionarioEmpresaCompradora: React.FC = () => {
  const [login] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div className="form">
        <div className="card">
          <div className="card-body">
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
                    type="email"
                    placeholder="Nome completo"
                    bsSize="lg"
                    className="input-login"
                  />
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
                    onChange={(e) => {
                      console.log(e);
                      setLogin(e.target.value);
                    }}
                    type="email"
                    placeholder="Nome de usuário"
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
                  onClick={() =>
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Você foi cadastrado com sucesso!",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => {
                      history.push(ScreenType.FORNECEDORESFAVORITOS);
                    })
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

export default CadastroFuncionarioEmpresaCompradora;
