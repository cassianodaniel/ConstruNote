import React from 'react';

import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';
import Line from './Line';

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
} from 'reactstrap';

import ProfilePicture from '../assets/images/emblems/emblem.png';
import { FcShop } from 'react-icons/fc';
import { IoIosConstruct } from 'react-icons/io';
import { IoChatbox } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiAddCircleLine } from 'react-icons/ri';

const ResponderCotacao: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Responder Cotação'} />

      <div className="w-100 h-100 margin-top-60">
        <div className="pageContainer p-4 shadow-sm">
          <div className="constructionContainer d-flex flex-column">
            <div className="storeName d-flex justify-content-end">
              <h4 className="constructionTitle justify-content-end">
                Armázem Ribeiro
                <IoIosConstruct className="mb-1 ml-1" />
              </h4>
            </div>

            <div className="shopName d-flex justify-content-around align-items-center mb-5 mt-5">
              <div className="constructionName">
                <h4>
                  <FcShop className="mb-1 mr-1" />
                  Construtora Noberto Odebrecht SA
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

              <div className="button-enviar-proposta align-self-center">
                <Button
                  color="outline-primary" /* onClick={ScreenType.ENVIARPROPOSTA} */
                >
                  Enviar uma proposta
                </Button>
              </div>
            </div>

            <Line />

            <div className="cardsContainer mt-5 d-flex justify-content-around">
              <div className="cardInfoAnexos d-flex flex-column w-25">
                <div className="cardInfo">
                  <Card color="white">
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

                      <CardText className="link-color">
                        (83) 9 9911-2233
                      </CardText>
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

                <div className="cardAnexos mt-5">
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

              <div className="cardTableItems w-50">
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
                            similares
                          </Button>

                          <Button
                            outline
                            color="primary"
                            className="rounded-pill btn-sm ml-5"
                          >
                            populares
                          </Button>
                        </div>
                      </CardTitle>
                    </CardBody>

                    <CardBody>
                      <Table
                        hover
                        responsive
                        autoCapitalize={'on'}
                        className="d-flex align-items-center"
                      >
                        <div className="d-flex flex-column">
                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="buttonColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="buttonColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="editOrDeleteColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <div className="links-options mt-3">
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
                      </Table>
                    </CardBody>
                  </div>

                  <div className="cardSectionTwo">
                    <CardBody className="bg-light rounded">
                      <CardTitle
                        color="secondary"
                        tag="h2"
                        className="mt-2 text-body d-flex justify-content-around align-items-center"
                      >
                        2. Bloco cerâmico 8 furos na horizontal
                        <div className="ml-3 d-flex align-items-center">
                          <Button
                            outline
                            color="primary"
                            className="rounded-pill btn-sm"
                          >
                            similares
                          </Button>

                          <Button
                            outline
                            color="primary"
                            className="rounded-pill btn-sm ml-5"
                          >
                            populares
                          </Button>
                        </div>
                      </CardTitle>
                    </CardBody>

                    <CardBody>
                      <Table
                        hover
                        responsive
                        autoCapitalize={'on'}
                        className="d-flex align-items-center"
                      >
                        <div className="d-flex flex-column">
                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="editOrDeleteColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="editOrDeleteColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <td className="profilePictureColumn d-flex justify-content-start align-items-center">
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
                                    10000 vergalhão de 12 metros
                                  </div>

                                  <div className="text-secondary d-flex justify-content-center align-items-center mt-3">
                                    Fabricante:
                                    <div className="d-flex align-items-center">
                                      <Badge className="ml-2" color="info" pill>
                                        Shering Williams
                                      </Badge>
                                      <IoChatbox className="ml-2 cursor-pointer" />
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="priceTypesColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">Preço total:</p>
                                  <p className="text-secondary">
                                    Preço unitário:
                                  </p>
                                </div>
                              </td>

                              <td className="priceColumn">
                                <div className="d-flex flex-column">
                                  <p className="text-secondary">R$ 100,00</p>
                                  <p className="text-secondary mb-0">
                                    R$ 10,00 / cada
                                  </p>
                                </div>
                              </td>

                              <td className="buttonColumn">
                                <Button
                                  outline
                                  color="primary"
                                  className="mt-2"
                                >
                                  Precificar
                                </Button>
                              </td>
                            </tr>
                          </tbody>

                          <tbody>
                            <tr>
                              <div className="links-options mt-3">
                                <Button color="info">
                                  <RiAddCircleLine className="mr-1 mb-1" />
                                  Fabricante similar
                                </Button>

                                <Button color="info ml-1">
                                  <RiAddCircleLine className="mr-1 mb-1" />
                                  Produto similar
                                </Button>
                              </div>
                            </tr>
                          </tbody>
                        </div>
                      </Table>
                    </CardBody>
                  </div>

                  <div className="cardSectionThree">
                    <CardBody>
                      <CardTitle color="secondary" className="mb-2 text-body">
                        <h3>Itens complementares:</h3>
                      </CardTitle>

                      <CardText>
                        Opcionalmente ofereça até 5 itens que possam
                        complementar um possível pedido do comprador <br />
                        (Ex: se estiver comprando tinta, ofereça o pincel)
                      </CardText>
                    </CardBody>

                    <CardBody>
                      <CardTitle
                        color="secondary"
                        tag="h2"
                        className="text-body d-flex justify-content-end align-items-center"
                      >
                        <Button color="primary" className="mb-2">
                          Adicionar item
                        </Button>
                      </CardTitle>

                      <CardBody>
                        <Table
                          hover
                          responsive
                          autoCapitalize={'on'}
                          className="d-flex align-items-center"
                        >
                          <div className="flex-column align-items-center">
                            <thead>
                              <tr>
                                <th>Foto</th>
                                <th>Descrição</th>
                                <th></th>
                              </tr>
                            </thead>

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
                                  <Button
                                    outline
                                    color="primary"
                                    className="mt-2"
                                  >
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
                                  <Button
                                    outline
                                    color="primary"
                                    className="mt-2"
                                  >
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
                                      Preço unitário: R$ 10,00 / vergalhão com
                                      12 unid
                                    </div>
                                  </div>
                                </td>

                                <td className="white-space"></td>

                                <td className="removeItemColumn">
                                  <Button
                                    outline
                                    color="primary"
                                    className="mt-2"
                                  >
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
                                      Preço unitário: R$ 10,00 / caixa com 1.000
                                      m²
                                    </div>
                                  </div>
                                </td>

                                <td className="white-space"></td>

                                <td className="removeItemColumn">
                                  <Button
                                    outline
                                    color="primary"
                                    className="mt-2"
                                  >
                                    <MdDelete />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>

                            <tbody>
                              <div className="finishCotacaoContainer mt-3">
                                <tr>
                                  <Button color="primary">
                                    Concluir precificação
                                  </Button>
                                </tr>
                              </div>
                            </tbody>
                          </div>
                        </Table>
                      </CardBody>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponderCotacao;
