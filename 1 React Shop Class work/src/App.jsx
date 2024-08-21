import React from 'react';
import Products from './Products';

export default function App() {
  const products = [
    {
        id: 1,
        title: "Product 1",
        price: 19.99,
        description: "This is the description for Product 1.",
        thumbnail: "https://example.com/product1.jpg"
    },
    {
        id: 2,
        title: "Product 2",
        price: 29.99,
        description: "This is the description for Product 2.",
        thumbnail: "https://example.com/product2.jpg"
    },
    {
        id: 3,
        title: "Product 3",
        price: 39.99,
        description: "This is the description for Product 3.",
        thumbnail: "https://example.com/product3.jpg"
    },
    {
        id: 4,
        title: "Product 4",
        price: 49.99,
        description: "This is the description for Product 4.",
        thumbnail: "https://example.com/product4.jpg"
    }
];


  return (
    <>      <div className='card-container'>
      {products.length > 0 ? (
        products.map(product => (
    
          <Products 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            description={product.description} 
            image={product.thumbnail} 
          />
          
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
}
