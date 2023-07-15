const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    isLoaded: false,
    addedProductData: {}
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setProducts: (state, action) => { // these are the reducers
        console.log('This is current state maybe?', state.items)
        state.items = action.payload;
        state.isLoaded = true;
      },
      setAddedProductData: (state, action) => {
        state.addedProductData = action.payload
      }
    },
})

console.log(productSlice)

export const { setProducts, setAddedProductData } = productSlice.actions;
export default productSlice.reducer