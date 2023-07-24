import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCartItemsByCartId, getProductsNotContainingAllergen } from "../utils/api";
import React, { useEffect } from 'react';
import { setProducts } from '../store/product';
import ProductItem from '../components/ProductItem'
import { setCartChange, setCartItemsByCartId } from "../store/cart";
import './ProductList.css'
import { useParams } from "react-router-dom";
import { setFilteredProducts, setIsActive } from "../store/filter";

const ProductList = () => {
  const {allergenID} = useParams()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items)
  const cartChanged = useSelector((state) => state.cart.cartChange)
  const filterListener = useSelector((state) => state.filter.isActive)
  const filteredProducts = useSelector((state) => state.filter.filteredProducts)
  const isActive = useSelector((state) => state.filter.isActive)

  useEffect(() => {
    getProductsNotContainingAllergen(allergenID)
    .then(data => {
        console.log(allergenID)
        console.log(data)
        dispatch(setFilteredProducts(data))
        dispatch(setIsActive(true))
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }, [dispatch])

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
    getProducts()
      .then((data) => {
        dispatch(setProducts(data))
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [dispatch])

  return (
    <>
    {isActive ? (<h2 className="product-count">There are currently {filteredProducts ? filteredProducts.length : "loading"} products on display</h2>) : 
    (<h2 className="product-count">There are currently {products ? products.length : "loading"} products on display</h2>)}
      <div className="product-list">
        {filterListener && filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem
              key={product._ID}
              ID={product._ID}
            />
          ))
        ) : (
          products && products.length > 0 ? (
            products.map(product => (
              <ProductItem
                key={product._ID}
                ID={product._ID}
              />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )
        )}
      </div>
    </>
  )
}

export default ProductList;