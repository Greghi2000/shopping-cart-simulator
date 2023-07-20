import {configureStore} from '@reduxjs/toolkit'
import productSlice from './store/product'
import cartSlice from './store/cart'
import authenticationSlice from './store/authentication'

export const store = configureStore ({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        authentication: authenticationSlice
    }
})