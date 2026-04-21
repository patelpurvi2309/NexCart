import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  // selectedcategory : null,
  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity
        });
      }
    

    },



    removecart: (state, action) => {
      state.items = state.items.filter(items => items.id !== action.payload);
    },


    // Categoryproduct:(state,action) => {
    //   state.selectedcategory  = action.payload
    // }
  }
});

export const {addToCart , removecart } = cartSlice.actions;

export default cartSlice.reducer;
