import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const isExited = state.cart.find(c => c.id === item.id);
            if(isExited){
                return {
                    ...state, cart: state.cart.map(c => c.id === item.id ? {...item} : {...c})
                }
            }else{
                return {
                    ...state, cart: [...state.cart, {...item}]
                }
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(i => i.id !== action.payload.id)
        }
    }
})
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;