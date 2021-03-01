import React from "react";
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";
import NavVertical from "./NavVertical";
import Welcome from './Welcome';

const NavManager: React.FC = () => {
  const { screen } = useMainBox();
  return (
    <React.Fragment>
      {screen === ScreenType.WELCOME &&
        <>
          <Welcome/>
        </>
      }
      {screen !== ScreenType.WELCOME && screen !== ScreenType.CADASTROS && screen !== ScreenType.CADASTROSFISICA && screen !== ScreenType.CADASTROSJURIDICA && screen !== ScreenType.CADASTROSFORNECEDOR &&
        <NavVertical/>
      }
    </React.Fragment>
  );
};

export default NavManager;
