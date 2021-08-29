import React, { FormEvent, useState } from "react";
/* import { useHistory } from "react-router"; */
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  /*   Label, */
  Spinner,
} from "reactstrap";
import { GenericInput } from "../../../components/GenericInput/GenericInput";
/* import Swal from "sweetalert2";
import ScreenType from "../enums/ScreenType"; */

const CadastroFuncionarioEmpresaCompradora: React.FC = () => {
  const [login] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  /* const history = useHistory(); */
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
                  <GenericInput
                    value={nomeCompleto}
                    setValue={setNomeCompleto}
                    placeholder="Nome completo"
                  />
                </InputGroup>
              </div>

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
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

              <div className="mb-3">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Email"
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

              <div className="mb-4">
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option selected disabled>
                      Função principal
                    </option>
                    <option>Dono/Administrador</option>
                    <option>Construtora/Incorporadora</option>
                    <option>Gerente</option>
                    <option>Vendedor</option>
                    <option>Representante</option>
                    <option>Estoque/Almoxarifado</option>
                    <option>Outro</option>
                  </Input>
                </FormGroup>
              </div>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  block
                  className="bg-primary buttom-login"
                  style={{
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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

export default CadastroFuncionarioEmpresaCompradora;
