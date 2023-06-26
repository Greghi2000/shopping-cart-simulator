const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: null,
    totalPrice: 0,
    cartItems: [1,2,3,4],
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

console.log(cartSlice)

export default cartSlice.reducer