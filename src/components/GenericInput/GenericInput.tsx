import React from "react";
import { Input } from "reactstrap";

interface IGenericInput {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue(value: string): void;
  maxLength?: number;
  width?: number | string;
  parentsWidth?: string; 
  height?: number | string;
  style?: object;
}

export const GenericInput: React.FC<IGenericInput> = ({
  placeholder,
  value,
  setValue,
  maxLength,
  label,
  width,
  parentsWidth,
  height,
  style,
}) => {
  const empty = value?.length === 0;
  const [isInputActive, setIsInputActive] = React.useState<boolean>(false);
  return (
    <div className={`mt-2 mb-1 d-flex flex-column ${parentsWidth ? parentsWidth : "w-100"}`}>
      {!empty && isInputActive && (
        <div className="generic-input-label">{label}</div>
      )}
      <Input
        value={value}
        placeholder={placeholder}
        style={{
          width: width && width,
          ...style
        }}
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
