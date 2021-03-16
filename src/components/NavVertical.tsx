import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import emblem from "./../assets/images/emblem.png";
import ScreenType from "../enuns/ScreenType";
import { useMainBox } from "../contexts/MainBoxContext";
const NavVertical: React.FC = () => {
  const { setScreen, screen } = useMainBox();
  if (
    screen === ScreenType.CADASTROS ||
    screen === ScreenType.CADASTROSFISICA ||
    screen === ScreenType.CADASTROSFORNECEDOR ||
    screen === ScreenType.CADASTROSJURIDICA ||
    screen === ScreenType.CADASTROFUNCIONARIOEMPRESAFORNECEDORA ||
    screen === ScreenType.PRECADASTROEMPRESAFORNECEDORA ||
    screen === ScreenType.CADASTROFUNCIONARIOEMPRESACOMPRADORA ||
    screen === ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR
  ) {
    return <></>;
  } else {
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
                  setScreen(ScreenType.PAGINAINICIALCOMPRADORES);
                }}
              >
                <i className="ri-home-3-line hoverColorGray"></i>
              </NavLink>
              <span className="text-muted" style={{ fontSize: 10 }}>
                Pág. in. comp.
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
                  setScreen(ScreenType.PAGINAINICIALFORNECEDORES);
                }}
              >
                <i className="ri-home-3-line hoverColorGray"></i>
              </NavLink>
              <span className="text-muted" style={{ fontSize: 10 }}>
                Pág. in. forn.
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
                  setScreen(ScreenType.FORNECEDORESFAVORITOS);
                }}
              >
                <i className="ri-star-line hoverColorGray"></i>
              </NavLink>
              <span className="text-muted" style={{ fontSize: 10 }}>
                Favoritos
              </span>
            </NavItem>

            <NavItem
              id="MinhasCotacoes"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink
                onClick={() => {
                  /* setScreen(ScreenType.MINHASCOTACOES); */
                }}
              >
                <i className="ri-file-list-line hoverColorGray"></i>
              </NavLink>
              <span className="text-muted" style={{ fontSize: 10 }}>
                Cotações
              </span>
            </NavItem>

            <NavItem
              id="MinhasCotacoes"
              className="buttonsNavBottom"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink
                onClick={() => {
                  /* setScreen(ScreenType.MINHASCOTACOES); */
                }}
              >
                <i className="ri-settings-3-line hoverColorGray"></i>
              </NavLink>
              <span className="text-muted" style={{ fontSize: 10 }}>
                Meu perfil
              </span>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
};

export default NavVertical;
