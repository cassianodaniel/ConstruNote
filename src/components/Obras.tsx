import React from 'react';
import { Link } from 'react-router-dom';

import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';
import ScreenType from '../enums/ScreenType';

import { RiAddCircleLine } from 'react-icons/ri';
import { ImLocation } from 'react-icons/im';
import { FcHome } from 'react-icons/fc';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { IoIosReturnLeft } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Button, Card, CardBody, CardTitle, Table } from 'reactstrap';

const Obras: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Obras'} />

      <div className="w-100 h-100 margin-top-60">
        <div className="pageContainer p-4 shadow-sm">
          <div className="constructionContainer d-flex flex-column">
            <div className="linesConstructionContainer">
              <div className="constructionFirstLine justify-content-end">
                <ImLocation className="mt-1" />
                <div className="ml-1 constructionTitle justify-content-end">
                  Construção da quadra poliesportiva do Cabo de Sto Agostinho
                </div>
              </div>

              <div className="constructionSecondLine mt-2 d-flex flex-column justify-content-end align-items-end">
                <div className="constructionSubtitle">
                  <FcHome className="mb-1 mr-1" />
                  {''}
                  Campina Grande
                </div>

                <div className="mt-1 changeConstruction">
                  <a href={ScreenType.OBRAS}>
                    <HiOutlineSwitchHorizontal className="mb-1 mr-1" />
                    {''}
                    Trocar de obra
                  </a>
                </div>
              </div>

              <div className="buttonNewConstruction mt-4 d-flex justify-content-end">
                <Button color="primary">
                  <RiAddCircleLine className="mr-1 mb-1" />
                  Nova obra
                </Button>
              </div>
            </div>

            <div className="cardContainer margin-top-60">
              <Card color="white">
                <CardBody>
                  <div className="lineBackButton d-flex justify-content-start align-items-center">
                    <Link to={ScreenType.OBRAS}>
                      <Button outline color="primary">
                        <IoIosReturnLeft /> Voltar
                      </Button>
                    </Link>
                  </div>
                </CardBody>

                <CardBody className="title-button mt-3">
                  <CardTitle
                    color="secondary"
                    className="mt-2 text-body d-flex justify-content-between align-items-center"
                  >
                    <h3>Detalhamento de despesas</h3>
                    <div className="buttonFilter">
                      <Button outline color="primary">
                        <IoFilter className="mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </CardTitle>
                </CardBody>

                <CardBody className="table mt-3">
                  <Table
                    className="margin-top-60"
                    hover
                    responsive
                    autoCapitalize={'on'}
                  >
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Código</th>
                        <th>Vendedor</th>
                        <th>Valor</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tr>
                      <td className="dataColumn">02/06/2018</td>

                      <td className="codeIdColumn link-color">52sd2s929c29</td>

                      <td className="sellerColumn d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          Armazém Ribeiro - Materiais de Constução
                        </div>
                        <div className="text-secondary d-flex justify-content-start align-items-center">
                          Mercenaria e Serralheria
                        </div>
                      </td>

                      <td className="priceColumn">
                        <div className="card">
                          <div className="card-body mx-auto">10.000,00</div>
                        </div>
                      </td>

                      <td className="moreOptionsIconColumn">
                        <div className="finishCotacaoContainer mt-3">
                          <Button outline color="primary">
                            <BsThreeDotsVertical />
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="dataColumn">02/06/2018</td>

                      <td className="codeIdColumn link-color">52sd2s929c29</td>

                      <td className="sellerColumn d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          Armazém Ribeiro - Materiais de Constução
                        </div>
                        <div className="text-secondary d-flex justify-content-start align-items-center">
                          Mercenaria e Serralheria
                        </div>
                      </td>

                      <td className="priceColumn">
                        <div className="card">
                          <div className="card-body mx-auto">10.000,00</div>
                        </div>
                      </td>

                      <td className="moreOptionsIconColumn">
                        <div className="finishCotacaoContainer mt-3">
                          <Button outline color="primary">
                            <BsThreeDotsVertical />
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="dataColumn">02/06/2018</td>

                      <td className="codeIdColumn link-color">52sd2s929c29</td>

                      <td className="sellerColumn d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          Armazém Ribeiro - Materiais de Constução
                        </div>
                        <div className="text-secondary d-flex justify-content-start align-items-center">
                          Mercenaria e Serralheria
                        </div>
                      </td>

                      <td className="priceColumn">
                        <div className="card">
                          <div className="card-body mx-auto">10.000,00</div>
                        </div>
                      </td>

                      <td className="moreOptionsIconColumn">
                        <div className="finishCotacaoContainer mt-3">
                          <Button outline color="primary">
                            <BsThreeDotsVertical />
                          </Button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="dataColumn">02/06/2018</td>

                      <td className="codeIdColumn link-color">52sd2s929c29</td>

                      <td className="sellerColumn d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          Armazém Ribeiro - Materiais de Constução
                        </div>
                        <div className="text-secondary d-flex justify-content-start align-items-center">
                          Mercenaria e Serralheria
                        </div>
                      </td>

                      <td className="priceColumn">
                        <div className="card">
                          <div className="card-body mx-auto">10.000,00</div>
                        </div>
                      </td>

                      <td className="moreOptionsIconColumn">
                        <div className="finishCotacaoContainer mt-3">
                          <Button outline color="primary">
                            <BsThreeDotsVertical />
                          </Button>
                        </div>
                      </td>
                    </tr>
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

export default Obras;
