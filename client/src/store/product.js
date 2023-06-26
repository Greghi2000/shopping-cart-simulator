const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    isLoaded: true,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
})

console.log(productSlice)

export default productSlice.reducer