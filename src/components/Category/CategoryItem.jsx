import React from 'react';
import './CategoryItem.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryItem = ({ onClick, data }) => {
  const {
    id, title, image, price, brand,
  } = data;

  return (
    <div className="Category-item">
      <div className="Category-item--image">
        <img className="Category-item--image-resize_fit_center" src={`media/${image}`} alt={title} />
        <div className="Category-item--image-hover">
          <Link className="" to={`product/${id}`}>details</Link>
          <button type="button" onClick={onClick} id={id}>add to cart</button>
        </div>
      </div>

      <div className="Category-item--description">
        <span className="Category-item--description-brand">{brand}</span>
        <span className="Category-item--description-title">{title}</span>
        <span className="Category-item--description-price">
          &#36;
          {price}
        </span>
      </div>
    </div>
  );
};


CategoryItem.propTypes = {
  data: PropTypes.any,
  onClick: PropTypes.any,
};

CategoryItem.defaultProps = {};

export default CategoryItem;
