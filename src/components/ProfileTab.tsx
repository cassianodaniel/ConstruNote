import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
} from "reactstrap";

//Import components
import CustomCollapse from "./CustomCollapse";

//Import Images
import avatar1 from "./../assets/images/users/avatar-1.jpg";

//i18n
import { useTranslation } from "react-i18next";
/* import { useAuth } from "../contexts/AuthContext"; */

const ProfileTab: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  const toggleCollapse1 = () => {
    setIsOpen(!isOpen);
  };

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <React.Fragment>
      <div>
        <div className="px-4 pt-4">
          <div className="user-chat-nav float-right">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                tag="a"
                className="font-size-18 text-muted dropdown-toggle"
              >
                <i className="ri-more-2-fill"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>{t("Edit")}</DropdownItem>
                <DropdownItem>{t("Action")}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>{t("Another action")}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <h4 className="mb-0">{t("My Profile")}</h4>
        </div>

        <div className="text-center p-4 border-bottom">
          <div className="mb-4">
            <img
              src={avatar1}
              className="rounded-circle avatar-lg img-thumbnail"
              alt="chatvia"
            />
          </div>

          <h5 className="font-size-16 mb-1 text-truncate">{"Daniel Chaves"}</h5>
          <p className="text-muted text-truncate mb-1">
            <i
              className={`ri-record-circle-fill font-size-10 mr-1 d-inline-block`}
            ></i>{" "}
            {"Online"}
          </p>
        </div>
        <div className="p-4 user-profile-desc">
          <div id="profile-user-accordion-1" className="custom-accordion">
            <Card className="shadow-none border mb-2">
              <CustomCollapse
                title="About"
                iconClass="ri-user-2-line"
                isOpen={isOpen}
                toggleCollapse={toggleCollapse1}
              >
                <div>
                  <p className="text-muted mb-1">{t("Name")}</p>
                </div>

                <div className="mt-4">
                  <p className="text-muted mb-1">{t("Email")}</p>
                </div>
                  <div className="mt-4">
                    <p className="text-muted mb-1">{t("Number")}</p>
                  </div>
              </CustomCollapse>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTab;
