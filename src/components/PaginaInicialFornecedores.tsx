import React, { ReactNode } from 'react';
import { Button, Table } from 'reactstrap';
import NavHorizontal from './NavHorizontal';
import NavVertical from './NavVertical';
import { fakeUsers } from '../mock/fakeUsers';
import { UserType } from '../enums/UserType';
import { ParseUserQuotationExpirationDate } from '../helpers/ParseUserQuotationExpirationDate';
import { ParseQuotationProgress } from '../helpers/ParseQuotationProgress';
import { IUser } from '../aliases/IUser';
import Swal from 'sweetalert2';

import MUIDataTable from 'mui-datatables';

const PaginaInicialFornecedores: React.FC = () => {
  const columns = [
    'Tipo',
    'Cliente',
    'Local',
    'Cotação',
    'Vencimento',
    'Pedido',
    'Detalhes',
  ];

  function getClassification(user: IUser) {
    return (
      <>
        {user.classification.gold === true && (
          <i className={'ri-star-line mr-2 yellow-star'} />
        )}

        {user.classification.silver === true && (
          <i className={'ri-star-line mr-2 silver-star'} />
        )}

        {user.classification.bronze === true && (
          <i className={'ri-star-line mr-2 bronze-star'} />
        )}
      </>
    );
  }

  function getType(index: number) {
    let arrayTypes: ReactNode[] = [];

    fakeUsers.forEach((user) =>
      arrayTypes.push(
        `${
          user.userType === UserType.PESSOAJURIDICA
            ? 'Pessoa jurídica'
            : 'Pessoa física'
        }`
      )
    );

    return arrayTypes[index];
  }

  function getUsername(index: number) {
    let arrayNames: string[] = [];

    fakeUsers.forEach((user) => arrayNames.push(user.name));

    return arrayNames[index];
  }

  function getLocation(index: number) {
    let arrayLocations: string[] = [];

    fakeUsers.forEach((user) => arrayLocations.push(user.location));

    return arrayLocations[index];
  }

  function getQuotation(index: number) {
    let arrayQuotations: string[] = [];

    fakeUsers.forEach((user) => arrayQuotations.push(user.quotation));

    return arrayQuotations[index];
  }

  function getDueDate(index: number) {
    let arrayDueDate: string[] = [];

    fakeUsers.forEach((user) => {
      arrayDueDate.push(
        ParseUserQuotationExpirationDate(user.quotationExpirationDate)
      );
    });

    return arrayDueDate[index];
  }

  function getOrder(index: number) {
    let arrayOrders: string[] = [];

    fakeUsers.forEach((user) =>
      arrayOrders.push(ParseQuotationProgress(user.quotationProgress))
    );

    return arrayOrders[index];
  }

  function getDetails(index: number) {
    let arrayDetails: ReactNode[] = [];

    fakeUsers.forEach((user) =>
      arrayDetails.push(
        <Button
          type={'button'}
          color="primary"
          className="d-flex flex-row align-items-center eye-height"
          onClick={() =>
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Alguma coisa deu errado!',
              footer: 'Nossos serviços estão fora do ar...',
            })
          }
        >
          <i className={'ri-eye-line mr-2'} />
          {'Ver'}
        </Button>
      )
    );

    return arrayDetails[index];
  }

  const data = fakeUsers.map((user, key) => [
    [getClassification(user), `${getType(key)}`],

    [`${getUsername(key)}`],

    [`${getLocation(key)}`],

    [`${getQuotation(key)}`],

    [`${getDueDate(key)}`],

    [`${getOrder(key)}`],

    [getDetails(key)],
  ]);

  return (
    <>
      <NavVertical />
      <NavHorizontal title={'Fornecedores'} />

      <Table
        className="margin-top-60 d-flex align-items-center justify-content-center"
        hover
        responsive
        autoCapitalize={'on'}
      >
        <div style={{ width: '90vw' }}>
          <MUIDataTable
            title={'Fornecedores disponíveis'}
            data={data}
            columns={columns}
          />
        </div>
      </Table>

      {/*
      <Table className="margin-top-60" hover responsive autoCapitalize={'on'}>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Local</th>
            <th>Cotação</th>
            <th>Vencimento</th>
            <th>Pedido</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {fakeUsers.map((user, key) => {
            return (
              <>
                <tr>
                  <td className="d-flex align-items-center">
                    {user.classification.gold === true && (
                      <i className={'ri-star-line mr-2 yellow-star'} />
                    )}
                    {user.classification.silver === true && (
                      <i className={'ri-star-line mr-2 silver-star'} />
                    )}
                    {user.classification.bronze === true && (
                      <i className={'ri-star-line mr-2 bronze-star'} />
                    )}
                    {user.userType === UserType.PESSOAJURIDICA
                      ? 'Pessoa jurídica'
                      : 'Pessoa física'}
                  </td>

                  <td>
                    {user.location}
                    <i className={'ri-map-pin-2-line ml-1'} />
                  </td>
                  <td className="d-flex flex-row align-items-center">
                    {user.quotation} <i className={'ri-file-list-line ml-1'} />
                  </td>
                  <td>
                    {ParseUserQuotationExpirationDate(
                      user.quotationExpirationDate
                    )}
                  </td>
                  <td>{ParseQuotationProgress(user.quotationProgress)}</td>
                  <td>
                    <Button
                      type={'button'}
                      color="primary"
                      className="d-flex flex-row align-items-center eye-height"
                      onClick={() =>
                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Alguma coisa deu errado!',
                          footer: 'Nossos serviços estão fora do ar...',
                        })
                      }
                    >
                      <i className={'ri-eye-line mr-2'} />
                      {'Ver'}
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
     */}
    </>
  );
};

export default PaginaInicialFornecedores;
