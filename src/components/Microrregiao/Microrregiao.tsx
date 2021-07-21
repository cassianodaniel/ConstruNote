import React from "react";
import { Input, Label } from "reactstrap";

interface IMicrorregiao {
  microrregiao: string;
  pushData(value: string): void;
  id?: string;
}

const Microrregiao: React.FC<IMicrorregiao> = ({
  pushData,
  microrregiao,
  id,
}) => {
  return (
    <li>
      <Input
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          pushData(e.currentTarget.value)
        }
        type="checkbox"
        value={microrregiao}
        id={id ? id : ""}
      />
      <Label className="form-check-input-box" htmlFor={microrregiao}>
        {microrregiao}{" "}
      </Label>
    </li>
  );
};

export default Microrregiao;
