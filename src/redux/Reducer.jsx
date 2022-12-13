import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartitem: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      let data = action.payload;
   
      const isItemExist = state.cartitem.find((i) => i.id === data.id);

      if (isItemExist) {
        state.cartitem.forEach((i) => {
          if (i.id === data.id) {
            i.quantity += 1;
          
          }
        });
      } else {
        state.cartitem.push(data);
      }
    },

    decrement:(state,action)=>{

        const item = state.cartitem.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartitem.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }

    },
    removeFromCart:(state,action)=>{
        state.cartitem = state.cartitem.filter((i) => i.id !== action.payload);
    },

    calculateTotal:(state)=>{
        let sum = 0;
        state.cartitem.forEach((i) => (sum += i.price * i.quantity));
        state.subTotal = sum;
        state.shipping = state.subTotal > 1000 ? 0 : 200
        state.tax = +(state.subTotal * 0.18).toFixed();
        state.total = state.subTotal + state.tax + state.shipping;
    }

    
  }
);
