import React from "react";

//Import Components
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";

const MainBox = () => {
  const { screen } = useMainBox();

  function showScreen() {
    switch (screen) {
      case ScreenType.WELCOME:
        return <Welcome />;
      case ScreenType.CHAT:
        return <ChatBox />;
    }
  }

  return (
    <React.Fragment>
      {showScreen()}
    </React.Fragment>
  );
};

export default MainBox;
