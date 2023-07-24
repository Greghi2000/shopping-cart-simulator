import React, { useEffect } from 'react';
import { getAllAllergens, getProductsNotContainingAllergen } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsActive, setFilteredProducts, setAllergens } from '../store/filter';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductFilter.css';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const allergens = useSelector((state) => state.filter.allergens);

  useEffect(() => {
    getAllAllergens()
      .then((data) => dispatch(setAllergens(data)))
      .catch(console.error);
  }, []);

  const handleClick = (allergenId) => {
    getProductsNotContainingAllergen(allergenId)
      .then((data) => dispatch(setFilteredProducts(data)))
      .then(() => console.log(allergenId))
      .catch(console.error);
    dispatch(setIsActive(true));
  };

  const handleResetClick = () => {
    dispatch(setIsActive(false));
  };

  return (
    <div className="allergen-filter">
      <Typography variant="h5" gutterBottom>
        Allergen Filter
      </Typography>
      {allergens && allergens.length > 0 ? (
        <>
          {allergens.map((allergen) => (
            <Button
              key={allergen._ID}
              variant="contained"
              color="primary"
              onClick={() => handleClick(allergen._ID)}
            >
              {allergen._allergenName}
            </Button>
          ))}
          <Button variant="outlined" className="no-transition" onClick={handleResetClick}>
            Reset
          </Button>
        </>
      ) : (
        <Typography variant="body1">
          No allergens available.
        </Typography>
      )}
    </div>
  );
};

export default ProductFilter;