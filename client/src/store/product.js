const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    isLoaded: false,
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
    },
})

console.log(productSlice)

export const { setProducts } = productSlice.actions;
export default productSlice.reducer