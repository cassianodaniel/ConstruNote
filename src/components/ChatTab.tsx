import React, { useState } from "react";
import {
  Input,
  InputGroupAddon,
  InputGroup,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledTooltip,
} from "reactstrap";
import { useTranslation } from "react-i18next";
// import FavoriteUsers from "./FavoriteUsers";
import classnames from "classnames";
import { useLayout } from "../contexts/LayoutContext";
const ChatTab: React.FC = () => {
  const [searchChat, setSearchChat] = useState("");
  const { setActiveTab } = useLayout();
  const { t } = useTranslation();
/*   const searchArray = (chats: any[], search: string) => {
    if (
      search.includes("@") ||
      search.includes("(") ||
      search.includes(")") ||
      search.includes("[") ||
      search.includes("]") ||
      search.includes("+") ||
      search.includes("-") ||
      search.includes("/") ||
      search.includes("?") ||
      search.includes("*") ||
      search.includes(";") ||
      search.includes(":") ||
      search.includes(",") ||
      search.includes(".") ||
      search.includes("|") ||
      search.includes("=") ||
      search.includes("!") ||
      search.includes("#") ||
      search.includes("$") ||
      search.includes("%") ||
      search.includes("¨") ||
      search.includes("&") ||
      search.includes("_") ||
      search.includes("{") ||
      search.includes("}") ||
      search.includes("º") ||
      search.includes("ª")
    ) {
      return [];
    } else {
      return chats.filter((item) => {
        return item.name?.toUpperCase().match(search.toUpperCase());
      });
    }
  }; */
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div>
        <div className="px-4 pt-4">
          <div className="user-chat-nav float-right">
            <div id="more">
              <UncontrolledDropdown className="align-self-start">
                <DropdownToggle tag="a">
                  <i className="ri-more-2-fill"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className={classnames({
                      active: "favoritemessages",
                    })}
                    onClick={() => toggleTab("favoritemessages")}
                  >
                    {t("Favorite messages")}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <UncontrolledTooltip target="more" placement="bottom">
              {t("More")}
            </UncontrolledTooltip>
          </div>
          <h4 className="mb-4">{t("Chats")}</h4>

          <div className="search-box chat-search-box">
            <InputGroup size="lg" className="mb-3 bg-light rounded-lg">
              <InputGroupAddon addonType="prepend">
                <Button
                  color="link"
                  className="text-muted pr-1 text-decoration-none"
                  type="button"
                >
                  <i className="ri-search-line search-icon font-size-18"></i>
                </Button>
              </InputGroupAddon>
              <Input
                type="text"
                value={searchChat}
                onChange={(e) => setSearchChat(e.target.value)}
                className="form-control bg-light"
                placeholder={t("Search users")}
              />
              {/* <InputGroupAddon addonType="append">
                <Button
                  color="link"
                  className="text-muted pr-1 text-decoration-none"
                  type="button"
                  onClick={toggle}
                >
                  <i className="ri-grid-fill search-icon font-size-18"></i>
                </Button>
              </InputGroupAddon> */}
            </InputGroup>
          </div>
        </div>

        {/* <FavoriteUsers /> */}

        <div className="px-2">
          <h5 className="mb-3 px-3 font-size-16">{t("Recent")}</h5>
        </div>
      </div>
    </>
  );
};

export default ChatTab;
