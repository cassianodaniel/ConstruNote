import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import classnames from "classnames";
import { useLayout } from "./../contexts/LayoutContext";
import { useTranslation } from "react-i18next";
import logo from "./../assets/images/logo.png";
import avatar1 from "./../assets/images/users/avatar-1.jpg";
import usFlag from "./../assets/images/flags/us.jpg";
/* import spain from "./../assets/images/flags/spain.jpg";
import germany from "./../assets/images/flags/germany.jpg";
import italy from "./../assets/images/flags/italy.jpg";
import russia from "./../assets/images/flags/russia.jpg"; */
import brazil from "./../assets/images/flags/brazil.png";
// import ScreenType from "../enuns/ScreenType";
// import { useMainBox } from "../contexts/MainBoxContext";

const LeftSidebarMenu: React.FC = () => {
  const { activeTab, setActiveTab } = useLayout();
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);
  const [lng, setlng] = useState("English");
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
  const toggleMobile = () => setDropdownOpenMobile(!dropdownOpenMobile);
  const logout = () => {
    localStorage.removeItem("authorization");
    localStorage.setItem("logout", "true");
    // eslint-disable-next-line no-restricted-globals
    location.href = `https://${location.hostname}/squad-v2/logout`;
  };
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  // const { setScreen } = useMainBox();
  const changeLanguageAction = (lng: string) => {
    if (lng === "sp") setlng("Spanish");
    else if (lng === "gr") setlng("German");
    else if (lng === "rs") setlng("Russian");
    else if (lng === "it") setlng("Italian");
    else if (lng === "eng") setlng("English");
    else if (lng === "pt") setlng("Portuguese");
  };

  return (
    <React.Fragment>
      <div className="side-menu flex-lg-column">
        {/* LOGO logo*/}
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="logo" height="30" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logo} alt="logo" height="30" />
            </span>
          </Link>

          {/* <UncontrolledDropdown className="align-self-start">
        <DropdownToggle tag="a">
          <i className="ri-more-2-fill"></i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={}>
            Favorite messages
            <i className="ri-file-copy-line float-right text-muted"></i>
          <DropdownItem/>
        <DropdownMenu/>
      <UncontrolledDropdown/> */}
        </div>
        {/* end navbar-brand-box  */}

        {/* Start side-menu nav */}
        <div className="flex-lg-column my-auto">
          <Nav
            pills
            className="side-menu-nav justify-content-center"
            role="tablist"
          >
            <NavItem id="Chats">
              <NavLink
                id="pills-chats-tab"
                className={classnames({ active: activeTab === "chats" })}
                onClick={() => {
                  toggleTab("chats");
                }}
              >
                <i className="ri-message-3-line"></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target="Chats" placement="top">
              {t("Chats")}
            </UncontrolledTooltip>

            {/* <NavItem id="callhistory">
              <NavLink
                id="pills-callhistory-tab"
                className={classnames({ active: activeTab === "callhistory" })}
                onClick={() => {
                  toggleTab("callhistory");
                  setScreen(ScreenType.CALL_MANAGER);
                }}
              >
                <i className="ri-phone-line"></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target="callhistory" placement="top">
              {t("Call History")}
            </UncontrolledTooltip> */}

            <NavItem id="Contacts">
              <NavLink
                id="pills-contacts-tab"
                className={classnames({ active: activeTab === "contacts" })}
                onClick={() => {
                  toggleTab("contacts");
                }}
              >
                <i className="ri-contacts-line"></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target="Contacts" placement="top">
              {t("Contacts")}
            </UncontrolledTooltip>
            <NavItem id="Groups">
              <NavLink
                id="pills-groups-tab"
                className={classnames({ active: activeTab === "groups" })}
                onClick={() => {
                  toggleTab("groups");
                }}
              >
                <i className="ri-group-line"></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target="Groups" placement="top">
              {t("Groups")}
            </UncontrolledTooltip>
            <NavItem id="Conferences">
              <NavLink
                id="pills-conferences-tab"
                className={classnames({ active: activeTab === "conferences" })}
                onClick={() => {
                  toggleTab("conferences");
                }}
              >
                <i className="ri-group-2-line"></i>
              </NavLink>
            </NavItem>
            <UncontrolledTooltip target="Conferences" placement="top">
              {t("Conferences")}
            </UncontrolledTooltip>

            <NavItem id="Settings">
              <NavLink
                id="pills-setting-tab"
                className={classnames({ active: activeTab === "settings" })}
                onClick={() => {
                  toggleTab("settings");
                }}
              >
                <i className="ri-settings-2-line"></i>
              </NavLink>
            </NavItem>

            <UncontrolledTooltip target="Settings" placement="top">
              {t("Settings")}
            </UncontrolledTooltip>
            <Dropdown
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
                    toggleTab("profile");
                  }}
                >
                  {t("Profile")}{" "}
                  <i className="ri-profile-line float-right text-muted"></i>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    toggleTab("settings");
                  }}
                >
                  {t("Settings")}{" "}
                  <i className="ri-settings-3-line float-right text-muted"></i>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                  {t("Logout")}{" "}
                  <i className="ri-logout-circle-r-line float-right text-muted"></i>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
        {/* end side-menu nav */}

        <div className="flex-lg-column d-none d-lg-block">
          <Nav className="side-menu-nav justify-content-center">
            <Dropdown
              nav
              direction="up"
              isOpen={dropdownOpen2}
              className="btn-group dropup profile-user-dropdown"
              toggle={toggle2}
            >
              <DropdownToggle nav>
                <i className="ri-global-line"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => changeLanguageAction("eng")}
                  active={lng === "English"}
                >
                  <img src={usFlag} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("English")}</span>
                </DropdownItem>

                {/* <DropdownItem
                  onClick={() => changeLanguageAction("sp")}
                  active={lng === "Spanish"}
                >
                  <img src={spain} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("Spanish")}</span>
                </DropdownItem>

                <DropdownItem
                  onClick={() => changeLanguageAction("gr")}
                  active={lng === "German"}
                >
                  <img src={germany} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("German")}</span>
                </DropdownItem>

                <DropdownItem
                  onClick={() => changeLanguageAction("it")}
                  active={lng === "Italian"}
                >
                  <img src={italy} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("Italian")}</span>
                </DropdownItem>
 */}
                <DropdownItem
                  onClick={() => changeLanguageAction("pt")}
                  active={lng === "Portuguese"}
                >
                  <img src={brazil} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("Portuguese")}</span>
                </DropdownItem>

                {/* <DropdownItem
                  onClick={() => changeLanguageAction("rs")}
                  active={lng === "Russian"}
                >
                  <img src={russia} alt="user" className="mr-1" height="12" />{" "}
                  <span className="align-middle">{t("Russian")}</span>
                </DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
            {/* <NavItem>
              <NavLink
                id="light-dark"
                target="_blank"
                href="//chatvia-light.react.themesbrand.com/"
              >
                <i className="ri-sun-line theme-mode-icon"></i>
              </NavLink>
              <UncontrolledTooltip target="light-dark" placement="right">
                Dark / Light Mode
              </UncontrolledTooltip>
            </NavItem> */}
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
                    toggleTab("profile");
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
                    {t("Profile")}{" "}
                  </div>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    toggleTab("settings");
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
                    {t("Settings")}{" "}
                  </div>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <i className="ri-logout-circle-r-line mr-2 text-muted"></i>
                    {t("Logout")}{" "}
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSidebarMenu;
