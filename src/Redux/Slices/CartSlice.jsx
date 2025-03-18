import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            // state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            // const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            // if (itemIndex !== -1) {
            //     state.cartItems.splice(itemIndex, 1);
            // }

            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;