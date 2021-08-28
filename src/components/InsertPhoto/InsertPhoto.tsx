import React from "react";
import { RiCamera2Fill } from "react-icons/ri";
import "./InsertPhoto.scss";

const InsertPhoto: React.FC = () => {
  return (
    <div className="containerInsertPhoto">
      <div className="insertPhotoButton">
        <div style={{ marginTop: 2 }}>
          <RiCamera2Fill />
        </div>
        <div className="ml-1 mt-1">Inserir foto (opcional)</div>
      </div>
    </div>
  );
};

export default InsertPhoto;
