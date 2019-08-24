import React from 'react';
import './CategoryItem.scss';

const CategoryItem = (data) => {
  //FIXME : data.data - wrong!
  const {title, image, price, brand} = data.data;
  return (
    <div className="Category-item">
      <div className="Category-item--image">
        <img src={`media/${image}`} alt={title}/>
      </div>
      <div className="Category-item--description">
        <span className="Category-item--description-brand">{brand}</span>
        <span className="Category-item--description-title">{title}</span>
        <span className="Category-item--description-price">{price}</span>
      </div>
    </div>
  );
};

export default CategoryItem;
