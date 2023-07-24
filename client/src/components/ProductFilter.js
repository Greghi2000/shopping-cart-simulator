import React, { useState, useEffect } from 'react';
import { getAllAllergens, getProductsNotContainingAllergen } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsActive, setFilteredProducts, setAllergens } from '../store/filter';
import './ProductFilter.css'

const ProductFilter = () => {
  const dispatch = useDispatch()
  const allergens = useSelector((state) => state.filter.allergens)

  useEffect(() => {
    getAllAllergens()
      .then(data => dispatch(setAllergens(data)))
      .catch(console.error);
    }, [])

  const handleClick = (allergenId) => {
    getProductsNotContainingAllergen(allergenId)
      .then(data => dispatch(setFilteredProducts(data)))
      .then(data => console.log(allergenId))
      .catch(console.error)
      dispatch(setIsActive(true))
    }
  const handleResetClick = () => {
    dispatch(setIsActive(false))
    }

  return (
    <div className="allergen-filter">
        <h3>Allergen Filter</h3>
        {allergens && allergens.length > 0 ? (
        <>
            {allergens.map((allergen) => (
            <button key={allergen._ID} onClick={() => handleClick(allergen._ID)}>
                {allergen._allergenName}
            </button>
            ))}
            <button onClick={() => handleResetClick()}>
            Reset
            </button>
        </>
        ) : (
        <p>No allergens available.</p>
        )}
    </div>
    )
}

// when a specific something is clicked,
// it will be turned to true in state redux and if that value is true a different product list will render

export default ProductFilter;