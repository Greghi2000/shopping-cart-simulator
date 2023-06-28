import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { getProductById } from '../utils/api';
import './CartItem.css';

const CartItem = ({ ProductID, Quantity }) => {
  const [product, setProduct] = useState()
  useEffect(() => {
    getProductById(ProductID)
    .then((data) => {
      setProduct(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [ProductID, Quantity])

  return (
      <article>
      {product && (
      <div>
      <h4>Name: {product.Title}</h4>
      <h4 className='item-price'>${product.Price}</h4>
      <button className='remove-btn'>
        remove
      </button>
      </div>
      )}
      <div>
        <button className='amount-btn'>
          {/* <ChevronUp /> */}
        </button>
        <p className='amount'>Quantity: {Quantity}</p>
        <button className='amount-btn'>
          {/* <ChevronDown /> */}
        </button>
      </div>
      </article>
    );
}
 
export default CartItem;