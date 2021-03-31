import React, { FormEvent, useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import ScreenType from "../enums/ScreenType";
import Swal from "sweetalert2";
import axios from "axios";
import { RiMailAddLine, RiPencilLine } from "react-icons/ri";

const CadastrosFornecedor: React.FC = () => {
  const [login] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  const getEstados = () => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((result) => {
        console.log(result.data);
      });
  };

  const getMicrorregioes = () => {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/microrregioes"
      )
      .then((result) => {
        console.log(result.data);
      });
  };

  useEffect(() => {
    getEstados();
    getMicrorregioes();
  }, []);
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="form card card-login mr-lg-5">
          <div className="card-body m-3 m-lg-5 has-shown-squad">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 title">Cadastro de fornecedor</div>
              <div className="mb-4 mt-1 sub-title">
                Digite os dados de fornecedor para cadastrar:
              </div>
            </div>
            <Form onSubmit={onSubmit}>
              <div className="mb-3 mt-1">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Nome completo"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text">
                      <RiPencilLine />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-3 mt-1">
                <InputGroup>
                  <Input
                    value={login}
                    type="email"
                    placeholder="Email"
                    bsSize="lg"
                    className="input-login"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-group-text">
                      <RiMailAddLine />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="mb-4 mt-1">
                <FormGroup>
                  <Input type="select" name="select" id="exampleSelect">
                    <option selected disabled>
                      Função principal
                    </option>
                    <option>Dono/administrador</option>
                    <option>Gerente/Coordenador de obras</option>
                    <option>Engenheiro(a)/Tecnólogo(a)</option>
                    <option>Arquiteto(a)/Designer de interiores</option>
                    <option>Compras/Suprimentos</option>
                    <option>Planejamento/Orçamento</option>
                    <option>Estoque/Almoxarifado</option>
                    <option>Outro</option>
                  </Input>
                </FormGroup>
              </div>

              <div className="input-options">
                <div className="row mb-3 mt-1">
                  <div className="col">
                    <FormGroup check>
                      <Label check>
                        <div className="form-check-input-box">
                          <Input type="checkbox" />{" "}
                        </div>
                        <span>
                          Aceito os <a href="/">termos e condições de uso</a>
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
                  className="buttom-login d-flex justify-content-center align-items-center"
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

export default CadastrosFornecedor;
