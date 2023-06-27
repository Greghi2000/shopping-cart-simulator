import React from 'react';

const ProductItem = ({ ID, Title, Price, Description, ImageURL }) => {
  return (
    <div>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <p>Price: ${Price}</p>
      <img src={ImageURL} alt={Title} />
      <hr />
    </div>
  )
}

export default ProductItem;