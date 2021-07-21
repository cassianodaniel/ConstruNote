import React, { useRef } from "react";
import { Input } from "reactstrap";

interface IGenericInput {
  value: string;
  placeholder: string;
  setValue(value: string): void;
  formValues: string[];
  setFormValues(value: string[]): void;
}

export const GenericInput: React.FC<IGenericInput> = ({
  placeholder,
  value,
}) => {
  const inputRef = useRef(null);

  return (
    <>
      {" "}
      <Input
        innerRef={inputRef}
        value={value}
        placeholder={placeholder}
        bsSize="lg"
        className="input-value"
        onChange={() => {
          alert("Empty front engineering");
        }}
      />
    </>
  );
};
