import React from "react";
import { Input } from "reactstrap";
import { InputType } from "reactstrap/es/Input";
import "./styles.scss";

interface IGenericInput {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue(value: string): void;
  maxLength?: number;
  width?: number | string;
  parentsWidth?: string;
  style?: object;
  type?: InputType;
}

export const GenericInput: React.FC<IGenericInput> = ({
  placeholder,
  value,
  setValue,
  maxLength,
  width,
  parentsWidth,
  style,
  type = "text",
  label,
}) => {
  const empty = value?.length === 0;
  const [isInputActive] = React.useState<boolean>(true);
  return (
    <div
      className={`d-flex flex-column ${parentsWidth ? parentsWidth : "w-100"}`}
    >
      {(!empty || isInputActive) && label && (
        <div className="generic-input-label">{label}</div>
      )}
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        style={{
          width: width && width,
          marginTop: 5,
          marginBottom: 5,
          ...style,
        }}
        bsSize="lg"
        className="input-value"
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
      />
    </div>
  );
};
