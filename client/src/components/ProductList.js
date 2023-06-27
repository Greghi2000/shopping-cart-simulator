import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/api";
import React, { useEffect } from 'react';
import { setProducts } from '../store/product';

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
  }, [dispatch]);

  return (
    <>
      {products && products.length > 0 ? (
        products.map(product => (
          <div key={product.ID}>
            <h2>{product.Title}</h2>
            <p>{product.Description}</p>
            <img src={product.ImageURL} alt={product.Title} />
            <hr />
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </>
  );
};

export default ProductList;