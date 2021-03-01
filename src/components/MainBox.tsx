import React from "react";
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";

//Import Components
import Body from "./Body";
import NavHorizontal from "./NavHorizontal";


const MainBox = () => {
  const { screen } = useMainBox();
  return (
    <React.Fragment>
      {screen !== ScreenType.WELCOME && 
        <>
        <NavHorizontal/>
          <Body/>
        </>
      }
    </React.Fragment>
  );
};

export default MainBox;
