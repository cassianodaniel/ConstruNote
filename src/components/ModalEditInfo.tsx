import React, { useEffect, useRef } from "react";
import { Formik, Form as FormFormik, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useModal } from "./../contexts/ModalContext";
import {
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  Button,
  ModalFooter,
} from "reactstrap";

interface IValue {
  name: string;
  email: string;
}

const ModalEditInfo: React.FC = () => {
  const { t } = useTranslation();
  const { showModalEditInfo, setShowModalEditInfo } = useModal();

  const initialValues: IValue = {
    name: "",
    email: "user.email",
  };

  const onSubmit = (data: IValue) => {
    setShowModalEditInfo(false);
  };

  const close = () => setShowModalEditInfo(false);

  const validations = yup.object().shape({
    name: yup
      .string()
      .required(t("The field is required"))
      .min(3, t("The field must be at least 3 characters long")),
    email: yup
      .string()
      .required(t("The field is required"))
      .email(t("The field must be an email")),
  });

  const inputName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputName.current?.focus(), 500);
  }, [showModalEditInfo]);

  return (
    <Modal backdrop="static" isOpen={showModalEditInfo} centered>
      <ModalHeader toggle={close}>Edit personal info</ModalHeader>
      <ModalBody>
        <CardBody>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validations}
          >
            <FormFormik>
              <div className="form-group">
                <label>{t("Name")}</label>
                <Field
                  innerRef={inputName}
                  name="name"
                  className="form-control"
                  placeholder={t("Name")}
                />
                <ErrorMessage
                  component="small"
                  name="name"
                  className="form-text text-danger"
                />
              </div>
              <div className="form-group">
                <label>{t("Email")}</label>
                <Field
                  name="email"
                  className="form-control"
                  placeholder={t("Email")}
                />
                <ErrorMessage
                  component="small"
                  name={t("Email")}
                  className="form-text text-danger"
                />
              </div>
              <ModalFooter className="border-0">
                <Button color="default" onClick={close}>
                  {t("Close")}
                </Button>
                <Button type="submit" color="primary">
                  {t("Confirm")}
                </Button>
              </ModalFooter>
            </FormFormik>
          </Formik>
        </CardBody>
      </ModalBody>
    </Modal>
  );
};

export default ModalEditInfo;
