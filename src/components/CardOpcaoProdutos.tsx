import React from 'react';

import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from 'reactstrap';

import { IoFilter } from 'react-icons/io5';

import ContainerCards from './ContainerCards';

const CardOpcaoProdutos: React.FC = () => {
  return (
    <div className="containerSelecaoProdutos">
      <div className="searchProduct">
        <div className="d-flex searchProduct-input-group">
          <InputGroup>
            <Input
              placeholder="Descreva aqui o produto"
              bsSize="lg"
              className="input-search-products"
            />
            <InputGroupAddon addonType="append">
              <InputGroupText className="input-group-text">
                <i className="ri-search-2-line hoverColorGray"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="searchProductCheckBox ml-4 mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="searchProductCheck"
          />
          <label className="form-check-label" htmlFor="searchProductCheck">
            Produto personalizado (anexar projeto)
          </label>
        </div>
      </div>

      <div className="f-flex flex-column cardsContainer mt-5">
        <div className="filterProductCards">
          <Button outline color="primary">
            <IoFilter className="mr-2" />
            Filtrar
          </Button>
        </div>
        <div className="productCard mt-2">
          <ContainerCards />
        </div>
      </div>
    </div>
  );
};

export default CardOpcaoProdutos;
