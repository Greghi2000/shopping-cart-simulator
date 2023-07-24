import React, { useState, useEffect } from 'react';
import './ProductItem.css'
import cart, { setCartChange, setCartItemsByCartId } from "../store/cart";
import { addProductToCart, getCartItemsByCartId, getProductById, updateCartItemQuantityByCartID } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const ProductItem = ({ ID }) => {
  const { id } = useParams();
  
  const [quantitySelected, setQuantitySelected] = useState(1)
  const [currentProduct, setCurrentProduct] = useState(null)
  const productsInCart = useSelector(state => state.cart.cartItems)

  const cartChanged = useSelector((state) => state.cart.cartChange)
  const dispatch = useDispatch()

  useEffect(() => {
    getCartItemsByCartId(1) // when auth is done will be user.id
    .then(data => {
        dispatch(setCartItemsByCartId(data))
        dispatch(setCartChange(false))
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }, [dispatch, cartChanged])

   useEffect(() => {
     getProductById(ID || id)
     .then(data => {
        setCurrentProduct(data)
     })
     .catch(error => {
        console.error('Error:', error);
     });
   }, [id, ID])

    const handleAddToCart = () => {
      const cartProduct = productsInCart.find(prods => prods._productID === (ID || parseInt(id)))
      console.log(productsInCart, 'productsInCart')
      console.log('productsInCartID', ID, id)

      if (cartProduct) {
        // if product already in cart, update its quantity
        console.log(productsInCart); 
        console.log(ID || id);

        const cartItemId = cartProduct._ID
        console.log(cartItemId)
        const quantityPayload = {"quantity": parseInt(cartProduct._quantity) + parseInt(quantitySelected)}
        updateCartItemQuantityByCartID(cartItemId, quantityPayload)
        .then(response => {
          dispatch(setCartChange(true))
        })
        .catch(error => {
          console.error('Error:', error);
        });
      } else {
        const cartID = 1
        console.log(id, 'id in else clause')
        addProductToCart({ "quantity": quantitySelected, "cartId": cartID, "productId": ID || id})
        dispatch(setCartChange(true))
      }
    }

    const handleSelectChange = (e) => {
      setQuantitySelected(e.target.value)
    }
    return (
      <>
      {currentProduct ? (
        <div className="product-item">
          <Link to={`/products/${currentProduct._ID}`}>
            <h2>{currentProduct._title}</h2>
          </Link>
          <p>{currentProduct._description}</p>
          {/* <p>This is ID: {currentProduct._ID||id}</p> */}
          <p className="price">Price: ${currentProduct._price}</p>
          <img className="img-background" src={currentProduct._imageURL} alt={currentProduct._title} />
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
          <select onChange={handleSelectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <hr />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </>
    );      
  };
  
  export default ProductItem;
  