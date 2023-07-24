const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    isActive: false,
    filteredProducts: [],
    allergens: []
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      setIsActive: (state, action) => {
        state.isActive = action.payload
      },
      setFilteredProducts: (state, action) => {
        state.filteredProducts = action.payload
      },
      setAllergens: (state, action) => {
        state.allergens = action.payload
      }
    },
})

export const { setIsActive, setFilteredProducts, setAllergens } = filterSlice.actions;
export default filterSlice.reducer