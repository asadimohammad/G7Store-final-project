import React, { useEffect, useState } from "react";

const Cart = ({ cartList, changeQty, deletePrCart }) => {
  const [total, setTotal] = useState(0);

  const calcTotal = () => {
    let priceTotal = 0;
    cartList.map((pr) => priceTotal += pr.price * pr.qty);
    setTotal(priceTotal);
  };

  useEffect(() => {
    calcTotal();
  }, [cartList]);

  return (
    <div className="cart my-5">
      {cartList.length === 0 && <h3>Cart is empty!</h3>}
      {cartList.map((item) => (
        <div
          className="cart-pr d-flex jc-sb items-center radius-2"
          key={item.id}
        >
          <h2>{item.title}</h2>
          <div className="price">{item.price * item.qty}</div>
          <div className="">
            <button onClick={() => changeQty(item, 1)}>+</button>
            <span>{item.qty}</span>
            <button onClick={() => changeQty(item, -1)}>-</button>
          </div>
          <button onClick={() => deletePrCart(item.id)}>Delete</button>
        </div>
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Cart;
