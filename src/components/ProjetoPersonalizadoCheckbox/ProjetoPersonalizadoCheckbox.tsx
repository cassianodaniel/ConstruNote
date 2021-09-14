import React from 'react';
import { useModal } from '../../contexts/ModalContext';


const ProjetoPersonalizadoCheckbox: React.FC = () => {  
    const {isProdutoPersonalizado, setIsProdutoPersonalizado} = useModal();
     return (
        <div className="d-flex flex-row  mt-1 mb-1">
          <div
            style={{
              marginLeft: 10,
              marginBottom: 5,
              marginRight: "30%",
              width: "auto",
              whiteSpace: "nowrap",
            }}
            className="form-check d-flex flex-row align-items-center"
          >
            <input
              className="form-check-input"
              type="checkbox"
              aria-selected={isProdutoPersonalizado}
              onClick={() => {
                  setIsProdutoPersonalizado(!isProdutoPersonalizado);
                }}
              id="flexCheckDefault"
            />
            <label
              style={{
                fontStyle: "italic",
                fontWeight: "lighter",
                fontSize: 13,
                marginTop: 16,
                marginRight: 3,
                width: "auto"
              }}
              htmlFor="flexCheckDefault"
            >
              produto personalizado (anexar projeto)
            </label>
          </div>
        </div>
    )
};

export default ProjetoPersonalizadoCheckbox;