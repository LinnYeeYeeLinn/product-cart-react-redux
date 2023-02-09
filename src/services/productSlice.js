import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        fav: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;
        },
        addToFav: (state, action) => {
            state.fav.push(action.payload)
        },
        removeFromFav: (state, action) => {
            state.fav = state.fav.filter(i => i.id !== action.payload.id)
        }
    }
})

export const {addProducts, addToFav, removeFromFav} = productSlice.actions;
export default productSlice.reducer;