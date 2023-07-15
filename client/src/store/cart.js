const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: null,
    totalPrice: 0,
    cartItems: [],
    cartId: null,
    isLoading: true,
    cartChange: false,
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
        },
        setCartItemsByCartId: (state, action) => {
            state.cartItems = action.payload
        },
        setCartChange: (state, action) => {
            state.cartChange = action.payload
        },
    }
})

export const { setCartById, clearCart, setCartItemsByCartId, setCartChange } = cartSlice.actions;
export default cartSlice.reducer