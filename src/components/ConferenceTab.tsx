import React, { useState } from "react";
import {
  Button,
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { useTranslation } from "react-i18next";

//components

//alias

const ConferenceTab: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => {
    setShowModal(!showModal);
  };

  const searchArray = (conferences: any[], search: string) => {
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
      return conferences.filter((item) => {
        return item.name.toUpperCase().match(search.toUpperCase());
      });
    }
  };

  return (
    <div>
      <div className="p-4">
        <div className="user-chat-nav float-right">
          <div id="create-conference">
            <Button
              onClick={toggle}
              type="button"
              color="link"
              className="text-decoration-none text-muted font-size-18 py-0"
            >
              <i className="ri-add-line mr-1"></i>
            </Button>
          </div>
          <UncontrolledTooltip target="create-conference" placement="bottom">
            {t("Create conference")}
          </UncontrolledTooltip>
        </div>

        <h4 className="mb-4">{t("Conferences")}</h4>

        <div className="search-box chat-search-box">
          <InputGroup size="lg" className="bg-light rounded-lg">
            <InputGroupAddon addonType="prepend">
              <Button
                color="link"
                className="text-decoration-none text-muted pr-1"
                type="button"
              >
                <i className="ri-search-line search-icon font-size-18"></i>
              </Button>
            </InputGroupAddon>
            <Input
              type="text"
              className="form-control bg-light"
              placeholder={t("Search conferences...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default ConferenceTab;
