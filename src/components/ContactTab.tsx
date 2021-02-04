import React from "react";
import {
  Button,
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { useTranslation } from "react-i18next";

const ContactTab: React.FC = () => {


  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-right">
            <div id="add-contact">
              <Button
                type="button"
                color="link"
                className="text-decoration-none text-muted font-size-18 py-0"
              >
                <i className="ri-user-add-line"></i>
              </Button>
            </div>
            <UncontrolledTooltip target="add-contact" placement="bottom">
              {t("Add Contacts")}
            </UncontrolledTooltip>
          </div>
          <h4 className="mb-4">{t("Contacts")}</h4>

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
                className="form-control bg-light "
                placeholder={t("Search users..")}
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactTab;
