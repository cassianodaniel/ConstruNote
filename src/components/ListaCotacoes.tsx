import React from 'react';
import { Link } from 'react-router-dom';

import { Table, Button } from 'reactstrap';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoIosReturnLeft } from 'react-icons/io';
import ProfilePicture from '../assets/images/emblems/emblem.png';

import { fakeUsers } from '../mock/fakeUsers';
import ScreenType from '../enums/ScreenType';

const ListaCotacoes: React.FC = () => {
  return (
    <>
      <div className="constructionsNotice card bg-secondary text-light">
        <div className="card-body d-flex justify-content-around align-items-center">
          Adicione uma obra para ver preços da sua região
          <Button outline color="primary" className="text-light">
            <IoAddCircleOutline className="mr-2" />
            Adicionar nova obra
          </Button>
        </div>
      </div>

      <div className="beforeContentTable">
        <div className="lineButtons d-flex justify-content-between align-items-center">
          <div className="backButton">
            <Link to={ScreenType.SELECAODEPRODUTOS}>
              <Button outline color="primary">
                <IoIosReturnLeft />
              </Button>
            </Link>
          </div>

          <div className="rightButtons d-flex align-items-center">
            <Button outline color="primary">
              Limpar Lista
            </Button>

            <Button outline color="primary" className="ml-2">
              Comprar sem Cotação
            </Button>
          </div>
        </div>

        <div className="lineTitle mt-5 ml-4">
          <h4>Minha Lista de cotação</h4>
        </div>
      </div>

      <Table className="margin-top-60" hover responsive autoCapitalize={'on'}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Estimativa</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {fakeUsers.map((user, key) => {
            return (
              <>
                <tr>
                  <td className="profilePictureColumn d-flex justify-content-center align-items-center">
                    <img
                      src={ProfilePicture}
                      alt="ProfilePicture"
                      width="32px"
                      height="32px"
                    />
                  </td>

                  <td className="descriptionColumn">
                    <div className="d-flex justify-content-start align-items-center">
                      Bloco Cerâmico 8 furos na horizontal - milheiro
                    </div>
                    <div className="text-secondary d-flex justify-content-start align-items-center">
                      Qualquer fabricante - Padrão: médio
                    </div>
                  </td>

                  <td className="quantityColumn">
                    <div className="card w-50 d-flex align-items-center justify-content-center">
                      <div className="card-body">31</div>
                    </div>
                  </td>

                  <td className="estimationColumn">
                    <div className="d-flex flex-column">
                      <p className="text-secondary">De: R$ 300,00</p>
                      <p className="text-secondary mb-0">Até: R$ 350,00</p>
                    </div>
                  </td>

                  <td className="editOrDeleteColumn">
                    <div className="d-flex flex-column">
                      <Button outline color="primary">
                        Editar
                      </Button>

                      <Button outline color="primary" className="mt-1">
                        Excluir
                      </Button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <div className="afterContentTable">
        <div className="lineTitle mt-5 ml-4">
          <h4>Arquivos anexados</h4>
        </div>
      </div>
    </>
  );
};

export default ListaCotacoes;
