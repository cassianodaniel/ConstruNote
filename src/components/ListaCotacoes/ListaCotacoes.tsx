import React from "react";
import { Link } from "react-router-dom";

import { Table, Button } from "reactstrap";
import ProfilePicture from "../../assets/images/emblems/emblem.png";

import { fakeUsers } from "../../mock/fakeUsers";
import ScreenType from "../../enums/ScreenType";

const ListaCotacoes: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="lineButtons d-flex justify-content-between align-items-center">
          <div className="backButton">
            <Link to={ScreenType.SELECAODEPRODUTOS}>
              <Button outline className="bg-primary text-light">
                + Adicionar nova obra para ver preços da sua região
              </Button>
            </Link>
          </div>

          <div className="rightButtons d-flex align-items-center">
            <Button outline color="primary">
              Limpar lista de cotações
            </Button>

            <Button outline color="primary" className="ml-2">
              Comprar sem cotação
            </Button>
          </div>
        </div>
      </div>

      <Table hover responsive autoCapitalize={"on"} className="mt-3">
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
                      Bloco cerâmico de 8 furos na horizontal/milheiro
                    </div>
                    <div className="text-secondary font-size-12 d-flex justify-content-start align-items-center">
                      Qualquer fabricante
                    </div>
                    <div className="text-secondary font-size-12 d-flex justify-content-start align-items-center">
                      Padrão médio
                    </div>
                  </td>

                  <td className="quantityColumn">
                    <div className="card w-50 d-flex align-items-center justify-content-center">
                      <div className="card-body">31</div>
                    </div>
                  </td>

                  <td className="estimationColumn">
                    <div className="d-flex flex-column">
                      <p className="text-secondary text-secondary font-size-12 ">
                        De: R$ 300,00
                      </p>
                      <p className="text-secondary mb-0 text-secondary font-size-12 ">
                        Até: R$ 350,00
                      </p>
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
        <div className="lineTitle mt-4 ml-4 mb-2">
          <h4>Arquivos anexados</h4>
          <div className="font-size-12 text-muted mt-1">
            Não há arquivos anexados.
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaCotacoes;
