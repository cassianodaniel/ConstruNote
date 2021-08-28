import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useModal } from "../../contexts/ModalContext";
import { GenericInput } from "../GenericInput/GenericInput";
import InsertPhoto from "../InsertPhoto/InsertPhoto";

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

const ModalDetalhesProduto: React.FC<IProps> = ({}) => {
  const { modalDetalhesProduto, setModalDetalhesProduto } = useModal();
  const [data, setData] = useState({
    complemento: "",
    fabricante: "",
    quantidade: "",
    unidadeDeMedida: {
      tipo: "embalagem",
      numeral: "1",
      medida: "litro"
    }
  });
  const toggleModal = () => {
    setModalDetalhesProduto(!modalDetalhesProduto);
  };
  return (
    <Modal size={"md"} backdrop="static" isOpen={modalDetalhesProduto} centered>
      <ModalHeader
        tag="h4"
        className="modal-title font-size-16 p4"
        toggle={() => toggleModal()}
      >
        {
          "Fechadura cromada padrão médio com máquina de 55mm cromada de alavanca"
        }
      </ModalHeader>
      <ModalBody>
        <InsertPhoto />
        <Input type={"select"}>
          <option value="" disabled selected>
            Selecione a categoria do produto*
          </option>
        </Input>
        <GenericInput
          label={"Complemento"}
          value={data.complemento}
          setValue={(e) => setData({ ...data, complemento: e })}
          placeholder={"Complemento (se necessário)"}
        />
        <div className="d-flex flex-row">
          <GenericInput
            label={"Fabricante"}
            value={data.fabricante}
            setValue={(e) => setData({ ...data, fabricante: e })}
            placeholder={"Fabricante"}
          />
          <div
            style={{
              marginLeft: 10,
              marginBottom: 5,
              width: "30%",
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
                marginTop: 10,
              }}
              htmlFor="flexCheckDefault"
            >
              Ou similar
            </label>
          </div>
        </div>
        
        <Input type={"select"}>
            <option value="" disabled selected>
              embalagem*
            </option>
          </Input>
        <div className="d-flex flex-row align-items-center">
          <GenericInput
            value={data.unidadeDeMedida.numeral}
            setValue={(e) => setData({ ...data, unidadeDeMedida: { ...data.unidadeDeMedida, tipo: e } })}
            placeholder={"Embalagem"}
            width={"90%"}
            style={
              {
                height: "39.54px",
                marginBottom: "4.5px"
              }
            }
            parentsWidth={"w-25"}
          />
          <Input type={"select"}>
            <option value="" disabled selected>
              Litro*
            </option>
          </Input>
        </div>
        <GenericInput
          label={"Quantidade de itens"}
          value={data.quantidade}
          setValue={(e) => setData({ ...data, quantidade: e })}
          placeholder={"Quantidade de itens"}
          width={"100%"}
        />
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

export default ModalDetalhesProduto;
