import PopupProduct from './PopupProduct';
import React from 'react';
import './CartPopup.scss'

const PopupCart = ({products, total, add,remove, removeAll}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>{
      const {title,price,quantity,id} = product;
      return (<PopupProduct
        title={title}
        price={price}
        quantity={quantity}
        key={id}
        id={id}
        add={add}
        remove={remove}
        removeAll={removeAll}
      />);
    }
    )
  ) : (
    <em>Cart is empty</em>
  );

  return (
    <>
      <div className="CartPopup--container--products">{nodes}</div>
      <div className="CartPopup--container--total-price">
        <div>Total:</div>
        <div>&#36;{total}</div>
      </div>

    </>
  );
};

export default PopupCart;
