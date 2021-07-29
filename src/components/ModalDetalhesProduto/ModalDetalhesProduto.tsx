import React from "react";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useModal } from "../../contexts/ModalContext";

const ModalDetalhesProduto = () => {
    const { modalDetalhesProduto, setModalDetalhesProduto } = useModal();
    const toggleModal = () => {
        setModalDetalhesProduto(!modalDetalhesProduto);
    };
    return(
        <Modal
        size={"md"}
        backdrop="static"
        isOpen={modalDetalhesProduto}
        centered
      >
        <ModalHeader
          tag="h4"
          className="modal-title font-size-16 p4"
          toggle={() => toggleModal()}
        >
          {("Do you want to change the group name?")}
        </ModalHeader>
        <ModalBody>
          <div>
            <Input
              onChange={(e) => {}}
              placeholder={"Quantidades"}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            color="primary"
            onClick={() => {}}
          >
            {("Confirm")}
          </Button>
          <Button
            type="button"
            color="link"
            onClick={() => {}}
          >
            {("Cancel")}
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default ModalDetalhesProduto;
