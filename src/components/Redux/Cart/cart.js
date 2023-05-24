import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  array: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItem: (state, action) => {
      state.array.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.array.findIndex(item => item.id === action.payload);

      state.array.splice(index, 1);
    },
    changeQuantity: (state, action) => {
      const index = state.array.findIndex(
        item => item._id === action.payload.id
      );

      state.array[index].quantity = action.payload.value;
    },
  },
});

export const { addItem, changeQuantity } = cartSlice.actions;

export const getCart = state => state.cart.array;

export default cartSlice.reducer;
