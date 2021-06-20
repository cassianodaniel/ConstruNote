import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import emblem from "./../assets/images/emblems/emblem.png";
import ScreenType from "../enums/ScreenType";
import { useStateContext } from "../contexts/StateContext";

const NavVertical: React.FC = () => {
  const { setMoreOptions, moreOptions } = useStateContext();
  const history = useHistory();
  return (
    <div className="side-menu flex-lg-column">
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src={emblem} alt="emblem" height="30" />
          </span>
        </Link>
      </div>

      <div className="flex-lg-column my-auto">
        <Nav
          pills
          className="side-menu-nav justify-content-center"
          role="tablist"
        >
          <NavItem
            id="SelecaoDeProdutos"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink
              onClick={() => {
                history.push(ScreenType.SELECAODEPRODUTOS);
              }}
            >
              <i className="ri-search-2-line hoverColorGray"></i>
            </NavLink>
            <span className="text-center text-muted" style={{ fontSize: 10 }}>
              Produtos
            </span>
          </NavItem>

          <NavItem
            id="PaginaInicial"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink
              onClick={() => {
                history.push(ScreenType.PAGINAINICIALFORNECEDORES);
              }}
            >
              <i className="ri-home-3-line hoverColorGray"></i>
            </NavLink>
            <span className="text-center text-muted" style={{ fontSize: 10 }}>
              Fornecedores
            </span>
          </NavItem>

          <NavItem
            id="FornecedoresFavoritos"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink
              onClick={() => {
                history.push(ScreenType.FORNECEDORESFAVORITOS);
              }}
            >
              <i className="ri-star-line hoverColorGray"></i>
            </NavLink>
            <span className="text-center text-muted" style={{ fontSize: 10 }}>
              Favoritos
            </span>
          </NavItem>

          <NavItem
            id="more"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink
              onClick={() => {
                setMoreOptions(!moreOptions);
              }}
            >
              <i className="ri-more-2-line hoverColorGray"></i>
            </NavLink>
            {moreOptions && <div>Dropdown</div>}
            {/* “Obras”, “Equipe” e “Fornecedores" */}
            <span className="text-center text-muted" style={{ fontSize: 10 }}>
              Mais opções
            </span>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default NavVertical;
