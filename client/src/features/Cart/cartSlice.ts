import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "model";

interface InitialStateProps {
  cartItems: { product: ProductProps; count: number }[];
  subTotal: number;
}

const initialState: InitialStateProps = {
  cartItems: [],
  subTotal: 0,
};

const getSubTotal = (state: InitialStateProps) => {
  let dummyTotal = 0;
  state.cartItems.map(
    (cartItem) => (dummyTotal += cartItem.product.newPrice! * cartItem.count)
  );
  state.subTotal = dummyTotal;
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: ProductProps; count: number }>
    ) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === action.payload.product._id
      );
      cartItemIndex >= 0
        ? (state.cartItems[cartItemIndex].count += action.payload.count)
        : state.cartItems.push(action.payload);

      // Get subTotal
      getSubTotal(state);
    },
    updateQty: (
      state,
      action: PayloadAction<{ _id: string; count: number }>
    ) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product._id === action.payload._id
      );
      if (cartItemIndex >= 0)
        state.cartItems[cartItemIndex].count = action.payload.count;

      // Get subTotal
      getSubTotal(state);
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product._id !== action.payload._id
      );
      // Get subTotal
      getSubTotal(state);
    },
  },
});

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;

export default cartSlice;
