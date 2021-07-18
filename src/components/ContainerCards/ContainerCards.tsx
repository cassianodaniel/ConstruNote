import React from "react";
import ProductTicket from "../ProductTicket/ProductTicket";

const Card: React.FC = () => (
  <ProductTicket
    title={"Luminária retangular com refletor"}
    description={"Aletas planas, completa, para 2 lâmpadas tubular."}
    price={110.99}
  />
);

const ContainerCards: React.FC = () => {
  return (
    <div className="d-flex flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ContainerCards;
