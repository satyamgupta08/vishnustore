import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const { id, price, name, quantity,image } = action.payload;
            const existingItemIndex = state.findIndex(item => item.id === id);
            
            if (existingItemIndex !== -1) {
                // If the item is already in the cart, increment its count
                state[existingItemIndex].count += 1;
            } else {
                // If the item is not in the cart, add it
                state.push({
                    id,
                    price,
                    name,
                    count: quantity,
                    image
                });
            }

            console.log(action.payload);
        },
        remove: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.findIndex(item => item.id === id);
        
            if (existingItemIndex !== -1) {
                // If the item is found in the cart
                if (state[existingItemIndex].count === 1) {
                    // If the item count is 1, remove the item from the cart
                    state.splice(existingItemIndex, 1);
                } else {
                    // If the item count is more than 1, decrement the count
                    state[existingItemIndex].count -= 1;
                }
            }
        }
        
    }
});

export const { add,remove } = CartSlice.actions;
export default CartSlice.reducer;
