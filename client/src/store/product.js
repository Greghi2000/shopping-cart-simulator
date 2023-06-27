const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    isLoaded: true,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.items = action.payload;
        state.isLoaded = true;
      },
    },
  })

console.log(productSlice)

export const { setProducts } = productSlice.actions;
export default productSlice.reducer