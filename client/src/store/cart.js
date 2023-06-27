const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: null,
    totalPrice: 0,
    cartItems: [],
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

console.log(cartSlice)

export default cartSlice.reducer