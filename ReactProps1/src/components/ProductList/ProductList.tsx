import React from 'react';

function ProductList(props) {
  return (
    <div className="product-card">
      <h4>{props.title}</h4>
      <img src={props.imgURL} alt="Product Image" />
      <p>{props.description}</p>
      <p>Rating: {props.rating}</p>
      {}
    </div>
  );
}

export default ProductList;
