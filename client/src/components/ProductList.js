import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/api";
import React, { useEffect } from 'react';
import { setProducts } from '../store/product';
import ProductItem from '../components/ProductItem'
import AddProduct from '../components/AddProduct'
import './ProductList.css'
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const navigate = useNavigate();

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

  const handleAddProduct = () => {
    console.log('Handle Add Prod clicked')
    navigate('/add-prods');
  }

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
    {/* <button <Link to={}></Link> className="add-product-button">Add New Product</button> */}
    <Link to='/products/add-new-product'> Add Products </Link>
    </>
    );
};

export default ProductList;