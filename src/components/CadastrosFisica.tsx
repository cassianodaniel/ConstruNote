import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import Swal from "sweetalert2";
import ScreenType from "../enums/ScreenType";

const CadastrosFisica: React.FC = () => {
  const [login] = useState("");
  const [password] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="form">
        <div className="card card-login ">
          <div className="card-body m-3  ">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 title">Cadastro de pessoa física</div>
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
                    placeholder="Nome do usuário"
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

              <div className="mb-4">
                <InputGroup>
                  <Input
                    value={password}
                    type="password"
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
                    placeholder="E-mail"
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
                    <option>Engenheiro(a) / Tecnólogo (a)</option>
                    <option>Arquiteto(a)/Designer de Interiores</option>
                    <option>Técnico(a)</option>
                    <option>Mestre/Encarregado(a)</option>
                    <option>Profissional/Prestador de serviço</option>
                    <option>Construtor (pessoa física)</option>
                    <option>
                      Construindo, reformando ou reparando imóvel próprio
                    </option>
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
                        <span>Salvar senha</span>
                      </Label>
                    </FormGroup>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <FormGroup check>
                      <Label check>
                        <Link to="/forgot-password" className="link-password">
                          Esqueceu a senha?
                        </Link>
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
                        <span>
                          Aceito os{" "}
                          <a href={ScreenType.FORNECEDORESFAVORITOS}>
                            termos e condições de uso
                          </a>
                        </span>
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
                  className="bg-primary buttom-login d-flex justify-content-center align-items-center"
                  onClick={() => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Você foi cadastrado com sucesso!",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => {
                      history.push(ScreenType.FORNECEDORESFAVORITOS);
                    });
                  }}
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

export default CadastrosFisica;
