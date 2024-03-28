import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./actions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Cart Page</h2>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.name} />
          <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
