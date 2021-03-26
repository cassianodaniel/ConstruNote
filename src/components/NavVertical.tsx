import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import emblem from "./../assets/images/emblems/emblem.png";
import ScreenType from "../enuns/ScreenType";
const NavVertical: React.FC = () => {
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
          {/* <NavItem
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
                history.push(ScreenType.PAGINAINICIALCOMPRADORES);
              }}
            >
              <i className="ri-home-3-line hoverColorGray"></i>
            </NavLink>
            <span className="text-muted" style={{ fontSize: 10 }}>
              Compradores
            </span>
          </NavItem> */}

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
            <span className="text-muted" style={{ fontSize: 10 }}>
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
            <span className="text-muted" style={{ fontSize: 10 }}>
              Favoritos
            </span>
          </NavItem>

          {/* <NavItem
            id="MinhasCotacoes"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink onClick={() => {}}>
              <i className="ri-file-list-line hoverColorGray"></i>
            </NavLink>
            <span className="text-muted text-size-10" style={{ fontSize: 10 }}>
              Cotações
            </span>
          </NavItem> */}

          {/* <NavItem
            id="MinhasCotacoes"
            className="buttonsNavBottom d-flex flex-column align-items-center justify-content-center"
          >
            <NavLink onClick={() => {}}>
              <i className="ri-settings-3-line hoverColorGray"></i>
            </NavLink>
            <span className="text-muted" style={{ fontSize: 10 }}>
              Meu perfil
            </span>
          </NavItem> */}
        </Nav>
      </div>
    </div>
  );
};

export default NavVertical;
