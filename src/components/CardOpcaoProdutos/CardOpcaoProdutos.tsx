import React from "react";
import Autocomplete from "./../AutoComplete/AutoComplete";
import { IoFilter } from "react-icons/io5";
import ContainerCards from "../ContainerCards/ContainerCards";
import { Button } from "reactstrap";
import ProjetoPersonalizadoCheckbox from "../ProjetoPersonalizadoCheckbox/ProjetoPersonalizadoCheckbox";
import { useModal } from "../../contexts/ModalContext";


const CardOpcaoProdutos: React.FC = () => {
  return (
    <div className="containerSelecaoProdutos">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <Autocomplete/>
        <Button
          style={{
            height: 30,
            fontSize: 13,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          color="primary"
        >
          <IoFilter className="mr-2" />
          Filtrar
        </Button>
      </div>
      <ProjetoPersonalizadoCheckbox />
      <div className="productCard mt-4">
        <ContainerCards />
      </div>
    </div>
  );
};

export default CardOpcaoProdutos;
