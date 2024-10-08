import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";
// random masaNo

interface CartState {
  cart: any[];
}
const initialState:CartState = {
  cart: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action: PayloadAction<any>) => {
        state.cart.push(action.payload);
      },
      prepare: (item: any) => ({
        payload: item
      })
    },
    clearCart: {
      reducer: (state, action: PayloadAction<any>) => {
        state.cart.push(action.payload);
      },
      prepare: (item: any) => ({
        payload: item
      })
    }
  },
});

export const {
addToCart,
clearCart
} = flightSlice.actions;

export default flightSlice.reducer;
