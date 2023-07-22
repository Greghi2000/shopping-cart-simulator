import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsActive, setFilteredProducts } from '../store/filter';
import './SearchBar.css'

const SearchBar = () => {
  const [searchParam, setSearchParam] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const dispatch = useDispatch()

  const handleSearch = () => {
    fetch(`http://localhost:3000/api/allergens/products-search?search=${encodeURIComponent(searchParam)}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setFilteredProducts(data))
        dispatch(setIsActive(true))
      })
      .catch(error => {
        console.error('Error fetching data', error);
      })
  }

  const handleInputChange = (e) => {
    setSearchParam(e.target.value)
    setIsSearchEmpty(e.target.value)
    if(e.target.value === ''){
        dispatch(setIsActive(false))
    }
  };

  return (
<div className="search-bar">
      <input
        type="text"
        value={searchParam}
        onChange={handleInputChange}
        placeholder="Enter search term"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      {/* {!isSearchEmpty && <p className="search-warning">Please enter a search term</p>} */}
    </div>
  )
}

export default SearchBar;