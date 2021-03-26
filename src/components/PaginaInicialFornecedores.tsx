import React from "react";
import { Button, Table } from "reactstrap";
import NavHorizontal from "./NavHorizontal";
import NavVertical from "./NavVertical";
import { IUser } from "../alias/IUser";
import { IDate } from "../alias/IDate";

const PaginaInicialFornecedores: React.FC = () => {
  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Fornecedores"} />
      <Table className="margin-top-60" hover responsive autoCapitalize={"on"}>
        <thead>
          <div className="d-flex flex-row align-items-center">
            <button className={"navigationButtons"}>Novas</button>
            <button className={"navigationButtons"}>Respondidas</button>
            <button className={"navigationButtons"}>Declinadas</button>
          </div>
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
          <tr>
            <td className="d-flex align-items-center">
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José da Coroa Grande
              <i className={"ri-map-pin-2-line ml-1"} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-file-list-line ml-1"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="d-flex flex-row align-items-center eye-height"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div className="d-flex flex-row">
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              Bananeiras <i className={"ri-map-pin-2-line ml-1"} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-shopping-cart- ml-1 line"} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              São Carlos <i className={"ri-map-pin-2-line ml-1 "} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-file-list-line ml-1 "} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              Santo Antônio <i className={"ri-map-pin-2-line ml-1 "} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-file-list-line ml-1 "} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              Campina Grande
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart- ml-1 line"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              Araraquara
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart- ml-1 line"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart- ml-1 line"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José da Coroa Grande
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart- ml-1 line"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              Bananeiras <i className={"ri-map-pin-2-line ml-1 "} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-file-list-line ml-1 "} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              São Carlos <i className={"ri-map-pin-2-line ml-1 "} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-file-list-line ml-1 "} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <i className={"ri-star-line mr-2 silver-star"} />
                Órgão público
              </div>
            </td>
            <td>
              Santo Antônio <i className={"ri-map-pin-2-line ml-1 "} />{" "}
            </td>
            <td className="d-flex flex-row align-items-center">
              {" "}
              JK32LO1 <i className={"ri-file-list-line ml-1"} />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              Campina Grande
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-file-list-line ml-1"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              Araraquara
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-file-list-line ml-1 "} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart-line  ml-1"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart-line ml-1"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={"ri-star-line mr-2 yellow-star"} />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i className={"ri-map-pin-2-line ml-1 "} />
            </td>
            <td className="d-flex flex-row align-items-center">
              J43OIJ2 <i className={"ri-shopping-cart-line ml-1"} />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                className="eye-height d-flex flex-row align-items-center"
              >
                <i className={"ri-eye-line mr-2"} />
                {"Ver"}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PaginaInicialFornecedores;
