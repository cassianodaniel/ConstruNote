import React from "react";
import { Button, Table } from "reactstrap";
import NavHorizontal from "./NavHorizontal";
import NavVertical from "./NavVertical";
import { fakeUsers } from "../mock/fakeUsers";
import { UserType } from "../enums/UserType";
import { ParseUserQuotationExpirationDate } from "../helpers/ParseUserQuotationExpirationDate";
import { ParseQuotationProgress } from "../helpers/ParseQuotationProgress";
import Swal from "sweetalert2";

const PaginaInicialFornecedores: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Fornecedores"} />
      <Table className="margin-top-60" hover responsive>
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
                      <i className={"ri-star-line mr-2 yellow-star"} />
                    )}
                    {user.classification.silver === true && (
                      <i className={"ri-star-line mr-2 silver-star"} />
                    )}
                    {user.classification.bronze === true && (
                      <i className={"ri-star-line mr-2 bronze-star"} />
                    )}
                    {user.userType === UserType.PESSOAJURIDICA
                      ? "Pessoa jurídica"
                      : "Pessoa física"}
                  </td>

                  <td>
                    {user.location}
                    <i className={"ri-map-pin-2-line ml-1"} />
                  </td>
                  <td className="d-flex flex-row align-items-center">
                    {user.quotation} <i className={"ri-file-list-line ml-1"} />
                  </td>
                  <td>
                    {ParseUserQuotationExpirationDate(
                      user.quotationExpirationDate
                    )}
                  </td>
                  <td>{ParseQuotationProgress(user.quotationProgress)}</td>
                  <td>
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
                      <i className={"ri-eye-line mr-2"} />
                      {"Ver"}
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default PaginaInicialFornecedores;
