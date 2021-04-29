import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from "reactstrap";
import { RiArrowDropDownFill } from "react-icons/ri";
import NavVertical from "./NavVertical";
import NavHorizontal from "./NavHorizontal";

const PaginaInicialCompradores: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <NavVertical />
      <NavHorizontal title={"Página inicial de compradores"} />
      <div className="vw-100 vh-100">
        <Table className="margin-top-60" hover autoCapitalize={"on"}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Obra</th>
              <th>Categorias</th>
              <th>Solicitante</th>
              <th>Solicitação</th>
              <th>Encerramento</th>
              <th>Status</th>
              <th>Itens com 1 Proposta</th>
              <th>Itens com 2 Propostas</th>
              <th>Itens com 3 Propostas</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ width: 80 }}>123ABC</td>
              <td style={{ width: 80 }}>BRAG</td>
              <td>Tintas, tubos e conexões</td>
              <td>Daniel Chaves</td>
              <td>06/03/2021</td>
              <td>07/03/2021</td>
              <td>1 Proposta</td>
              <td>4 de 4 itens</td>
              <td>4 de 12 itens</td>
              <td>1 de 11 itens</td>
              <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  <RiArrowDropDownFill />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Cancelar cotação</DropdownItem>
                  <DropdownItem>Editar cotação</DropdownItem>
                  <DropdownItem>Reabrir prazo</DropdownItem>
                  <DropdownItem>Enviar por e-mail</DropdownItem>
                  <DropdownItem>Alterar objetivo</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PaginaInicialCompradores;
