import React from "react";
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";
import Header from "./Header";
import NavVertical from "./NavVertical";
import Welcome from './Welcome';

const NavManager: React.FC = () => {
  const { screen } = useMainBox();
  return (
    <React.Fragment>
      {screen !== ScreenType.WELCOME ?
        <>
          <Header/>
          <NavVertical/>
        </>
        :
        <Welcome/>
      }
    </React.Fragment>
  );
};

export default NavManager;
