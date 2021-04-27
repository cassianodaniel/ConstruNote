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
import SimpleBar from "simplebar-react";
import { useStateContext } from "../contexts/StateContext";
import { EstadoDeSelecaoGenerico } from "./EstadoDeSelecaoGenerico";
import { GenericInput } from "./GenericInput";

const CadastrosFornecedor: React.FC = () => {
  const history = useHistory();
  //eslint-disable-next-line
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  //eslint-disable-next-line
  const [localizacao, setLocalizacao] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [estados, setEstados] = useState<any[]>([]);
  const [isSecondSection, setIsSecondSection] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<string[]>([]);

  const {
    setMicrorregioesRondonia,
    setMicrorregioesAcre,
    setMicrorregioesAmazonas,
    setMicrorregioesRoraima,
    setMicrorregioesPara,
    setMicrorregioesAmapa,
    setMicrorregioesTocantins,
    setMicrorregioesMaranhao,
    setMicrorregioesPiaui,
    setMicrorregioesCeara,
    setMicrorregioesRioGrandeDoNorte,
    setMicrorregioesParaiba,
    setMicrorregioesPernambuco,
    setMicrorregioesAlagoas,
    setMicrorregioesSergipe,
    setMicrorregioesBahia,
    setMicrorregioesMinasGerais,
    setMicrorregioesEspiritoSanto,
    setMicrorregioesRioDeJaneiro,
    setMicrorregioesSaoPaulo,
    setMicrorregioesParana,
    setMicrorregioesSantaCatarina,
    setMicrorregioesRioGrandeDoSul,
    setMicrorregioesMatoGrossoDoSul,
    setMicrorregioesMatoGrosso,
    setMicrorregioesGoias,
    setMicrorregioesDistritoFederal,
  } = useStateContext();

  const getMicrorregioes = () => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RO/microrregioes`
      )
      .then((result) => {
        setMicrorregioesRondonia(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AC/microrregioes`
      )
      .then((result) => {
        setMicrorregioesAcre(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AM/microrregioes`
      )
      .then((result) => {
        setMicrorregioesAmazonas(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RR/microrregioes`
      )
      .then((result) => {
        setMicrorregioesRoraima(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PA/microrregioes`
      )
      .then((result) => {
        setMicrorregioesPara(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AP/microrregioes`
      )
      .then((result) => {
        setMicrorregioesAmapa(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/TO/microrregioes`
      )
      .then((result) => {
        setMicrorregioesTocantins(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MA/microrregioes`
      )
      .then((result) => {
        setMicrorregioesMaranhao(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PI/microrregioes`
      )
      .then((result) => {
        setMicrorregioesPiaui(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/microrregioes`
      )
      .then((result) => {
        setMicrorregioesCeara(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RN/microrregioes`
      )
      .then((result) => {
        setMicrorregioesRioGrandeDoNorte(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PB/microrregioes`
      )
      .then((result) => {
        setMicrorregioesParaiba(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PE/microrregioes`
      )
      .then((result) => {
        setMicrorregioesPernambuco(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AL/microrregioes`
      )
      .then((result) => {
        setMicrorregioesAlagoas(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SE/microrregioes`
      )
      .then((result) => {
        setMicrorregioesSergipe(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/BA/microrregioes`
      )
      .then((result) => {
        setMicrorregioesBahia(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/microrregioes`
      )
      .then((result) => {
        setMicrorregioesMinasGerais(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/ES/microrregioes`
      )
      .then((result) => {
        setMicrorregioesEspiritoSanto(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/microrregioes`
      )
      .then((result) => {
        setMicrorregioesRioDeJaneiro(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/microrregioes`
      )
      .then((result) => {
        setMicrorregioesSaoPaulo(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/microrregioes`
      )
      .then((result) => {
        setMicrorregioesParana(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/microrregioes`
      )
      .then((result) => {
        setMicrorregioesSantaCatarina(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RS/microrregioes`
      )
      .then((result) => {
        setMicrorregioesRioGrandeDoSul(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MS/microrregioes`
      )
      .then((result) => {
        setMicrorregioesMatoGrossoDoSul(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MT/microrregioes`
      )
      .then((result) => {
        setMicrorregioesMatoGrosso(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/microrregioes`
      )
      .then((result) => {
        setMicrorregioesGoias(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/DF/microrregioes`
      )
      .then((result) => {
        setMicrorregioesDistritoFederal(
          Object.values(result.data)
            .map((rst: any) => rst?.nome)
            .filter(Boolean)
        );
      });
  };

  const setEstadoSelecionado = (value: any) => {
    setLocalizacao(value);
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
    getMicrorregioes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="form card card-login mr-lg-5">
          <div className="card-body m-3 m-lg-5">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 title">Cadastro de fornecedor</div>
              <div className="mb-4 mt-1 sub-title">
                Digite os dados de fornecedor para cadastrar:
              </div>
            </div>
            <Form onSubmit={onSubmit}>
              <div className="mb-3 mt-1">
                {/* <InputGroup>
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
                </InputGroup> */}
                <GenericInput
                  value={login}
                  setValue={setLogin}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  placeholder={"Login"}
                />
              </div>

              <div className="mb-3 mt-1">
                <InputGroup>
                  <Input
                    value={email}
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

              {
                <>
                  <div
                    onClick={(e: any) => {
                      setEstadoSelecionado("Paraíba");
                      setIsSecondSection(!isSecondSection);
                    }}
                    className="border px-3 py-3 mt-3 text-primary"
                  >
                    Por favor, selecione as regiões que você gostaria de
                    fornecer:
                  </div>
                  <SimpleBar className="border" style={{ maxHeight: "300px" }}>
                    <ul className="mt-3 stateUl">
                      {estados.map((estado) => {
                        return (
                          <EstadoDeSelecaoGenerico
                            nomeDoEstado={estado}
                            microrregioes={`microrregioes${estado
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "")}`}
                          />
                        );
                      })}
                    </ul>
                  </SimpleBar>
                </>
              }

              <div className="input-options mt-4 ml-2">
                <div className="row mb-4 mt-1">
                  <div className="col">
                    <FormGroup check>
                      <Label check>
                        <div className="form-check-input-box">
                          <Input type="checkbox" />{" "}
                        </div>
                        <span>
                          Eu aceito os <a href="/">termos e condições de uso</a>
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
