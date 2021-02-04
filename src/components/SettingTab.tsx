import React, { useState, useRef } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Tooltip,
  CustomInput,
} from "reactstrap";

import SimpleBar from "simplebar-react";

//Import components
import CustomCollapse from "./CustomCollapse";

//Import Images
import avatar1 from "./../assets/images/users/avatar-1.jpg";

function SettingTab() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [forwardAllDestination, setForwardAllDestination] = useState("");
  const [forwardBusyDestination, setForwardBusyDestination] = useState("");
  const [forwardNoAnswerDestination, setForwardNoAnswerDestination] = useState(
    ""
  );
  const [
    forwardUserNotRegisteredDestination,
    setForwardUserNotRegisteredDestination,
  ] = useState("");

  const [
    forwardAllDestinationEnabled,
    setForwardAllDestinationEnabled,
  ] = useState<boolean>(false);
  const [
    forwardBusyDestinationEnabled,
    setForwardBusyDestinationEnabled,
  ] = useState<boolean>(false);
  const [
    forwardNoAnswerDestinationEnabled,
    setForwardNoAnswerDestinationEnabled,
  ] = useState<boolean>(false);
  const [
    forwardUserNotRegisteredDestinationEnabled,
    setForwardUserNotRegisteredDestinationEnabled,
  ] = useState<boolean>(false);

  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);

  const inputSearch1 = useRef<HTMLInputElement>(null);
  const inputSearch2 = useRef<HTMLInputElement>(null);
  const inputSearch3 = useRef<HTMLInputElement>(null);
  const inputSearch4 = useRef<HTMLInputElement>(null);

  const focus1 = () => {
    inputSearch1.current?.focus();
  };

  const focus2 = () => {
    inputSearch2.current?.focus();
  };

  const focus3 = () => {
    inputSearch3.current?.focus();
  };

  const focus4 = () => {
    inputSearch4.current?.focus();
  };
  const t = (value: string) => {return value};

  const toggleCollapse1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleCollapse2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleCollapse3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
  };
  const toggleCollapse4 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
  };
  const toggle = () => setDropdownOpen(!dropdownOpen);


  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);

  const toggleTooltip1 = () => setTooltipOpen1(!tooltipOpen1);
  const toggleTooltip2 = () => setTooltipOpen2(!tooltipOpen2);
  const toggleTooltip3 = () => setTooltipOpen3(!tooltipOpen3);
  const toggleTooltip4 = () => setTooltipOpen4(!tooltipOpen4);

  /* const isThisStringNotEmpty = (value: string) => {
    if(value !== ""){
      return true;
    }else{
      return false
    }
  } */
  const clearInputs = () => {
    setForwardBusyDestination("");
    setForwardNoAnswerDestination("");
    setForwardUserNotRegisteredDestination("");
    setForwardAllDestination("");
  };

  const lockAllInputs = () => {
    setForwardBusyDestinationEnabled(true);
    setForwardNoAnswerDestinationEnabled(true);
    setForwardUserNotRegisteredDestinationEnabled(true);
    setForwardAllDestinationEnabled(true);
  };
  /* const isEveryInputLocked = () => {
    if (
      lockedBusyInput === true &&
      lockedNoAnswerInput === true &&
      lockedNotRegisteredInput === true &&
      lockedFollowMeAlwaysInput === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isEveryDataEmpty = () => {
    if (
      busy === "" &&
      noAnswer === "" &&
      notRegistered === "" &&
      followMeAlways === ""
    ) {
      return true;
    } else {
      return false;
    }
  }; */
  return (
    <React.Fragment>
      <div>
        <div className="px-4 pt-4">
          <h4 className="mb-0">{t("Settings")}</h4>
        </div>

        <div className="text-center border-bottom p-4">
          <div className="mb-4 profile-user">
            <img
              src={avatar1}
              className="rounded-circle avatar-lg img-thumbnail"
              alt="chatvia"
            />
            <Button
              type="button"
              color="light"
              className="avatar-xs p-0 rounded-circle profile-photo-edit"
            >
              <i className="ri-pencil-fill"></i>
            </Button>
          </div>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="d-inline-block mb-1"
          >
            <DropdownToggle tag="a" className="text-muted pb-1 d-block">
              <i
                className={`ri-record-circle-fill font-size-10  mr-1 d-inline-block`}
              ></i>{" "}
              <i className="mdi mdi-chevron-down"></i>
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                }}
              >
                {t("Online")}
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                }}
              >
                {t("Away")}
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                }}
              >
                {t("Do not Disturb")}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        {/* End profile user */}

        {/* Start User profile description */}
        <SimpleBar
          style={{ maxHeight: "100%" }}
          className="p-4 user-profile-desc"
        >
          <div id="profile-setting-accordion" className="custom-accordion">
            <Card className="shadow-none border mb-2">
              <CustomCollapse
                title="Personal Info"
                isOpen={isOpen1}
                iconClass=""
                toggleCollapse={toggleCollapse1}
              >
                <div className="float-right">
                  <Button
                    color="light"
                    size="sm"
                    type="button"
                  >
                    <i className="ri-edit-fill mr-1 align-middle"></i>{" "}
                    {t("Edit")}
                  </Button>
                </div>
                <div>
                  <p className="text-muted mb-1">{t("Name")}</p>
                </div>
                <div className="float-right">
                  <Button
                    color="light"
                    size="sm"
                    type="button"
                  >
                    <i className="ri-edit-fill mr-1 align-middle"></i>{" "}
                    {t("Edit security")}
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-muted mb-1">{t("Email")}</p>
                </div>

                <div className="mt-4">
                  <p className="text-muted mb-1">{t("Number")}</p>
                </div>
                {/* 
                <div className="mt-4">
                  <p className="text-muted mb-1">{t("Time")}</p>
                  <h5 className="font-size-14">{t("11:40 AM")}</h5>
                </div>

                <div className="mt-4">
                  <p className="text-muted mb-1">{t("Location")}</p>
                  <h5 className="font-size-14 mb-0">{t("California, USA")}</h5>
                </div> */}
              </CustomCollapse>
            </Card>
          </div>
          <div id="profile-setting-accordion" className="custom-accordion">
            <Card className="shadow-none border mb-2">
              <CustomCollapse
                title={t("Devices Settings")}
                isOpen={isOpen2}
                iconClass=""
                toggleCollapse={toggleCollapse2}
              >
                <Button
                  color="light"
                  size="sm"
                  type="button"
                  block
                  onClick={() => {
                  }}
                >
                  <i className="ri-edit-fill mr-1 align-middle"></i>{" "}
                  {t("Change devices settings")}
                </Button>
              </CustomCollapse>
            </Card>
          </div>
          <div id="profile-setting-accordion" className="custom-accordion">
            <Card className="shadow-none border mb-2">
              <CustomCollapse
                title={t("Telephone Extension Line Settings")}
                isOpen={isOpen3}
                iconClass=""
                toggleCollapse={toggleCollapse3}
              >
                <div className="mb-2 text-muted" style={{ fontSize: "14.7px" }}>
                  {t("Follow me") + ":"}
                </div>

                <div>
                  <div
                    className={"mb-1 mt-3 text-muted"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: "14.7px",
                    }}
                  >
                    {t("On busy") + ":"}
                    <div id="TooltipExample1" className={"ml-1 mb-1"}>
                      <img
                        alt={"?"}
                        src={require("./../assets/images/doubt.png")}
                      />
                    </div>
                  </div>
                </div>
                <InputGroup className={"mb-2"}>
                  <InputGroupAddon addonType="prepend">
                    {forwardBusyDestinationEnabled === false ? (
                      <Button
                        style={{ backgroundColor: "#6a7fc0", border: "none" }}
                        onClick={() => {
                          setForwardBusyDestinationEnabled(
                            !forwardBusyDestinationEnabled
                          );
                          setForwardBusyDestination("");
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "white" }}
                          className="ri-check-fill"
                        ></div>
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#e1ecfb", border: "none" }}
                        onClick={() => {
                          setForwardBusyDestinationEnabled(
                            !forwardBusyDestinationEnabled
                          );
                          focus1();
                          setDisplay1(true);
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "black" }}
                          className="ri-close-line"
                        ></div>
                      </Button>
                    )}
                  </InputGroupAddon>
                  {forwardBusyDestinationEnabled ? (
                    <Input
                      value={forwardBusyDestination}
                      placeholder={t("Destination")}
                      innerRef={inputSearch1}
                      style={{
                        fontSize: "14.4px",
                      }}
                      onFocus={() => {
                        setDisplay1(true);
                        setForwardBusyDestinationEnabled(false);
                      }}
                      onBlur={() => setDisplay1(false)}
                    />
                  ) : (
                    <Input
                      value={forwardBusyDestination}
                      placeholder={t("Destination")}
                      onChange={(e) =>
                        setForwardBusyDestination(
                          (e.target.value)
                        )
                      }
                      onFocus={() => setDisplay1(true)}
                      onBlur={() => setDisplay1(false)}
                    />
                  )}
                  {display1 && (
                    <div
                      className={"mt-2"}
                      style={{ color: "red", fontSize: 12 }}
                    >
                      {t("Please enter only characters between 0-9, * and #.")}
                    </div>
                  )}
                </InputGroup>

                <div>
                  <div
                    className={"mb-1 mt-3 text-muted"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: "14.7px",
                    }}
                  >
                    {t("On no answer") + ":"}
                    <div id="TooltipExample2" className={"ml-1 mb-1"}>
                      <img
                        alt={"?"}
                        src={require("./../assets/images/doubt.png")}
                      />
                    </div>
                  </div>
                </div>
                <InputGroup className={"mb-2"}>
                  <InputGroupAddon addonType="prepend">
                    {forwardNoAnswerDestinationEnabled === false ? (
                      <Button
                        style={{ backgroundColor: "#6a7fc0", border: "none" }}
                        onClick={() => {
                          setForwardNoAnswerDestinationEnabled(
                            !forwardNoAnswerDestinationEnabled
                          );
                          setForwardNoAnswerDestination("");
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "white" }}
                          className="ri-check-fill"
                        ></div>
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#e1ecfb", border: "none" }}
                        onClick={() => {
                          setForwardNoAnswerDestinationEnabled(
                            !forwardNoAnswerDestinationEnabled
                          );
                          focus2();
                          setDisplay2(true);
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "black" }}
                          className="ri-close-line"
                        ></div>
                      </Button>
                    )}
                  </InputGroupAddon>
                  {forwardNoAnswerDestinationEnabled ? (
                    <Input
                      value={forwardNoAnswerDestination}
                      placeholder={t("Destination")}
                      innerRef={inputSearch2}
                      style={{
                        fontSize: "14.4px",
                      }}
                      onFocus={() => {
                        setForwardNoAnswerDestinationEnabled(false);
                        setDisplay2(true);
                      }}
                      onBlur={() => setDisplay2(false)}
                    />
                  ) : (
                    <Input
                      value={forwardNoAnswerDestination}
                      placeholder={t("Destination")}
                      onChange={(e) =>
                        setForwardNoAnswerDestination(
                          (e.target.value)
                        )
                      }
                      onFocus={() => {
                        setDisplay2(true);
                        setForwardNoAnswerDestinationEnabled(false);
                      }}
                      onBlur={() => setDisplay2(false)}
                    />
                  )}
                  {display2 && (
                    <div
                      className={"mt-2"}
                      style={{ color: "red", fontSize: 12 }}
                    >
                      {t("Please enter only characters between 0-9, * and #.")}
                    </div>
                  )}
                </InputGroup>

                <div>
                  <div
                    className={"mb-1 mt-3 text-muted"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: "14.7px",
                    }}
                  >
                    {t("When not registered") + ":"}
                    <div id="TooltipExample3" className={"ml-1 mb-1"}>
                      <img
                        alt={"?"}
                        src={require("./../assets/images/doubt.png")}
                      />
                    </div>
                  </div>
                </div>
                <InputGroup className={"mb-2"}>
                  <InputGroupAddon addonType="prepend">
                    {forwardUserNotRegisteredDestinationEnabled === false ? (
                      <Button
                        style={{ backgroundColor: "#6a7fc0", border: "none" }}
                        onClick={() => {
                          setForwardUserNotRegisteredDestinationEnabled(
                            !forwardUserNotRegisteredDestinationEnabled
                          );
                          setForwardUserNotRegisteredDestination("");
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "white" }}
                          className="ri-check-fill"
                        ></div>
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#e1ecfb", border: "none" }}
                        onClick={() => {
                          setForwardUserNotRegisteredDestinationEnabled(
                            !forwardUserNotRegisteredDestinationEnabled
                          );
                          focus3();
                          setDisplay3(true);
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "black" }}
                          className="ri-close-line"
                        ></div>
                      </Button>
                    )}
                  </InputGroupAddon>
                  {forwardUserNotRegisteredDestinationEnabled ? (
                    <Input
                      value={forwardUserNotRegisteredDestination}
                      innerRef={inputSearch3}
                      placeholder={t("Destination")}
                      onFocus={() => {
                        setDisplay3(true);
                        setForwardUserNotRegisteredDestinationEnabled(false);
                      }}
                      onBlur={() => setDisplay3(false)}
                      style={{
                        fontSize: "14.4px",
                      }}
                    />
                  ) : (
                    <Input
                      value={forwardUserNotRegisteredDestination}
                      placeholder={t("Destination")}
                      onChange={(e) =>
                        setForwardUserNotRegisteredDestination(
                          (e.target.value)
                        )
                      }
                      onFocus={() => setDisplay3(true)}
                      onBlur={() => setDisplay3(false)}
                    />
                  )}
                  {display3 && (
                    <div
                      className={"mt-2"}
                      style={{ color: "red", fontSize: 12 }}
                    >
                      {t("Please enter only characters between 0-9, * and #.")}
                    </div>
                  )}
                </InputGroup>

                <div>
                  <div
                    className={"mb-1 mt-3 text-muted"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: "14.7px",
                    }}
                  >
                    {t("Always") + ":"}
                    <div id="TooltipExample4" className={"ml-1 mb-1"}>
                      <img
                        alt={"?"}
                        src={require("./../assets/images/doubt.png")}
                      />
                    </div>
                  </div>
                </div>
                <InputGroup className={"mb-2"}>
                  <InputGroupAddon addonType="prepend">
                    {forwardAllDestinationEnabled === false ? (
                      <Button
                        style={{ backgroundColor: "#6a7fc0", border: "none" }}
                        onClick={() => {
                          setForwardAllDestinationEnabled(
                            !forwardAllDestinationEnabled
                          );
                          setForwardAllDestination("");
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "white" }}
                          className="ri-check-fill"
                        ></div>
                      </Button>
                    ) : (
                      <Button
                        style={{ backgroundColor: "#e1ecfb", border: "none" }}
                        onClick={() => {
                          setForwardAllDestinationEnabled(
                            !forwardAllDestinationEnabled
                          );
                          focus4();
                          setDisplay4(true);
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "black" }}
                          className="ri-close-line"
                        ></div>
                      </Button>
                    )}
                  </InputGroupAddon>
                  {forwardAllDestinationEnabled ? (
                    <Input
                      value={forwardAllDestination}
                      placeholder={t("Destination")}
                      onFocus={() => {
                        setDisplay4(true);
                        setForwardAllDestinationEnabled(false);
                      }}
                      onBlur={() => setDisplay4(false)}
                      innerRef={inputSearch4}
                      style={{
                        fontSize: "14.4px",
                      }}
                    />
                  ) : (
                    <Input
                      value={forwardAllDestination}
                      placeholder={t("Destination")}
                      onChange={(e) =>
                        setForwardAllDestination(
                          (e.target.value)
                        )
                      }
                      onFocus={() => {
                        setDisplay4(true);
                        setForwardAllDestinationEnabled(false);
                      }}
                      onBlur={() => setDisplay4(false)}
                    />
                  )}
                  {display4 && (
                    <div
                      className={"mt-2"}
                      style={{ color: "red", fontSize: 12 }}
                    >
                      {t("Please enter only characters between 0-9, * and #.")}
                    </div>
                  )}
                </InputGroup>

                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen1}
                  target="TooltipExample1"
                  toggle={toggleTooltip1}
                >
                  {t(
                    "When the extension is busy the call will be forwarded to the extension indicated below"
                  )}
                </Tooltip>

                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen2}
                  target="TooltipExample2"
                  toggle={toggleTooltip2}
                >
                  {t(
                    "When the extension does not answer the call it will be forwarded to the extension indicated below"
                  )}
                </Tooltip>

                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen3}
                  target="TooltipExample3"
                  toggle={toggleTooltip3}
                >
                  {t(
                    "When the extension is not registered with the PABX the call it will be forwarded to the extension indicated below"
                  )}
                </Tooltip>

                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen4}
                  target="TooltipExample4"
                  toggle={toggleTooltip4}
                >
                  {t(
                    "When enabling follow-me always, all calls will be forwarded to the indicated number"
                  )}
                </Tooltip>

                {/* {isEveryDataEmpty() || isEveryInputLocked() ? (
                  <Button
                    color="light"
                    size="sm"
                    type="button"
                    block
                    disabled
                    className={"mt-4"}
                  >
                    {t("Save")}
                  </Button>
                ) : ( */}
                <Button
                  color="light"
                  size="sm"
                  type="button"
                  block
                  className={"mt-4"}
                >
                  {t("Save")}
                </Button>
                {/* )} */}
              </CustomCollapse>
            </Card>
          </div>
          <div id="profile-setting-accordion" className="custom-accordion">
            <Card className="shadow-none border mb-2">
              <CustomCollapse
                title={t("Notification Settings")}
                isOpen={isOpen4}
                iconClass=""
                toggleCollapse={toggleCollapse4}
              >
                <CustomInput
                  onChange={(e) => {
                    localStorage.setItem(
                      "visualNotificationEnabled",
                      `${e.target.checked}`
                    );
                  }}
                  type="switch"
                  id="visualNotificationsSwitch"
                  name="visualNotifications"
                  label={t("Visual Notifications")}
                />
                <CustomInput
                  onChange={(e) => {
                    localStorage.setItem(
                      "soundNotificationEnabled",
                      `${e.target.checked}`
                    );
                  }}
                  type="switch"
                  id="soundNotificationsSwitch"
                  name="soundNotifications"
                  label={t("Sound Notifications")}
                />
              </CustomCollapse>
            </Card>
          </div>
        </SimpleBar>
      </div>
    </React.Fragment>
  );
}

export default SettingTab;
