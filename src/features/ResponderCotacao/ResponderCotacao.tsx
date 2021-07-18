import React from "react";

import NavVertical from "../../components/NavVertical/NavVertical";
import NavHorizontal from "../../components/NavHorizontal/NavHorizontal";
import Line from "../../components/Line/Line";

import {
  Button,
  Alert,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Table,
  Badge,
  Input,
} from "reactstrap";

import ProfilePicture from "../../assets/images/emblems/emblem.png";
import { FcShop } from "react-icons/fc";
import { IoChatbox } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";

const ResponderCotacao: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Responder Cotação"} />
      <div className="pre-defined-formatted-page p-5 d-flex flex-column">
        <div className="cardsContainer d-flex justify-content-center">
          <div className="cardInfoAnexos d-flex flex-column">
            <div className="cardInfo">
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <h4>
                    <FcShop className="mb-1 mr-1" />
                    Construtora Noberto Odebrecht S.A
                  </h4>
                  <div className="alert-comprador d-flex justify-content-center">
                    <Alert
                      color="primary"
                      className="rounded-pill d-inline-block text-center cursor-pointer"
                    >
                      Comprador Platinum
                    </Alert>
                  </div>
                  <div className="cardDetailsComprador d-flex justify-content-center"></div>
                </div>
              </div>
              <Card color="white">
                <div className="button-enviar-proposta align-self-center mt-4">
                  <Button
                    color="outline-primary" /* onClick={ScreenType.ENVIARPROPOSTA} */
                  >
                    Enviar uma proposta
                  </Button>
                </div>
                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Comprador:
                  </CardTitle>

                  <CardText>João da Silva Fernandes</CardText>
                </CardBody>

                <Line />

                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Telefone:
                  </CardTitle>

                  <CardText className="link-color">(83) 9 9911-2233</CardText>
                </CardBody>

                <Line />

                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Obra:
                  </CardTitle>

                  <CardText>Construção do ginásio poliesportivo</CardText>

                  <CardText className="link-color">
                    Campina Grande - PB
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="cardAnexos mt-2">
              <Card color="white">
                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Anexos:
                  </CardTitle>

                  <CardText>
                    <div className="bg-light rounded pt-3 pb-2">
                      <ul>
                        <li>
                          Projeto de detalhamento do portão
                          <i className="ri-download-2-fill hoverColorGray cursor-pointer link-color ml-2"></i>
                        </li>

                        <li>
                          Elevação frontal e corte lateral
                          <i className="ri-download-2-fill hoverColorGray cursor-pointer link-color ml-2"></i>
                        </li>
                      </ul>
                    </div>
                  </CardText>
                </CardBody>

                <Line />

                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Observações desta cotação:
                  </CardTitle>

                  <CardText>
                    <Input
                      type="textarea"
                      name="text"
                      id="text"
                      placeholder="Comprador, digite aqui a sua observação"
                      className="border border-secondary"
                    />
                  </CardText>
                </CardBody>

                <Line />

                <CardBody>
                  <CardTitle
                    color="secondary"
                    tag="h5"
                    className="mb-2 text-body"
                  >
                    Critérios gerais:
                  </CardTitle>

                  <CardText>
                    <Input
                      type="textarea"
                      name="text"
                      id="text"
                      placeholder="Comprador, digite aqui a sua observação"
                      className="border border-secondary"
                    />
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="cardTableItems ml-5">
            <Card color="white">
              <div className="cardSectionOne">
                <CardBody>
                  <CardTitle color="secondary" className="mb-2 text-body">
                    <h3>Itens solicitados pelo comprador:</h3>
                  </CardTitle>

                  <CardText>
                    Precifique os itens abaixo para responder a solicitação
                  </CardText>
                </CardBody>

                <CardBody className="bg-light rounded">
                  <CardTitle
                    color="secondary"
                    tag="h2"
                    className="mt-2 text-body d-flex justify-content-around align-items-center"
                  >
                    1. Bloco cerâmico 8 furos na horizontal
                    <div className="ml-3 d-flex align-items-center">
                      <Button
                        outline
                        color="primary"
                        className="rounded-pill btn-sm"
                      >
                        Similares
                      </Button>

                      <Button
                        outline
                        color="primary"
                        className="rounded-pill btn-sm ml-5"
                      >
                        Populares
                      </Button>
                    </div>
                  </CardTitle>
                </CardBody>

                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4 ">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <tbody>
                    <tr>
                      <div className="links-options mt-3 ml-2 mb-2">
                        <Button color="info">
                          <RiAddCircleLine className="mr-1 mb-1" />
                          Fabricante
                        </Button>

                        <Button color="info ml-1">
                          <RiAddCircleLine className="mr-1 mb-1" />
                          Produto alternativo
                        </Button>
                      </div>
                    </tr>
                  </tbody>
                </div>
              </div>

              <div className="cardSectionOne">
                <CardBody className="bg-light rounded">
                  <CardTitle
                    color="secondary"
                    tag="h2"
                    className="mt-2 text-body d-flex justify-content-around align-items-center"
                  >
                    1. Bloco cerâmico 8 furos na horizontal
                    <div className="ml-3 d-flex align-items-center">
                      <Button
                        outline
                        color="primary"
                        className="rounded-pill btn-sm"
                      >
                        Similares
                      </Button>

                      <Button
                        outline
                        color="primary"
                        className="rounded-pill btn-sm ml-5"
                      >
                        Populares
                      </Button>
                    </div>
                  </CardTitle>
                </CardBody>

                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="profilePictureColumn d-flex justify-content-start align-items-center">
                      <div className="mt-2 ml-4">
                        <img
                          src={ProfilePicture}
                          alt="ProfilePicture"
                          width="32px"
                          height="32px"
                        />
                      </div>
                    </div>

                    <div className="descriptionColumn ml-2">
                      <div className="contentDescription">
                        <div className="d-flex justify-content-center align-items-center">
                          10000 vergalhão de 12 metros
                        </div>

                        <div className="text-secondary d-flex justify-content-center align-items-center mt-3 ml-2">
                          Fabricante:
                          <div className="d-flex align-items-center">
                            <Badge className="ml-2" color="info" pill>
                              Shering Williams
                            </Badge>
                            <IoChatbox className="ml-2 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="priceTypesColumn  mt-3 ml-5">
                      <div className="d-flex flex-column">
                        <p className="text-secondary">Preço total: R$ 100,00</p>
                        <p className="text-secondary">
                          Preço unitário: R$ 10,00 / cada
                        </p>
                      </div>
                    </div>

                    <div className="buttonColumn ml-5 mb-4 mr-4">
                      <Button outline color="primary" className="mt-2">
                        Precificar
                      </Button>
                    </div>
                  </div>

                  <tbody>
                    <tr>
                      <div className="links-options mt-3 ml-2 mb-2">
                        <Button color="info">
                          <RiAddCircleLine className="mr-1 mb-1" />
                          Fabricante
                        </Button>

                        <Button color="info ml-1">
                          <RiAddCircleLine className="mr-1 mb-1" />
                          Produto alternativo
                        </Button>
                      </div>
                    </tr>
                  </tbody>
                </div>
              </div>
              <div className="mt-4">
                <Line />
              </div>
              <div className="cardSectionThree">
                <CardBody>
                  <CardTitle
                    color="secondary"
                    className=" text-body"
                  ></CardTitle>
                  <h3>Itens complementares:</h3>
                  <div className="text-primary cursor-pointer">
                    + Adicionar item
                  </div>
                </CardBody>

                <CardBody>
                  <Table className="d-flex align-items-center">
                    <div className="flex-column align-items-center">
                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-center align-items-center">
                            <div className="mt-2">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription">
                              <div className="d-flex justify-content-center align-items-center">
                                Bloco Cerâmico 8 furos na horizontal
                                <Badge className="ml-1" color="info" pill>
                                  Shering Williams
                                </Badge>
                              </div>

                              <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                Preço unitário: R$ 10,00 / unid
                              </div>
                            </div>
                          </td>

                          <td className="white-space"></td>

                          <td className="removeItemColumn">
                            <Button outline color="primary" className="mt-2">
                              <MdDelete />
                            </Button>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-center align-items-center">
                            <div className="mt-2">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription">
                              <div className="d-flex justify-content-center align-items-center">
                                Bloco Cerâmico 8 furos na horizontal
                                <Badge className="ml-1" color="info" pill>
                                  Shering Williams
                                </Badge>
                              </div>

                              <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                Preço unitário: R$ 10,00 / m²
                              </div>
                            </div>
                          </td>

                          <td className="white-space"></td>

                          <td className="removeItemColumn">
                            <Button outline color="primary" className="mt-2">
                              <MdDelete />
                            </Button>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-center align-items-center">
                            <div className="mt-2">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription">
                              <div className="d-flex justify-content-center align-items-center">
                                Bloco Cerâmico 8 furos na horizontal
                                <Badge className="ml-1" color="info" pill>
                                  Shering Williams
                                </Badge>
                              </div>

                              <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                Preço unitário: R$ 10,00 / vergalhão com 12 unid
                              </div>
                            </div>
                          </td>

                          <td className="white-space"></td>

                          <td className="removeItemColumn">
                            <Button outline color="primary" className="mt-2">
                              <MdDelete />
                            </Button>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-center align-items-center">
                            <div className="mt-2">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription">
                              <div className="d-flex justify-content-center align-items-center">
                                Bloco Cerâmico 8 furos na horizontal
                                <Badge className="ml-1" color="info" pill>
                                  Shering Williams
                                </Badge>
                              </div>

                              <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                Preço unitário: R$ 10,00 / caixa com 1.000 m²
                              </div>
                            </div>
                          </td>

                          <td className="white-space"></td>

                          <td className="removeItemColumn">
                            <Button outline color="primary" className="mt-2">
                              <MdDelete />
                            </Button>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <div className="mt-4">
                          <Button className="submitSaleButton" color="primary">
                            Concluir precificação
                          </Button>
                        </div>
                      </tbody>
                    </div>
                  </Table>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponderCotacao;
