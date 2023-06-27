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
        },
        setCartById: (state, action) => {
            state.cartItems = action.payload
        }
    }
})

console.log(cartSlice)

export const { setCartById } = cartSlice.actions;
export default cartSlice.reducer