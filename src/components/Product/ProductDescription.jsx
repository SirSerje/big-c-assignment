import React from 'react';

//FIXME : надо ссылаться только на корневую директорию для получения ссылки
const ProductDescription = (props) => {
  const {title, price, image, children, brand, description} = props;
  return (
    <div className={'Product--content'}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{brand}</div>
      <img src={`http://localhost:3000/media/${image}`} alt={title}/>
      <div className={'Product--controls'}>{children}</div>
    </div>
  )


}

export default ProductDescription
