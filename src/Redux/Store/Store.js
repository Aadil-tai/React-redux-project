import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Slices/CartSlice';
import React from 'react'
const Store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default Store;
