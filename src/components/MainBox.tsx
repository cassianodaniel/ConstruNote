import React from "react";

//Import Components
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";
import Header from "./Header";
import Body from "./Body";


const MainBox = () => {
  const { screen } = useMainBox();
  return (
    <React.Fragment>
      {screen !== ScreenType.WELCOME && 
      <>
        <Header/>
        <Body/>
      </>
      }
    </React.Fragment>
  );
};

export default MainBox;
