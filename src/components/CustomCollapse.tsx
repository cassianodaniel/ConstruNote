import React from "react";
import { Collapse, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  iconClass: string;
  isOpen: boolean;
  toggleCollapse(): void;
}

const CustomCollapse: React.FC<IProps> = ({
  title,
  iconClass,
  isOpen,
  toggleCollapse,
  children,
}) => {
  return (
    <React.Fragment>
      <Link to="#" onClick={toggleCollapse} className="text-dark">
        <CardHeader id="profile-user-headingOne">
          <h5 className="font-size-14 m-0">
            {iconClass && (
              <i
                className={iconClass + " mr-2 align-middle d-inline-block"}
              ></i>
            )}
            {title}
            <i
              className={
                isOpen
                  ? "mdi mdi-chevron-up float-right accor-plus-icon"
                  : "mdi mdi-chevron-right float-right accor-plus-icon"
              }
            ></i>
          </h5>
        </CardHeader>
      </Link>
      <Collapse isOpen={isOpen}>
        <CardBody>{children}</CardBody>
      </Collapse>
    </React.Fragment>
  );
};

export default CustomCollapse;
