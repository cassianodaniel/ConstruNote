import * as React from 'react';
import { Input } from 'reactstrap';

interface IGenericInput {
  value: string;
  placeholder: string;
  setValue(value: string): void;
  formValues: string[];
  setFormValues(value: string[]): void;
}

export const GenericInput: React.FC<IGenericInput> = ({
  placeholder,
  setFormValues,
  formValues,
  value,
  setValue,
}) => {
  const inputRef = React.useRef(null);

  const registerField = React.useCallback(() => {
    setFormValues([...formValues, value]);
  }, [formValues, setFormValues, value]);

  React.useEffect(() => {
    registerField();
  }, [formValues, registerField]);
  return (
    <>
      {' '}
      <Input
        innerRef={inputRef}
        value={value}
        placeholder={placeholder}
        bsSize="lg"
        className="input-value"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
