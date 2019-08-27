import React from 'react';

const PopupProduct = ({id, price, quantity, title, add ,remove, removeAll}) =>{
  return (
    <div>
      {id} - > {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
      <button id={id} onClick={add}>+</button>
      <button id={id} onClick={removeAll}>-</button>
      <button id={id} onClick={remove}>X</button>
    </div>
  );};

export default PopupProduct;
