import React from "react";
import { Input } from "reactstrap";

interface IGenericInput {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue(value: string): void;
  maxLength?: number;
}

export const GenericInput: React.FC<IGenericInput> = ({
  placeholder,
  value,
  setValue,
  maxLength,
  label,
}) => {
  const empty = value?.length === 0;
  const [isInputActive, setIsInputActive] = React.useState<boolean>(false);
  return (
    <div className="d-flex flex-column w-100">
      {(!empty || isInputActive) && (
        <div className="generic-input-label">{label}</div>
      )}
      <Input
        value={value}
        placeholder={placeholder}
        bsSize="lg"
        className="input-value"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setIsInputActive(true);
        }}
        onBlur={() => {
          setIsInputActive(false);
        }}
        maxLength={maxLength}
      />
    </div>
  );
};
