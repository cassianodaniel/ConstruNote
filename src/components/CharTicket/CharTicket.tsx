import React from "react";
import ReactImageFallback from "react-image-fallback";
import { Button } from "reactstrap";
import ScreenType from "../../enums/ScreenType";
import avatar from "./../../assets/images/users/avatar-1.jpg";

type ButtonCharTicket = 'Favoritar' | 'Favorito' | 'Incluir'
interface IProps {
  name: string;
  classification: string;
  description?: string;
  button: ButtonCharTicket;
}

const returnClickableElement = ( button: ButtonCharTicket ) => {
  switch(button){
    case 'Favoritar': return (<Button color={"primary"}>
      {button}
    </Button>);
    case 'Favorito': return (<Button color={"light"}>
      {button}
    </Button>);
    case 'Incluir': return (<a href="./">
      {'+'} {button}
    </a>
    );
    default: return <Button>{button}</Button>
  }
}

const CharTicket: React.FC<IProps> = ({ name, classification, description, button }) => {
  return (
    <>
      <div className="ticketContainer mt-2">
        <ReactImageFallback
          fallbackImage={avatar}
          className="charPic mt-4 cursor-pointer"
          src={avatar} //user.profilePicture
        />
        <div className="charDescription ml-2 mt-2">
          <div className="font-weight-bold cursor-pointer">{name}</div>
          <div className="text-muted d-flex flex-row">
            <div>{classification}</div>
            <div className="ml-1 text-danger">{description}</div>
          </div>
          <div>
            <a className="font-size-13" href={ScreenType.FORNECEDORESFAVORITOS}>
              Excluir
            </a>
          </div>
        </div>
        <div className="ml-5">
          {returnClickableElement(button)}
        </div>
      </div>
    </>
  );
};

export default CharTicket;
