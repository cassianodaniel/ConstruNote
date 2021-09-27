import React from "react";
import { RiCheckLine, RiFileList2Line } from "react-icons/ri";
import "./styles.scss";

interface INavHorizontal {
  title: string;
}
const NavHorizontal: React.FC<INavHorizontal> = ({ title }) => {
  return (
    <div className="nav-horizontal">
      {title}
      <div className="nav-progress-icon">
        <RiCheckLine className="cursor-pointer" />
        <div className="mr-4 cursor-pointer">80%</div>
        <RiFileList2Line className="cursor-pointer" />
        <div className="ml-1 cursor-pointer">Lista</div>
      </div>
    </div>
  );
};

export default NavHorizontal;
