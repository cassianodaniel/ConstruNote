import React from "react";
import { Button, Table } from "reactstrap";

const PaginaInicialFornecedores = () => {
  return (
    <>
      <div></div>
      <Table hover responsive autoCapitalize={"on"}>
        <thead>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => alert("Novas")}
              className={"p-2"}
              style={{
                position: "relative",
                fontWeight: "lighter",
                backgroundColor: "beige",
                border: 0,
                borderRadius: 14,
              }}
            >
              Novas
            </button>
            <button
              onClick={() => alert("Dec li")}
              className={"p-2"}
              style={{
                position: "relative",
                fontWeight: "lighter",
                backgroundColor: "transparent",
                border: 0,
              }}
            >
              Respondidas
            </button>
            <button
              onClick={() => alert("Não respondidas")}
              className={"p-2"}
              style={{
                fontWeight: "lighter",
                backgroundColor: "transparent",
                border: 0,
              }}
            >
              Declinadas
            </button>
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
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José da Coroa Grande
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              Bananeiras{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              São Carlos{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              Santo Antônio{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              Campina Grande
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              Araraquara
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José da Coroa Grande
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              Bananeiras{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              São Carlos{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <i
                  className={"ri-star-line mr-2"}
                  style={{ color: "#9c9494" }}
                />
                Órgão público
              </div>
            </td>
            <td>
              Santo Antônio{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />{" "}
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              JK32LO1{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />{" "}
            </td>
            <td>04/02/2021</td>
            <td>100%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              Campina Grande
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              Araraquara
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-file-list-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
              <i
                className={"ri-star-line mr-2"}
                style={{
                  color: "#d4d400",
                }}
              />
              Pessoa jurídica
            </td>

            <td>
              São José do Rio Preto
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-map-pin-2-line"}
              />
            </td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              J43OIJ2{" "}
              <i
                style={{ marginLeft: 4, color: "primary" }}
                className={"ri-shopping-cart-line"}
              />
            </td>
            <td>13/06/2021</td>
            <td>50%</td>
            <td>
              <Button
                type={"button"}
                color="primary"
                style={{
                  height: 23,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
