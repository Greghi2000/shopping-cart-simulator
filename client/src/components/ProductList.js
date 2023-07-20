import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCartItemsByCartId } from "../utils/api";
import React, { useEffect } from 'react';
import { setProducts } from '../store/product';
import ProductItem from '../components/ProductItem'
import { setCartChange, setCartItemsByCartId } from "../store/cart";
import './ProductList.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartChanged = useSelector((state) => state.cart.cartChange)

  useEffect(() => {
    getCartItemsByCartId(1) // when auth is done will be user.id
    .then(data => {
        dispatch(setCartItemsByCartId(data))
        dispatch(setCartChange(false))
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log(products, 'products')
}, [dispatch, cartChanged])

  useEffect(() => {
    console.log('Use effect for prods');
    getProducts()
      .then((data) => {
        console.log('This is the prod data:', data);
        dispatch(setProducts(data));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [dispatch])


  return (
    <>
    <div className="product-list">
      {products && products.length > 0 ? (
        products.map(product => (
          <ProductItem
          key={product.ID}
          ID={product.ID}
        />
        ))
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
    </>
    );
};

export default ProductList;