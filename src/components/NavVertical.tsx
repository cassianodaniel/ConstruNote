import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import emblem from "./../assets/images/emblem.png";
import ScreenType from "../enuns/ScreenType";
import { useMainBox } from "../contexts/MainBoxContext";
const NavVertical = () => {
    const { setScreen } = useMainBox();
    return(
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
                
                <NavItem id="PaginaInicial" style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <NavLink
                        onClick={() => {
                            setScreen(ScreenType.PAGINAINICIAL);
                        }}
                    >
                        <i className="ri-home-3-line hoverColorGray"></i>
                    </NavLink>
                    <span className="text-muted" style={{fontSize: 10}}>Página inicial</span>
                </NavItem>

                <NavItem id="FornecedoresFavoritos" style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <NavLink
                        onClick={() => {
                            setScreen(ScreenType.FORNECEDORESFAVORITOS);
                        }}
                    >
                        <i className="ri-star-line hoverColorGray"></i>
                    </NavLink>
                    <span className="text-muted" style={{fontSize: 10}}>Favoritos</span>
                </NavItem>


                <NavItem id="MinhasCotacoes" style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <NavLink
                        onClick={() => {
                            setScreen(ScreenType.MINHASCOTACOES);
                        }}
                    >
                        <i className="ri-file-list-line hoverColorGray"></i>
                    </NavLink>
                    <span className="text-muted" style={{fontSize: 10}}>Página inicial</span>
                </NavItem>

                <NavItem id="MinhasCotacoes" className="buttonsNavBottom" style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <NavLink
                        onClick={() => {
                            setScreen(ScreenType.MINHASCOTACOES);
                        }}
                    >
                        <i className="ri-settings-3-line hoverColorGray"></i>
                    </NavLink>
                    <span className="text-muted" style={{fontSize: 10}}>Meu perfil</span>
                </NavItem>

                {/* <Dropdown
                nav
                isOpen={dropdownOpenMobile}
                toggle={toggleMobile}
                className="profile-user-dropdown d-inline-block d-lg-none"
                >
                <DropdownToggle nav>
                    <img
                    src={avatar1}
                    alt="chatvia"
                    className="profile-user rounded-circle"
                    />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                    onClick={() => {
                        setScreen(ScreenType.MINHASCOTACOES);
                    }}
                    >
                    Profile
                    <i className="ri-profile-line float-right text-muted"></i>
                    </DropdownItem>
                    <DropdownItem
                    onClick={() => {
                        setScreen(ScreenType.MINHASCOTACOES);
                    }}
                    >
                    Settings
                    <i className="ri-settings-3-line float-right text-muted"></i>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Logout
                    <i className="ri-logout-circle-r-line float-right text-muted"></i>
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown> */}

                
            </Nav>
            </div>

           {/*  <div className="flex-lg-column d-none d-lg-block">
            <Nav className="side-menu-nav justify-content-center">
                <Dropdown
                nav
                isOpen={dropdownOpen}
                className="btn-group dropup profile-user-dropdown"
                toggle={toggle}
                >
                <DropdownToggle nav>
                    <img
                    src={avatar1}
                    alt=""
                    className="profile-user rounded-circle"
                    />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                    onClick={() => {
                        setScreen(ScreenType.MINHASCOTACOES);
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        }}
                    >
                        <i className="ri-profile-line mr-2 text-muted"></i>
                        Profile
                    </div>
                    </DropdownItem>
                    <DropdownItem
                    onClick={() => {
                        setScreen(ScreenType.MINHASCOTACOES);
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        }}
                    >
                        <i className="ri-settings-3-line mr-2 text-muted"></i>
                        Settings
                    </div>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        }}
                    >
                        <i className="ri-logout-circle-r-line mr-2 text-muted"></i>
                        Logout
                    </div>
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </Nav>
            </div> */}

            
        </div>
    )
}

export default NavVertical;
