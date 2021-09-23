import React, { ReactNode } from "react";
import "./styles.scss";
import { Button, Table } from "reactstrap";
import NavHorizontal from "../../components/NavHorizontal/NavHorizontal";
import NavVertical from "../../components/NavVertical/NavVertical";
import { fakeUsers } from "../../mock/fakeUsers";
import { UserType } from "../../enums/UserType";
import { ParseUserQuotationExpirationDate } from "../../helpers/ParseUserQuotationExpirationDate";
import { ParseQuotationProgress } from "../../helpers/ParseQuotationProgress";
import { IUser } from "../../aliases/IUser";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";
import { IoLocation } from "react-icons/io5";
import { RiBook2Line, RiShoppingCartLine } from "react-icons/ri";

const PaginaInicialFornecedores: React.FC = () => {
  const columns = [
    "Classificação",
    "Cliente",
    "Local",
    "Cotação",
    "Vencimento",
    "Pedido",
    "Detalhes",
  ];

  function getClassification(user: IUser) {
    return (
      <>
        {user.classification.gold === true && (
          <i className={"ri-star-line mr-1 yellow-star"} />
        )}

        {user.classification.silver === true && (
          <i className={"ri-star-line mr-1 silver-star"} />
        )}

        {user.classification.bronze === true && (
          <i className={"ri-star-line mr-1 bronze-star"} />
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
            ? "Pessoa jurídica"
            : "Pessoa física"
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
          type={"button"}
          color="primary"
          className="d-flex flex-row align-items-center eye-height"
          onClick={() =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Alguma coisa deu errado!",
              footer: "Nossos serviços estão fora do ar...",
            })
          }
        >
          <div>{"Ver detalhes"}</div>
        </Button>
      )
    );

    return arrayDetails[index];
  }

  const data = fakeUsers.map((user, key) => [
    [
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <div className="font-size-13">
            {getClassification(user)}
            {`${getType(key)}`}
          </div>
        </div>
      </div>,
    ],
    [
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">{`${getUsername(key)}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="locationIcon">
            <IoLocation />
          </div>
          {`${getLocation(key)}`}
        </div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="locationIcon">
            {Math.random() > 0.5 ? <RiBook2Line /> : <RiShoppingCartLine />}
          </div>
          {`${getQuotation(key)}`}
        </div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`${getDueDate(key)}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`${getOrder(key)}`}</div>
      </div>,
    ],

    [getDetails(key)],
  ]);

  const options = {
    download: false,
    search: false,
    filter: false,
    print: false,
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    textLabels: {
      body: {
        noMatch: "Desculpe, não há resultados disponíveis.",
        toolTip: "Sorteie",
      },
      pagination: {
        next: "Próxima página",
        previous: "Página anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Procurar",
        print: "Imprimir",
        viewColumns: "Ver colunas",
        filterTable: "Filtrar tabela",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Resetar",
      },
      viewColumns: {
        title: "Mostrar colunas",
        titleAria: "Mostrar/Esconder colunas",
      },
      selectedRows: {
        text: "linha(s) selecionadas",
        delete: "Deletar",
        deleteAria: "Deletar linhas selecionadas",
      },
    },
  };

  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Fornecedores"} />
      <Table
        className="margin-top-80 d-flex align-items-center justify-content-center"
        hover
        responsive
        autoCapitalize={"on"}
      >
        <div style={{ width: "90vw" }}>
          <MUIDataTable
            options={options}
            title={"Fornecedores disponíveis"}
            data={data}
            columns={columns}
          />
        </div>
      </Table>
    </>
  );
};

export default PaginaInicialFornecedores;
