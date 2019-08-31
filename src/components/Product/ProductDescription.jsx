import React from 'react';
import './Product.scss';

//FIXME : надо ссылаться только на корневую директорию для получения ссылки картинки
const ProductDescription = (props) => {
  const {title, price, image, children, brand, description} = props;
  return (
    <>
      <div className='Product--content'>

        <div className="Product--content-image">
          <img src={`http://localhost:3000/media/${image}`} alt={title}/>
        </div>

        <div className="Product--content-description">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="price">&#36;{price}</div>
          <div className="brand">{brand}</div>
        </div>


      </div>
      <div className='Product--controls'>{children}</div>


    </>
  );


};

export default ProductDescription;
