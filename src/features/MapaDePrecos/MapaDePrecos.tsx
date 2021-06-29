import React, { useState } from 'react';

import NavHorizontal from '../NavHorizontal/NavHorizontal';
import NavVertical from '../NavVertical/NavVertical';
import ScreenType from '../../enums/ScreenType';
import Line from '../Line/Line';

import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Button,
  Table,
  Badge,
  Collapse,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import ProfilePicture from '../../assets/images/emblems/emblem.png';
import { IoChatbox } from 'react-icons/io5';
import { RiAddCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const MapaDePrecos: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Mapa de Preços'} />

      <div className="w-100 h-100 margin-top-60">
        <div className="pageContainer p-4 shadow-sm">
          <div className="cardsContainer mt-5 d-flex justify-content-around">
            <div className="cardInfos d-flex flex-column w-25">
              <div className="cardStoreDetails">
                <Card color="white">
                  <CardBody>
                    <CardTitle color="secondary" className="mb-2 text-body">
                      <Badge
                        color="primary"
                        className="rounded d-flex align-items-center justify-content-center"
                      >
                        <h4 className="text-white pt-2">Ferreira Costa Home</h4>
                      </Badge>

                      <div className="mt-4 d-flex flex-wrap align-items-center justify-content-around">
                        <Badge color="info" pill>
                          2º Melhor Preço
                        </Badge>

                        <Badge color="info" pill>
                          Agilidade
                        </Badge>
                      </div>

                      <div className="mt-3 d-flex flex-wrap align-items-center justify-content-around">
                        <Badge color="info" pill>
                          Pontualidade
                        </Badge>

                        <Badge color="info" pill>
                          Maior prazo
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardBody>
                </Card>
              </div>

              <div className="cardPayments mt-2">
                <Card>
                  <CardBody>
                    <CardTitle
                      color="secondary"
                      className="mb-2 text-body d-flex justify-content-center align-items-center"
                    >
                      <h4>Compra</h4>
                    </CardTitle>

                    <div className="lines d-flex flex-wrap justify-content-center align-items-center">
                      <div className="firstLine mb-2 d-flex">
                        <p>Proposta (800/800 itens):</p>
                        <p className="ml-5">R$ 8.000,00</p>
                      </div>

                      <Line />

                      <div className="secondLine mt-3 d-flex">
                        <div className="mb-2 d-flex">
                          <p>Frete:</p>
                          <p className="ml-5">R$ 0</p>
                        </div>
                      </div>

                      <Line />

                      <div className="thirdLine mt-3 d-flex">
                        <Input type="checkbox" />

                        <p>Retirar na loja</p>
                      </div>
                    </div>
                  </CardBody>

                  <Line />

                  <CardBody>
                    <CardTitle
                      color="secondary"
                      className="mt-2 text-body d-flex justify-content-center align-items-center"
                    >
                      <h4>Escolha a forma de Pagamento:</h4>
                    </CardTitle>

                    <div className="d-flex justify-content-around align-items-center">
                      <Link to={ScreenType.PAGAMENTOBOLETO}>
                        <Button
                          outline
                          color="primary"
                          className="rounded"
                          size="sm"
                        >
                          Pagamento à Vista
                        </Button>
                      </Link>

                      <Link to={ScreenType.PAGAMENTOCARTAO}>
                        <Button
                          outline
                          color="primary"
                          className="rounded"
                          size="sm"
                        >
                          Pagamento à Prazo
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="othersSellers mt-2">
                <Card>
                  <CardBody>
                    <div>
                      <Button
                        color="primary"
                        onClick={toggle}
                        style={{ marginBottom: '1rem' }}
                      >
                        <IoIosArrowForward className="mr-1 mb-1" />
                        Outros vendedores
                      </Button>
                      <Collapse isOpen={isOpen}>
                        <ListGroup>
                          <ListGroupItem>Vendedor 1</ListGroupItem>
                          <ListGroupItem>Vendedor 2</ListGroupItem>
                          <ListGroupItem>Vendedor 3</ListGroupItem>
                          <ListGroupItem>Vendedor 4</ListGroupItem>
                          <ListGroupItem>Vendedor 5</ListGroupItem>
                        </ListGroup>
                      </Collapse>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="cardTableItems w-50">
              <Card color="white cardSection">
                <CardBody>
                  <CardTitle color="secondary" className="mb-2 text-body">
                    <h3>
                      Selecione o preço escolhido de cada item para fazer um
                      pedido
                    </h3>
                  </CardTitle>
                </CardBody>

                <CardBody className="bg-light rounded mb-1">
                  <CardTitle
                    color="secondary"
                    tag="h2"
                    className="mt-2 text-body d-flex justify-content-around align-items-center"
                  >
                    Total da seleção: (3 de 5 itens)
                    <div className="ml-3 d-flex align-items-center">
                      R$ 100.000,00
                    </div>
                  </CardTitle>
                </CardBody>

                <CardBody className="bg-light rounded mt-1">
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
                            <div className="mt-4">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription mt-3">
                              <div className="d-flex flex-column justify-content-center align-items-center">
                                10000 Embalagens com 10000 Kg
                                <div className="d-flex align-items-center mt-3">
                                  <Badge className="ml-2" color="info" pill>
                                    Shering Williams
                                  </Badge>
                                </div>
                              </div>

                              <div className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3">
                                <div>
                                  Ferreira Costa Home Center - Materiais de
                                  constução
                                  <div className="d-flex justify-content-center align-items-center mt-3">
                                    <Button color="link" size="sm">
                                      Obervações do vendedor
                                    </Button>

                                    {/* é bom ser um modal */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="priceTypesColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">
                                Preço total:
                              </p>
                              <p className="text-secondary mt-4">
                                Preço unitário:
                              </p>
                            </div>
                          </td>

                          <td className="priceColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">R$ 100,00</p>
                              <p className="text-secondary mt-4">
                                R$ 10,00 / cada
                              </p>
                            </div>
                          </td>

                          <td className="stockColumn">
                            <div className="d-flex flex-column justify-content-center align-content-around">
                              <p className="text-secondary mt-4 ml-3">
                                Unidades disponíveis:
                              </p>

                              <p className="text-secondary ml-4">10.000</p>
                            </div>
                          </td>

                          <td className="unitColumn">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                              <Card color="transparent">
                                <p className="text-secondary mt-4 ml-3">
                                  Insira a quantidade desejada:
                                </p>

                                <CardBody>
                                  <Input
                                    placeholder="0"
                                    min={0}
                                    max={10000}
                                    type="number"
                                    step="1"
                                  />
                                </CardBody>
                              </Card>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-start align-items-center">
                            <div className="mt-4">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription mt-3">
                              <div className="d-flex flex-column justify-content-center align-items-center">
                                10000 Embalagens com 10000 Kg
                                <div className="d-flex align-items-center mt-3">
                                  <Badge className="ml-2" color="info" pill>
                                    Shering Williams
                                  </Badge>
                                </div>
                              </div>

                              <div className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3">
                                <div>
                                  Ferreira Costa Home Center - Materiais de
                                  constução
                                  <div className="d-flex justify-content-center align-items-center mt-3">
                                    <Button color="link" size="sm">
                                      Obervações do vendedor
                                    </Button>

                                    {/* é bom ser um modal */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="priceTypesColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">
                                Preço total:
                              </p>
                              <p className="text-secondary mt-4">
                                Preço unitário:
                              </p>
                            </div>
                          </td>

                          <td className="priceColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">R$ 100,00</p>
                              <p className="text-secondary mt-4">
                                R$ 10,00 / cada
                              </p>
                            </div>
                          </td>

                          <td className="stockColumn">
                            <div className="d-flex flex-column justify-content-center align-content-around">
                              <p className="text-secondary mt-4 ml-3">
                                Unidades disponíveis:
                              </p>

                              <p className="text-secondary ml-4">10.000</p>
                            </div>
                          </td>

                          <td className="unitColumn">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                              <Card color="transparent">
                                <p className="text-secondary mt-4 ml-3">
                                  Insira a quantidade desejada:
                                </p>

                                <CardBody>
                                  <Input
                                    placeholder="0"
                                    min={0}
                                    max={10000}
                                    type="number"
                                    step="1"
                                  />
                                </CardBody>
                              </Card>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td className="profilePictureColumn d-flex justify-content-start align-items-center">
                            <div className="mt-4">
                              <img
                                src={ProfilePicture}
                                alt="ProfilePicture"
                                width="32px"
                                height="32px"
                              />
                            </div>
                          </td>

                          <td className="descriptionColumn">
                            <div className="contentDescription mt-3">
                              <div className="d-flex flex-column justify-content-center align-items-center">
                                10000 Embalagens com 10000 Kg
                                <div className="d-flex align-items-center mt-3">
                                  <Badge className="ml-2" color="info" pill>
                                    Shering Williams
                                  </Badge>
                                </div>
                              </div>

                              <div className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3">
                                <div>
                                  Ferreira Costa Home Center - Materiais de
                                  constução
                                  <div className="d-flex justify-content-center align-items-center mt-3">
                                    <Button color="link" size="sm">
                                      Obervações do vendedor
                                    </Button>

                                    {/* é bom ser um modal */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="priceTypesColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">
                                Preço total:
                              </p>
                              <p className="text-secondary mt-4">
                                Preço unitário:
                              </p>
                            </div>
                          </td>

                          <td className="priceColumn">
                            <div className="d-flex flex-column">
                              <p className="text-secondary mt-3">R$ 100,00</p>
                              <p className="text-secondary mt-4">
                                R$ 10,00 / cada
                              </p>
                            </div>
                          </td>

                          <td className="stockColumn">
                            <div className="d-flex flex-column justify-content-center align-content-around">
                              <p className="text-secondary mt-4 ml-3">
                                Unidades disponíveis:
                              </p>

                              <p className="text-secondary ml-4">10.000</p>
                            </div>
                          </td>

                          <td className="unitColumn">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                              <Card color="transparent">
                                <p className="text-secondary mt-4 ml-3">
                                  Insira a quantidade desejada:
                                </p>

                                <CardBody>
                                  <Input
                                    placeholder="0"
                                    min={0}
                                    max={10000}
                                    type="number"
                                    step="1"
                                  />
                                </CardBody>
                              </Card>
                            </div>
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
                              <p className="text-secondary">Preço unitário:</p>
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
                            <Button outline color="primary" className="mt-2">
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
                              <p className="text-secondary">Preço unitário:</p>
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
                            <Button outline color="primary" className="mt-2">
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
                              <p className="text-secondary">Preço unitário:</p>
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
                            <Button outline color="primary" className="mt-2">
                              Precificar
                            </Button>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
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

                        <div className="finishCotacaoContainer d-flex flex-column justify-content-center align-items-center mt-5">
                          <div className="d-flex">
                            <div className="leftSection">
                              <div className="selectionTitle">
                                <Card color="transparent">
                                  <CardBody>
                                    <p>Seleção:</p>
                                  </CardBody>
                                </Card>
                              </div>

                              <div className="freteTitle">
                                <Card color="transparent">
                                  <CardBody>
                                    <p className="mt-2">Frete:</p>
                                  </CardBody>
                                </Card>
                              </div>

                              <div className="totalTitle">
                                <Card color="transparent">
                                  <CardBody>
                                    <p className="font-weight-bold">
                                      Total (à vista):
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            </div>

                            <div className="rightSection">
                              <div className="selectionPrice">
                                <Card color="transparent">
                                  <CardBody>
                                    <p>8.000,00</p>
                                  </CardBody>
                                </Card>
                              </div>

                              <div className="fretePrice">
                                <Card color="transparent">
                                  <CardBody>
                                    <Input
                                      placeholder="R$ 0"
                                      min={0}
                                      max={10000}
                                      type="text"
                                      step="1"
                                      className="mt-1"
                                    />
                                  </CardBody>
                                </Card>
                              </div>

                              <div className="totalPrice">
                                <Card color="transparent">
                                  <CardBody>
                                    <p className="font-weight-bold mt-1">
                                      8.000,00
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </div>

                          <Button color="primary">Concluir seleção</Button>
                        </div>
                      </tbody>
                    </div>
                  </Table>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapaDePrecos;
