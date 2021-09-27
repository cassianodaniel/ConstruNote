import React from "react";
import ProductTicket from "../ProductTicket/ProductTicket";
import "./styles.scss";

const Card: React.FC = () => (
  <ProductTicket
    title={"Luminária retangular com refletor"}
    description={"Aletas planas, completa, para 2 lâmpadas tubular."}
    price={110.99}
  />
);

const ContainerCards: React.FC = () => {
  const quantityCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="d-flex flex-wrap cardsResponsive">
      {quantityCards.map((card, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default ContainerCards;
