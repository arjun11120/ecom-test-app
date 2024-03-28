import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "./actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://159.65.146.66/agencies/products.php")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1></h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
