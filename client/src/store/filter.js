const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    isActive: false,
    filteredProducts: []
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
      }
    },
})

export const { setIsActive, setFilteredProducts } = filterSlice.actions;
export default filterSlice.reducer