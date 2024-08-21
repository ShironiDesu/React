import React from 'react'
import  './ProductCard.css'
export default function Products({title,description,price,image}) {
  return (
    
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  )
}
