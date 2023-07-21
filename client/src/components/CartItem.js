import React, { useEffect, useState } from 'react';
import { setCartChange, setIsQuantityChanged } from "../store/cart";
import { getProductById, deleteByIdFromCart } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantityByCartID } from "../utils/api";
import './CartItem.css';

const CartItem = ({ _productID, _quantity, _ID }) => {
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(_quantity)
  const dispatch = useDispatch()
  const isQuantityChanged = useSelector(state => state.cart.isQuantityChanged)
  useEffect(() => {
    getProductById(_productID)
    .then((data) => {
      console.log(_ID)
      setProduct(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [_productID, _quantity])

  const handleDeleteFromCart = () => {
    deleteByIdFromCart(_productID)
    dispatch(setCartChange(true))
  }

  const handleIncreaseQuantity = () => {
    console.log(_productID)
    setQuantity(quantity + 1)
    dispatch(setIsQuantityChanged(true))
  };

  const handleDecreaseQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
      dispatch(setIsQuantityChanged(true))
    }
  };

  const handleConfirmQuantity = () => {
    console.log(_productID, "_productID")
    console.log(quantity, 'quantity')
    console.log(_ID, 'itemID')
    const quantityPayload = {"quantity": quantity}
    updateCartItemQuantityByCartID(_ID, quantityPayload)
  }

  return (
    <article className="cart-item">
      {product && (
        <div>
          <h4>Name: {product._title}</h4>
          <h4 className="item-price">${product._price}</h4>
          <button onClick={handleDeleteFromCart} className="remove-btn">
            remove
          </button>
        </div>
      )}
      <div className="quantity-container">
        <button onClick={handleDecreaseQuantity} className="quantity-btn">
          &#8249;
        </button>
        <p className="amount">Quantity: {quantity}</p>
        <button onClick={handleIncreaseQuantity} className="quantity-btn">
          &#8250;
        </button>
      </div>
      {isQuantityChanged && (
        <button onClick={handleConfirmQuantity} className="confirm-btn">
          Confirm
        </button>
      )}
    </article>
  );
}
 
export default CartItem;