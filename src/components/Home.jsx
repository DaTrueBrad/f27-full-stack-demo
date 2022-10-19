import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Buy Something</h1>
      <div className="product-container">
        {products.map((p) => {
          return <ProductCard product={p}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
