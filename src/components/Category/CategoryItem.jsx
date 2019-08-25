import React from 'react';
import './CategoryItem.scss';
import {Link} from "react-router-dom";

const CategoryItem = (props) => {
  //FIXME : data.data - wrong!
  const {id, title, image, price, brand} = props.data;
  return (
    <div className="Category-item">
      <div className="Category-item--image">
        <img src={`media/${image}`} alt={title}/>
      </div>
      <div className="Category-item--description">
        <Link to={`product/${id}`}>details</Link>

        <button onClick={props.onClick} id={id}>add to cart</button>

        <span className="Category-item--description-brand">{brand}</span>
        <span className="Category-item--description-title">{title}</span>
        <span className="Category-item--description-price">{price}</span>
      </div>
    </div>
  );
};

export default CategoryItem;
