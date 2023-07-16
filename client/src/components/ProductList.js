import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/api";
import React, { useEffect } from 'react';
import { setProducts } from '../store/product';
import ProductItem from '../components/ProductItem'
import AddProduct from '../components/AddProduct'
import './ProductList.css'
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

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
          <ProductItem key={product.ID} {...product}/>
        ))
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
    <Link to='/products/add-new-product'> Add Products </Link>
    </>
    );
};

export default ProductList;