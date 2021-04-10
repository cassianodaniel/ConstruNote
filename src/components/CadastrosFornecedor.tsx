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
import { motion } from "framer-motion";
import { setSiglaDaFederacao } from "../utils/setSiglaDaFederacao";
import SimpleBar from "simplebar-react";

const CadastrosFornecedor: React.FC = () => {
  const history = useHistory();
  //eslint-disable-next-line
  const [login, setLogin] = useState("");
  //eslint-disable-next-line
  const [localizacao, setLocalizacao] = useState<string>("");
  //eslint-disable-next-line
  const [federacao, setFederacao] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  //eslint-disable-next-line
  const [estadosSelecionados, setEstadosSelecionados] = useState([]);
  const [estados, setEstados] = useState<any[]>([]);
  const [microrregioes, setMicrorregioes] = useState<any[]>([]);

  const setEstadoSelecionado = (value: string) => {
    setLocalizacao(value);
    setSiglaDaFederacao({ value, setMicrorregioes });
  };

  const getEstados = () => {
    let newList: any[] = [];
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((result: any) => {
        Object.values(result).forEach((rst: any) => {
          Object.values(rst).forEach((rs: any) => {
            if (rs) {
              if (rs.nome) {
                newList.push(rs.nome);
              }
            }
          });
        });
      })
      .then(() => {
        setEstados(newList);
      });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  useEffect(() => {
    getEstados();
    // eslint-disable-next-line
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

              <div className="mb-2 mt-1">
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

              <div>
                <FormGroup>
                  <Input
                    onChange={(e) => {
                      setEstadoSelecionado(e.target.value);
                    }}
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option selected disabled>
                      Selecione o seu estado
                    </option>
                    {estados.map((estado, i) => {
                      return (
                        <option key={i} value={estado}>
                          {estado}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
              </div>

              {microrregioes.length > 0 && (
                <>
                  <motion.div className="text-danger align-items-center justify-content-center ml-1 mb-2 mxwdt-300">
                    Por favor, selecione pelo menos 3 regiões para
                    disponibilizar os seus produtos:
                  </motion.div>
                  <SimpleBar style={{ height: "250px" }}>
                    {microrregioes.map((estado: any) => {
                      return (
                        <div className="custom-control custom-checkbox custom-checkbox-groups d-flex flex-wrap mt-2 border">
                          {estado}
                        </div>
                      );
                    })}
                  </SimpleBar>
                </>
              )}

              <div className="input-options mt-2">
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
                  className="buttom-login d-flex justify-content-center align-items-center mt-2"
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
