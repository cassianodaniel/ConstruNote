import React from "react";
import ReactImageFallback from "react-image-fallback";
import ScreenType from "../../enums/ScreenType";

interface IProps {
  name: string;
  classification: string;
  score: any;
}

const CharTicket: React.FC<IProps> = ({ name, classification, score }) => {
  return (
    <>
      <div className="ticketContainer mt-2">
        <ReactImageFallback
          fallbackImage={require("../assets/images/users/avatar-1.jpg")}
          className="charPic mt-4 cursor-pointer"
          src={require("../assets/images/users/avatar-1.jpg")} //user.profilePicture
        />
        <div className="charDescription ml-2 mt-2">
          <div className="font-weight-bold cursor-pointer">{name}</div>
          <div className="text-muted d-flex flex-row cursor-pointer">
            <div>{classification}</div>
            <div className="ml-1 font-weight-bold text-danger">{score}</div>
          </div>
          <div>
            <a className="font-size-13" href={ScreenType.FORNECEDORESFAVORITOS}>
              Excluir
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharTicket;
