import React, { useState, useEffect } from 'react';
import './ProductItem.css'
import { setCartChange, setCartItemsByCartId } from "../store/cart";
import { addProductToCart, getCartItemsByCartId, getProductById } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const ProductItem = ({ ID }) => {
  const { id } = useParams();
  const product = useSelector(state => state.products.items.find(item => item.ID === parseInt(id)));
  
  const [quantitySelected, setQuantitySelected] = useState(1)
  const [currentProduct, setCurrentProduct] = useState(null)
  const productsInCart = useSelector(state => state.cart.cartItems)
  // console.log(productsInCart, 'this is productsInCart')
  const mappedProducts = productsInCart.map(prods => parseInt(prods.ProductID))

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
    console.log(product, 'product')
  }, [dispatch, cartChanged])

   useEffect(() => {
     getProductById(ID || id)
     .then(data => {
         setCurrentProduct(data)
     })
     .catch(error => {
         console.error('Error:', error);
     });
     console.log(product, 'product')
   }, [id, ID])

    const handleAddToCart = () => {
      for(let proddys of mappedProducts) {
        if(ID === proddys) {
          console.log('It worked!')
          // do the put request editing the quantity and not adding new one to cart
          // insert the rest of the code in an else statement to make sure they dont overlap eachother
        }
      }
      const cartID = 1 // when auth is done will be user.cartID
        console.log(ID, 'This is cart ID')
        addProductToCart({ "quantity": quantitySelected, "cartId": cartID, "productId": ID})
        dispatch(setCartChange(true))
    }

    const handleSelectChange = (e) => {
      setQuantitySelected(e.target.value)
    }
    return (
      <>
      {currentProduct ? (
        <div className="product-item">
          <Link to={`/products/${currentProduct.ID}`}>
            <h2>{currentProduct.Title}</h2>
          </Link>
          <p>{currentProduct.Description}</p>
          <p>This is ID: {currentProduct.ID}</p>
          <p className="price">Price: ${currentProduct.Price}</p>
          <img src={currentProduct.ImageURL} alt={currentProduct.Title} />
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
  