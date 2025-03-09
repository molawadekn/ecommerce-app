import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our E-commerce Site</h1>
        <p>Find the best products here!</p>
        <div className="home-links">
          <Link to="/products">View Products</Link>
          <Link to="/cart">Add to Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <div className="search-filter">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;