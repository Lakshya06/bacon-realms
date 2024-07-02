import { createSlice } from "@reduxjs/toolkit";
// import { store } from ".";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }
            else{
                state.items.push({productId, quantity});
            }
            // state.items.push({productId, quantity});
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }
            else{
                // delete state.items[indexProductId];
                state.items = (state.items).filter(item => item.productId !== productId);
            }
        }
    }
})

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;