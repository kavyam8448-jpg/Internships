import React, { useState } from "react";
import "./App.css";

function App() {
  const productsData = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 20000, category: "Electronics" },
    { id: 3, name: "Shirt", price: 1000, category: "Clothing" },
    { id: 4, name: "Shoes", price: 2500, category: "Footwear" }
  ];

  const [products] = useState(productsData);
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="container">
      <h1>Product Listing</h1>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Electronics")}>Electronics</button>
        <button onClick={() => setFilter("Clothing")}>Clothing</button>
        <button onClick={() => setFilter("Footwear")}>Footwear</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <span>{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;