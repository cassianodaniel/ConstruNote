import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useModal } from "../../contexts/ModalContext";
import { GenericInput } from "../GenericInput/GenericInput";
import InsertPhoto from "../InsertPhoto/InsertPhoto";
import Title from "../Title/Title";

type specificItem = {
  availableToEdit?: ["quantidade", "similar", "padraoDeQualidade", "sugestao"];
  unavailableToEdit?: [
    "foto",
    "categoria",
    "descrição",
    "complemento, fabricante, unidadeDeMedida"
  ];
};
interface IProps {
  type?: specificItem;
}

const ModalDetalhesProdutoPersonalizado: React.FC<IProps> = ({}) => {
  const { modalDetalhesProdutoPersonalizado, setModalDetalhesProdutoPersonalizado } = useModal();
  const [data, setData] = useState({
    complemento: "",
    fabricante: "",
    quantidade: "",
    unidadeDeMedida: {
      embalagem: "embalagem",
      quantidade: "1",
      medida: "litro"
    }
  });
  const toggleModal = () => {
    setModalDetalhesProdutoPersonalizado(!modalDetalhesProdutoPersonalizado);
  };
  return (
    <Modal size={"md"} backdrop="static" isOpen={modalDetalhesProdutoPersonalizado} centered>
      <ModalBody>
        <InsertPhoto />
        <div className="generic-input-label mt-4">{"Descrição:"}</div>
        <Title customStyle={{marginBottom: 20}} label={"Fechadura cromada padrão médio com máquina de 55mm cromada de alavanca"}/>
        <div className="d-flex flex-row  mt-1 mb-1">
          <div
            style={{
              marginLeft: 10,
              marginBottom: 5,
              marginRight: "30%",
              width: "auto",
              whiteSpace: "nowrap",
            }}
            className="form-check d-flex flex-row align-items-center"
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              style={{
                fontStyle: "italic",
                fontWeight: "lighter",
                fontSize: 13,
                marginTop: 16,
                marginRight: 3,
                width: "auto"
              }}
              htmlFor="flexCheckDefault"
            >
              Com instalação
            </label>
          </div>
        </div>
        
        <div className="generic-input-label">{"Unidade de medida:"}</div>
        <div className="d-flex flex-row align-items-center mt-1 mb-1">
          <Input type={"select"}>
            <option value="" disabled selected>
              embalagem*
            </option>
          </Input>
          <GenericInput
            value={data.unidadeDeMedida.quantidade}
            setValue={(e) => setData({ ...data, unidadeDeMedida: { ...data.unidadeDeMedida, embalagem: e } })}
            width={"90%"}
            parentsWidth={"w-25"}
            style={{ marginLeft: 2.8 }}
          />
          <Input /* setValue={(e) => setData({ ...data, unidadeDeMedida: { ...data.unidadeDeMedida, medida: e } })} */ type={"select"}>
          <option value="" disabled selected>
            Litro
          </option>
        </Input>
        </div>
        <div className="d-flex flex-row">
          <GenericInput
            label={"Quantidade:"}
            value={data.quantidade}
            setValue={(e) => setData({ ...data, quantidade: e })}
            placeholder={"Quantidade"}
            parentsWidth={"20%"}
            style={{
              width: '90%',
              height: '40px',
            }}
          />
        </div>
        </ModalBody>
      <ModalFooter>
        <Button type="button" color="primary" onClick={toggleModal}>
          {"Adicionar"}
        </Button>
        <Button type="button" color="link" onClick={toggleModal}>
          {"Cancelar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDetalhesProdutoPersonalizado;