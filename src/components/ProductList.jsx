import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/products', {
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 401) {
          navigate('/login');
        } else {
          return response.json();
        }
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [navigate]);

  return (
    <div className="product-list">
      <h1>Product Listing</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;