import React, { ReactNode } from "react";
import {
  Table,
} from "reactstrap";
import NavHorizontal from "./NavHorizontal";
import NavVertical from "./NavVertical";
import { fakeUsers } from "../mock/fakeUsers";
import { ParseUserQuotationExpirationDate } from "../helpers/ParseUserQuotationExpirationDate";
import MUIDataTable from "mui-datatables";
import { RiArrowDropDownLine } from "react-icons/ri";

const PaginaInicialCompradores: React.FC = () => {
  const columns = [
    "Código",
    "Obra",
    "Categorias",
    "Solicitante",
    "Solicitação",
    "Encerramento",
    "Status",
    "Itens com proposta",
    "Itens com 2 propostas",
    "Itens com 3 propostas",
    "Ações",
  ];

  function getCode(index: number) {
    let arrayTypes: ReactNode[] = [];

    fakeUsers.forEach(() => arrayTypes.push("109328"));

    return arrayTypes[index];
  }

  function getConstruction(index: number) {
    let arrayNames: string[] = [];

    fakeUsers.forEach(() => arrayNames.push("BRAG"));

    return arrayNames[index];
  }

  function getApplicant(index: number) {
    let arrayLocations: string[] = [];

    fakeUsers.forEach(() => arrayLocations.push("Daniel Chaves"));

    return arrayLocations[index];
  }

  function getQuotation() {
    let arrayQuotations: string[] = [];
    arrayQuotations.push("Tintas e tubos");

    return arrayQuotations;
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

  /* function getOrder(index: number) {
    let arrayOrders: string[] = [];

    fakeUsers.forEach((user) =>
      arrayOrders.push(ParseQuotationProgress(user.quotationProgress))
    );

    return arrayOrders[index];
  } */

  function getDetails(index: number) {
    let arrayDetails: ReactNode[] = [];

    fakeUsers.forEach(() =>
      arrayDetails.push(
        Math.random() > 0.5 ? (
          <div className="teste123">4/4</div>
        ) : Math.random() > 0.5 ? (
          <div className={"teste123 success"}>1/4</div>
        ) : (
          <div className="teste123 middle">2/4</div>
        )
      )
    );

    return arrayDetails[index];
  }

  const data = fakeUsers.map((user, key) => [
    [
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <div className="font-size-13">{`${getCode(key)}`}</div>
        </div>
      </div>,
    ],

    [
      <div className="d-flex flex-row">
        <div className="d-flex flex-row">{`${getConstruction(key)}`}</div>
      </div>,
    ],
    [
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">{`${getQuotation()}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`${getApplicant(key)}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`${getDueDate(key)}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`${getDueDate(key)}`}</div>
      </div>,
    ],

    [
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{`Proposta única`}</div>
      </div>,
    ],

    [getDetails(key)],

    [getDetails(key)],

    [getDetails(key)],

    <div className="ml-2">
      <RiArrowDropDownLine size={20} />
    </div>,
    /* <DropdownItem>Cancelar cotação</DropdownItem>
        <DropdownItem>Editar cotação</DropdownItem>
        <DropdownItem>Reabrir prazo</DropdownItem>
        <DropdownItem>Enviar por e-mail</DropdownItem>
        <DropdownItem>Ver propostas</DropdownItem>
        <DropdownItem>Alterar objetivo</DropdownItem> */
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
      <NavHorizontal title={"Página inicial de compradores"} />
      <Table
        className="margin-top-80 d-flex align-items-center justify-content-center"
        hover
        responsive
        autoCapitalize={"on"}
      >
        <div style={{ width: "90vw" }}>
          <MUIDataTable
            options={options}
            title={""}
            data={data}
            columns={columns}
          />
        </div>
      </Table>
    </>
  );
};

export default PaginaInicialCompradores;
