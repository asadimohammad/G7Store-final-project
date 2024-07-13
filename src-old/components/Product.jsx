import React from "react";
import l2 from '../assets/images/L2.jpg'

const Product = ({ sd, addToCart }) => {
  return (
    <div className="card d-flex flex-col jc-sb radius-2">
      <img src={l2} alt="" style={{width:'100%'}} />
      <h2>{sd.title}</h2>
      <div className="price">{sd.price}</div>
      <button onClick={() => addToCart(sd)}>Add To Cart</button>
    </div>
  );
};

export default Product;
