import PopupProduct from './PopupProduct';
import React from 'react';

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
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>

    </div>
  );
};

export default PopupCart;
