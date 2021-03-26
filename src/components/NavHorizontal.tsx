import React from "react";

interface INavHorizontal {
  title: string;
}
const NavHorizontal: React.FC<INavHorizontal> = ({ title }) => {
  return <div className="nav-horizontal">{title}</div>;
};

export default NavHorizontal;
