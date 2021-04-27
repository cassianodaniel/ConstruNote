import React from 'react';
import ReactImageFallback from 'react-image-fallback';

interface IProps {
  title: string;
  description: string;
  price: string | number;
}

const ProductTicket: React.FC<IProps> = ({ title, description, price }) => {
  return (
    <>
      <div className="ticketCardContainer p-4">
        <div className="productPictureContainer">
          <ReactImageFallback
            fallbackImage={require('../assets/images/emblems/logo.png')}
            className="productCardImage cursor-pointer"
            src={require('../assets/images/emblems/logo.png')} //card.productPicture
          />
        </div>

        <div className="productDescription mt-2">
          <div className="card-title cursor-pointer mt-2">{title}</div>

          <div className="font-weight-bold d-flex flex-row cursor-pointer mt-2">
            <div>{description}</div>
          </div>

          <div className="font-weight-light text-muted mt-2">R$ {price}</div>

          <div>
            <button type="button" className="btn btn-primary mt-2">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTicket;
